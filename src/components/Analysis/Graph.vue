<template>
  <div class="card card-default">
    <!--头信息：改为选择块-->
    <div class="card-header">
      <ul class="nav nav-pills col-md-9">
        <h3 class="card-title">{{ ChartTitle }}</h3>
      </ul>
    </div>
    <!--头信息结束-->
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane active" id="tab_1">
          <!--搜索项选择器-->
          <section class="content">
            <div class="container-fluid">
              <div class="relationship-graph col-md-12">
                <div ref="chartDom" :style="ChartStyle"></div>
                <!-- <div id="trend-graph" style="width:100%;height:400px;align-content:center;"></div> -->
              </div>
            </div>
            <!-- /.row -->
          </section>
          <!--搜索器选择项结束-->
        </div>
      </div>
      <!-- /.tab-content -->
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts-wordcloud";
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  // ["BarTitle", "BarStyle", "option"]
  data() {
    return {
      chart: null
    };
  },
  props: {
    ChartTitle: {
      type: String
    },
    ChartStyle: {
      type: String
    },
    option: {
      type: Object,
      default: () => {}
    },
    link_first: {
      type: String
    },
    link_second: {
      type: String
    },
    link_third: {
      type: String
    },
    click_func: {
      type: Function
    },
    dblclick_func: {
      type: Function
    }
  },
  watch: {
    option: {
      handler(val) {
        // console.log(val);
        this.chart.setOption(val);
      },
      deep: true
    }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      if (this.link_first || this.link_second || this.link_third) {
        let l = this.link_first;
        let l1 = this.link_second;
        let l2 = this.link_third;
        this.chart.on("click", function(params) {
          let uuid = params.data.uuid;
          let index = params.data.categories;
          if (index === 0) {
            window.open(l + uuid, "_blank");
          } else if (index === 1) {
            window.open(l1 + uuid, "_blank");
          } else {
            window.open(l2 + uuid, "_blank");
          }
        });
      }
      this.chart.setOption(this.option, true);
      this.chart.on("click",(params)=>{
        this.click_func(params,this);
      })
      this.chart.on("dblclick",(params)=>{
        this.dblclick_func(params,this);
      })
    }
  }
};
</script>

<style></style>
