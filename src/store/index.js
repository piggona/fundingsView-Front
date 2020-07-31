import Vue from "vue";
import Vuex from "vuex";
import search from "./modules/search";
import fund from "./modules/fund";
import category from "./modules/category";
import tech from "./modules/tech";
import org from "./modules/org";
import industry from "./modules/industry";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "User Not Found"
    }
  },
  mutations: {
    getUsername() {
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf("patent_username=") == 0)
          this.state.userInfo.username = c.substring(
            "patent_username=".length,
            c.length
          );
      }
    }
  },
  modules: {
    search,
    fund,
    category,
    tech,
    org,
    industry
  }
});
