import tech from "../../api/tech";
import { TECH } from "../mutation-types";


const state = {
	titleData: {},
	resCategory: {},
	resTech: {},
	resOrg: {},
	resIndustry: {}
};

const getters = {};

const actions = {
	getTitle({ commit }, category_uuid) {
		tech.getTitle(res => {
			commit(TECH.GET_TITLE, res);
		}, category_uuid);
	},
	getResCategory({ commit }, uuid) {
		tech.getResCategory(res => {
			commit(TECH.GET_RES_CATEGORY, res);
		},uuid)
	},
	getResTech({ commit },uuid) {
		tech.getResTech(res => {
			commit(TECH.GET_RES_TECH, res);
		},uuid)
	},
	getResOrg({ commit },uuid) {
		tech.getResOrg(res => {
			commit(TECH.GET_RES_ORG, res);
		},uuid)
	},
	getResIndustry({ commit },uuid) {
		tech.getResIndustry(res => {
			commit(TECH.GET_RES_INDUSTRY, res);
		},uuid)
	}
};

const mutations = {
	[TECH.GET_TITLE](state, res) {
		state.titleData = res;
	},
	[TECH.GET_RES_CATEGORY](state, res) {
		state.resCategory = res;
	},
	[TECH.GET_RES_TECH](state, res) {
		state.resTech = res;
	},
	[TECH.GET_RES_ORG](state, res) {
		state.resOrg = res;
	},
	[TECH.GET_RES_INDUSTRY](state, res) {
		state.resIndustry = res;
	}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

