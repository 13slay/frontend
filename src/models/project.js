import { queryProject } from '@/services/api';

const buy = (number, crowdAddress, callback) => {
  if (!web3) {
    return Promise.reject();
  }
  const account = web3.eth.coinbase;
  const weiPerShare = '10000000000000000';
  const amount = number * weiPerShare;
  web3.eth.sendTransaction(
    {
      from: account,
      to: crowdAddress,
      value: amount,
    },
    callback
  );
};

export default {
  namespace: 'project',

  state: {
    list: [],
    number: 100,
    current: '',
    result: {},
  },

  effects: {
    *buy({ payload }, { call, put }) {
      yield buy(payload.number, payload.crowdAddress, payload.callback);
    },

    *fetchProjectList(_, { call, put }) {
      const response = yield call(queryProject);
      yield put({
        type: 'saveProjectList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveProjectList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrent(state, action) {
      return {
        ...state,
        current: action.payload,
      };
    },
    saveResult(state, action) {
      console.log(action);
      return {
        ...state,
        result: action.payload,
      };
    },
    saveNumber(state, action) {
      return {
        ...state,
        number: action.payload,
      };
    },
  },
};
