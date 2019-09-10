const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const COMPLETE = 'COMPLETE';

const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

// helpers
export function action(type, payload) {
  return typeof payload === 'undefined' ? { type } : { type, payload };
}

export function createAction(type) {
  return payload => action(type, payload);
}

/* eslint no-unused-vars: "off"*/
export function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, COMPLETE].forEach(type => {
    res[type] = `${base}::${type}`;
  });
  return res;
}

export function createActionsFromTypes(actionTypes) {
  const res = {};
  Object.keys(actionTypes).forEach(type => {
    res[type.toLowerCase()] = createAction(actionTypes[type]);
  });
  return res;
}

// generators CRUD action types
export function createCrudTypes(base) {
  const res = {};
  [CREATE, READ, UPDATE, DELETE].forEach(type => {
    res[type] = createRequestTypes(`${base}_${type}`);
  });
  return res;
}

// generates CRUD action creators:
export function createCrudActions(actionTypes) {
  const res = {};
  Object.keys(actionTypes).forEach(type => {
    res[type.toLowerCase()] = {};
    Object.keys(actionTypes[type]).forEach(item => {
      res[type.toLowerCase()][item.toLowerCase()] = createAction(actionTypes[type][item]);
    });
  });
  return res;
}
