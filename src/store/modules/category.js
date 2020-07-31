import category from "../../api/category";
import { CATEGORY } from "../mutation-types";

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
		category.getTitle(res => {
			commit(CATEGORY.GET_TITLE, res);
		}, category_uuid);
	},
	getResCategory({ commit }, uuid) {
		category.getResCategory(res => {
			commit(CATEGORY.GET_RES_CATEGORY, res);
		},uuid)
	},
	getResTech({ commit },uuid) {
		category.getResTech(res => {
			commit(CATEGORY.GET_RES_TECH, res);
		},uuid)
	},
	getResOrg({ commit },uuid) {
		category.getResOrg(res => {
			commit(CATEGORY.GET_RES_ORG, res);
		},uuid)
	},
	getResIndustry({ commit },uuid) {
		category.getResIndustry(res => {
			commit(CATEGORY.GET_RES_INDUSTRY, res);
		},uuid)
	}
};

const mutations = {
	[CATEGORY.GET_TITLE](state, res) {
		state.titleData = res;
	},
	[CATEGORY.GET_RES_CATEGORY](state, res) {
		state.resCategory = res;
	},
	[CATEGORY.GET_RES_TECH](state, res) {
		state.resTech = res;
	},
	[CATEGORY.GET_RES_ORG](state, res) {
		state.resOrg = res;
	},
	[CATEGORY.GET_RES_INDUSTRY](state, res) {
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