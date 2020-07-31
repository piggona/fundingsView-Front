import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import {
  Affix,
  Table,
  Tabs,
  Card,
  Collapse,
  Input,
  Layout,
  Checkbox,
  Radio,
  DatePicker,
  Button,
  Row,
  Col,
  Modal,
  Popover,
  Steps,
  Statistic,
  List,
  Spin,
  Tree,
  Tag
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Tag);
Vue.use(Affix);
Vue.use(Table);
Vue.use(List);
Vue.use(Card);
Vue.use(Tabs);
Vue.use(Spin);
Vue.use(Collapse);
Vue.use(Layout);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Row);
Vue.use(Input);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Popover);
Vue.use(Steps);
Vue.use(Statistic);
Vue.use(Tree);
Vue.component("v-icon", Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
