import org from "../../api/org";
import { ORG } from "../mutation-types";


const state = {
	titleData: {},
	resCategory: {},
	resTech: {},
	resOrg: {},
	resIndustry: {}
};

const getters = {};

const actions = {
	getTitle({ commit }, uuid) {
		org.getTitle(res => {
			commit(ORG.GET_TITLE, res);
		}, uuid);
	},
	getResCategory({ commit }, uuid) {
		org.getResCategory(res => {
			commit(ORG.GET_RES_CATEGORY, res);
		},uuid)
	},
	getResTech({ commit },uuid) {
		org.getResTech(res => {
			commit(ORG.GET_RES_TECH, res);
		},uuid)
	},
	getResOrg({ commit },uuid) {
		org.getResOrg(res => {
			commit(ORG.GET_RES_ORG, res);
		},uuid)
	},
	getResIndustry({ commit },uuid) {
		org.getResIndustry(res => {
			commit(ORG.GET_RES_INDUSTRY, res);
		},uuid)
	}
};

const mutations = {
	[ORG.GET_TITLE](state, res) {
		state.titleData = res;
	},
	[ORG.GET_RES_CATEGORY](state, res) {
		state.resCategory = res;
	},
	[ORG.GET_RES_TECH](state, res) {
		state.resTech = res;
	},
	[ORG.GET_RES_ORG](state, res) {
		state.resOrg = res;
	},
	[ORG.GET_RES_INDUSTRY](state, res) {
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

