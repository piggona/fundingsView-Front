import fund from "../../api/fund";
import { FUND } from "../mutation-types";

const state = {
  titleData: {},
  resCoptree: {},
  resWordtree: {}
};

const getters = {};

const actions = {
  getTitle({ commit }, fund_uuid) {
    fund.getTitle(res => {
      commit(FUND.GET_TITLE, res);
    }, fund_uuid);
  },
  getCoptree({ commit }, fund_uuid) {
    fund.getCoptree(res => {
      commit(FUND.GET_COP, res);
    }, fund_uuid);
  },
  getWordtree({ commit }, fund_uuid) {
    fund.getWordtree(res => {
      commit(FUND.GET_WORD, res);
    }, fund_uuid);
  }
};

const mutations = {
  [FUND.GET_TITLE](state, res) {
    state.titleData = res;
  },
  [FUND.GET_COP](state, res) {
    state.resCoptree = res;
    // console.log("FUND.GET_COP:", state.resCoptree);
  },
  [FUND.GET_WORD](state, res) {
    state.resWordtree = res;
    // console.log("FUND.GET_WORD:", state.resWordtree);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
