import {Store} from 'redux';

let store: Store | undefined;

function setStore(st: Store) {
  store = st;
}

function getStore(): Store | undefined {
  return store;
}

export default {
  setStore,
  getStore,
};
