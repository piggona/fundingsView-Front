import { SEARCH } from "../mutation-types";
import search from "../../api/search";

const state = {
  basic: "",
  search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "basic", query: "", logic: "and" },
      { attr: "Investigator", query: "", logic: "and" },
      { attr: "Institution", query: "", logic: "and" },
      { attr: "Technology", query: "", logic: "and" },
      { attr: "Industry", query: "", logic: "and" },
      { attr: "Date", query: "", logic: "" }
    ]
  },
  fund_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "basic", query: "", logic: "and" },
      { attr: "Investigator", query: "", logic: "and" },
      { attr: "Institution", query: "", logic: "and" },
      { attr: "Technology", query: "", logic: "and" },
      { attr: "Industry", query: "", logic: "and" },
      { attr: "Date", query: "", logic: "" }
    ]
  },
  search_result: {},
  isSearching: false,
  statistic: { fundingsAmount: 0, avgInvested: 0 },
  fundRank: {
    data: [],
    order_type: "金额"
  },
  resPie: {},
  resCloud: {},
  treeNodes: {}
};

const getters = {};

const actions = {
  getBasic({ commit }) {
    search.getBasic(res => {
      commit(SEARCH.GET_BASIC, res);
    });
  },
  setRank({ commit }, activeAmount) {
    // console.log("setRank", activeAmount);
    search.setRank(res => {
      commit(SEARCH.SET_RANK, res);
    }, activeAmount);
  },
  setTech({ commit }, activeTech) {
    // console.log("setTech:", activeTech);
    search.setTech(res => {
      commit(SEARCH.SET_TECH, res);
    }, activeTech);
  },
  getSearch({ commit }) {
    // console.log("getSearch searchphrase:", state.search_phrase);
    search.getSearchResult(res => {
      commit(SEARCH.GET_SEARCH_RESULT, res);
    }, 
    state.search_phrase,
    ()=>{
      commit("setSearching",false);
    });
  },
  initSearch({ commit }, searchphrase) {
    // console.log("initSearch search_phrase:", searchphrase);
    search.getSearchResult(res => {
      commit(SEARCH.GET_SEARCH_RESULT, res);
    }, 
    searchphrase,
    ()=>{
      commit("setSearching",false);
    });
  }
};

const mutations = {
  [SEARCH.GET_SEARCH_RESULT](state, res) {
    state.search_result = res;
  },
  [SEARCH.GET_BASIC](state, res) {
    state.statistic = res.statistic;
    state.fundRank = res.fundRank;
    state.resPie = res.resPie;
    state.resCloud = res.resCloud;
    state.treeNodes = res.treeNodes;
  },
  [SEARCH.SET_RANK](state, res) {
    state.fundRank = res;
    // console.log("SEARCH.SET_RANK:", state.fundRank);
  },
  [SEARCH.SET_TECH](state, res) {
    state.treeNodes = res;
    // console.log("SEARCH.SET_TECH:", state.treeNodes);
  },
  setSearching(state,value) {
    state.isSearching = value;
  },
  setQuery(state, { id, val }) {
    // console.log(id);
    // console.log(val);
    if (id === 0) {
      state.search_phrase.query[id].query = state.basic +" "+ val;
    } else {
      state.search_phrase.query[id].query = val;
    }
    // state.search_phrase.query[id].query = val;
    // console.log("setQuery search_phrase:", state.search_phrase);
  },
  initQuery(state) {
    state.search_phrase = JSON.parse(JSON.stringify(state.fund_search_phrase));
    // console.log("initQuery:", state.search_phrase);
  },
  setBasic(state, val) {
    state.basic = val;
    // console.log("setBasic:", state.basic);
  },
  setLogic(state, { id, val }) {
    state.search_phrase.query[id].logic = val;
    // console.log("setLogic search_phrase:", state.search_phrase);
  },
  setAttr(state, { id, val }) {
    state.search_phrase.query[id].attr = val;
  },
  setSort(state, sort) {
    state.search_phrase.sort = sort;
  },
  setRange(state, { from, size }) {
    state.search_phrase.from = from;
    state.search_phrase.size = size;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
