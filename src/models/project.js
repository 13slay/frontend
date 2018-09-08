import { queryProject } from '@/services/api';

export default {
  namespace: 'project',

  state: {
    list: [],
    current: -1,
  },

  effects: {
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
        project: action.payload,
      };
    },
    saveCurrent(state, action) {
      return {
        ...state,
        current: action.current,
      };
    },
  },
};
