<template>
  <a-card>
    <div slot="title">{{ title }}</div>
    <a-row>
      <a-col :span="16">
        <a-tabs 
          default-active-key="1" 
          defaultActiveKey="1"
          :tabPosition="'left'"
          :style="{ height: '100%' }"
        >
          <a-tab-pane key="1" :tab="chartOneTab">
            <Chart
              :ChartStyle="chartStyle"
              :option="chartOptionOne"
              :link_first="link_first"
              :link_second="link_second"
              :link_third="link_third"
              :click_func="click_func_one"
              :dblclick_func="dblclick_func_one"
            />
          </a-tab-pane>
          <a-tab-pane key="2" :tab="chartTwoTab">
            <Chart
              :ChartStyle="chartStyle"
              :option="chartOptionTwo"
              :link_first="link_first"
              :link_second="link_second"
              :link_third="link_third"
              :click_func="click_func_two"
              :dblclick_func="dblclick_func_two"
            />
          </a-tab-pane>
        </a-tabs>
        
      </a-col>
      <a-col :span="8">
        <List :option="option" :list="list" />
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import List from "./List";
import Chart from "./Graph";
export default {
  props: [
    "title",
    "option",
    "list",
    "chartStyle",
    "chartOptionOne",
    "chartOneTab",
    "chartOptionTwo",
    "chartTwoTab",
    "link_first",
    "link_second",
    "link_third",
    "click_func_one",
    "click_func_two",
    "dblclick_func_one",
    "dblclick_func_two"
  ],
  components: {
    List,
    Chart
  }
};
</script>

<style>
</style>
