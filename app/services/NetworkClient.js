import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import _ from 'lodash';
import qs from 'qs';

import { API_BASE_URL } from '../config';

// import GlobalErrorHandler from './GlobalErrorHandler';

export class NetworkClient {
  axiosClient;
  store = null;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  injectStore = store => {
    this.store = store;
  };

  get = request => {
    return this.request(request, 'GET');
  };

  put = request => {
    return this.request(request, 'PUT');
  };
  delete = request => {
    return this.request(request, 'DELETE');
  };
  post = request => {
    return this.request(request, 'POST');
  };

  constructRequestConfigs = ({ resource, id, body, filter, url, headers }, method) => {
    // if url is sent, ignore any url constructions and query params and just use url
    if (url) {
      return {
        url,
        method,
        data: body,
        headers: headers || this.getHeaders(),
        transformRequest: data => {
          const decBody = decamelizeKeys(data);
          return qs.stringify(decBody, { encode: true });
        },
      };
    }

    const constructedParams = {
      ...filter,
      ...this.getAppQueryParams(),
    };

    const configs = {
      method,
      data: body,
      params: constructedParams,
      headers: headers || this.getHeaders(),
      paramsSerializer: params => {
        const decParams = decamelizeKeys(params);
        return qs.stringify(decParams, {
          encode: false,
          indices: false,
        });
      },
      transformRequest: data => {
        const decBody = decamelizeKeys(data);
        return qs.stringify(decBody, { encode: true });
      },
      url: id ? `/${resource}/${id}` : `/${resource}`,
    };
    return configs;
  };

  request = async (requestPayload, method) => {
    const configs = this.constructRequestConfigs(requestPayload, method);
    try {
      const response = await this.axiosClient.request(configs);
      return this.handleResponse(response);
    } catch (error) {
      this.onError(error);
      throw error;
    }
  };

  handleResponse = response => {
    const camelizedJson = camelizeKeys(response.data, {
      process: (key, convert, options) => {
        return key === key.toUpperCase() ? key : convert(key, options);
      },
    });
    // @ts-ignore
    if (!_.isEmpty(camelizedJson.errors)) {
      // @ts-ignore
      throw camelizedJson.errors;
    }
    return camelizedJson;
  };

  onError = error => {
    console.log(error);
    // GlobalErrorHandler.handleNetworkError(error);
  };

  getHeaders() {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded', // TODO: check this
    };

    if (!this.store) {
      return headers;
    }

    // const state = this.store.getState();
    const token = ''; //getXToken(state);

    if (token) {
      headers['X-TOKEN'] = token;
    }

    return headers;
  }

  getAppQueryParams() {
    if (!this.store) {
      return {};
    }
    const state = this.store.getState();
    // return getAppQueryParams(state);
    return state;
  }
}

export default new NetworkClient();
