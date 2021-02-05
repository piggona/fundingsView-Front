<template>
  <div class="w">
    <!-- 第一部分，基金简介 -->
    <div class="part">
      <a-card>
        <TitleFund
          :AwardTitle="titleData.AwardTitle"
          :description="titleData.description"
          :AbstractNarration="titleData.AbstractNarration"
          :Organization="titleData.Organization"
          :AwardAmount="titleData.AwardAmount"
          :Institution="titleData.Institution"
          :Investigator="titleData.Investigator"
        />
      </a-card>
    </div>
    <!-- 结束 -->
    <!-- 第二部分，基金分析 -->
    <div class="part">
      <div class="part-title">基金关联层次分析</div>
      <hr />
      <div class="part">
        <a-tabs
          defaultActiveKey="1"
          :tabPosition="'left'"
          :style="{ height: '100%' }"
        >
          <a-tab-pane tab="基金关键词" key="1">
            <Graph
              :ChartStyle="chartStyle"
              :option="resWordtree"
              :dblclick_func="categoryFunc"
            />
          </a-tab-pane>
          <a-tab-pane tab="基金承担机构" key="2">
            <Graph :ChartStyle="chartStyle" :option="resCoptree" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- 结束 -->
    <!-- 第三部分，关联趋势分析 -->
    <div class="part">
      <div class="part-title">关联趋势分析</div>
      <hr />
      <div class="part">
        <a-tabs
          defaultActiveKey="1"
          :tabPosition="'left'"
          :style="{ height: '100%' }"
        >
          <a-tab-pane tab="基金承担机构" key="2">
            <Graph :ChartStyle="chartStyle" :option="collabOption" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- 结束 -->
    <!-- 第三部分，同类基金 -->
    <div class="part">
      <div class="part-title">同类基金</div>
      <hr />
      <a-list
        class="demo-loadmore-list"
        :loading="loading"
        itemLayout="horizontal"
        :dataSource="data"
      >
        <!-- loadmore逻辑 -->
        <div
          v-if="showLoadingMore"
          slot="loadMore"
          :style="{
            textAlign: 'center',
            marginTop: '12px',
            height: '32px',
            lineHeight: '32px'
          }"
        >
          <a-spin v-if="loadingMore" />
          <a-button v-else @click="onLoadMore">loading more</a-button>
        </div>
        <!-- 结束 -->
        <!-- 列表元素 -->
        <a-list-item slot="renderItem" slot-scope="item, index">
          <!-- <a slot="actions">edit</a> -->
          <!-- 点击的链接 -->
          <a :href="'fundings?uuid=' + item.uuid" slot="actions">内容</a>
          <!-- 结束 -->
          <!-- 标题和解释 -->
          <a-list-item-meta :description="item.word">
            {{ index }}
            <a slot="title" :href="'fundings?fund=' + item.uuid">{{
              item.title
            }}</a>
            <!-- <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            /> -->
          </a-list-item-meta>
          <!-- 结束 -->
          <!-- 其它内容 -->
          <!-- <div>content</div> -->
          <!-- 结束 -->
        </a-list-item>
      </a-list>
    </div>
    <!-- 结束 -->
  </div>
</template>

<script>
import TitleFund from "../../components/Analysis/TitleFund";
import Graph from "../../components/Analysis/Graph";
import reqwest from "reqwest";
import { mapState } from "vuex";

var itemStyle = {
  opacity: 0.8
};

var sizeFunction = function(x) {
  var y = Math.sqrt(x / 5e2) + 0.1;
  return y * 80;
};
// Schema:
var schema = [
  { name: "Income", index: 0, text: "涉及金额", unit: "美元" },
  { name: "LifeExpectancy", index: 1, text: "关联度", unit: "" },
  { name: "Population", index: 2, text: "涉及基金数量", unit: "" },
  { name: "Country", index: 3, text: "产业", unit: "" }
];

const CoData = {
  counties: [
    "Medical",
    "Metals",
    "Aerospace",
    "Fuel",
    "tourism",
    "engine",
    "motor",
    "iron",
    "cryogen",
    "smoke",
    "food",
    "wood",
    "Dairy",
    "Missle",
    "Electronics",
    "Fur",
    "plank",
    "Agriculture",
    "Poltry"
  ],
  timeline: [2010, 2011, 2012, 2013, 2014, 2015],
  series: [
    [
      [41330, 81.7, 22162863, "iron", 2010],
      [40773, 81.1, 34126173, "cryogen", 2010],
      [9430, 75.9, 1340968737, "Medical", 2010],
      [18477, 78, 11308133, "smoke", 2010],
      [39425, 80, 5367693, "food", 2010],
      [36745, 81.2, 62961136, "engine", 2010],
      [40632, 80.2, 80435307, "motor", 2010],
      [38809, 82.5, 318042, "wood", 2010],
      [4547, 65.1, 1230984504, "tourism", 2010],
      [34404, 83, 127319802, "Dairy", 2010],
      [1393, 70.8, 24500506, "Missle", 2010],
      [30440, 80, 49090041, "Electronics", 2010],
      [31824, 80.5, 4369027, "Fur", 2010],
      [62946, 80.9, 4891251, "plank", 2010],
      [21328, 76.1, 38574682, "Agriculture", 2010],
      [21664, 68.7, 143158099, "Fuel", 2010],
      [16674, 75.7, 72310416, "Poltry", 2010],
      [36240, 80, 62716684, "Aerospace", 2010],
      [49373, 78.5, 309876170, "Metals", 2010]
    ],
    [
      [41706, 81.8, 22542371, "iron", 2011],
      [41567, 81.3, 34499905, "cryogen", 2011],
      [10274, 76.1, 1348174478, "Medical", 2011],
      [19005, 78.1, 11323570, "smoke", 2011],
      [40251, 80.3, 5395816, "food", 2011],
      [37328, 81.4, 63268405, "engine", 2011],
      [42080, 80.3, 80424665, "motor", 2011],
      [39619, 82.7, 321030, "wood", 2011],
      [4787, 65.5, 1247446011, "tourism", 2011],
      [34316, 82.8, 127252900, "Dairy", 2011],
      [1397, 71, 24631359, "Missle", 2011],
      [31327, 80.3, 49356692, "Electronics", 2011],
      [32283, 80.6, 4404483, "Fur", 2011],
      [62737, 81.1, 4953945, "plank", 2011],
      [22333, 76.5, 38594217, "Agriculture", 2011],
      [22570, 69.4, 143211476, "Fuel", 2011],
      [17908, 76, 73517002, "Poltry", 2011],
      [36549, 80.4, 63164949, "Aerospace", 2011],
      [49781, 78.7, 312390368, "Metals", 2011]
    ],
    [
      [42522, 81.8, 22911375, "iron", 2012],
      [41865, 81.4, 34868151, "cryogen", 2012],
      [11017, 76.3, 1355386952, "Medical", 2012],
      [19586, 78.2, 11342631, "smoke", 2012],
      [39489, 80.5, 5424644, "food", 2012],
      [37227, 81.6, 63561798, "engine", 2012],
      [42959, 80.5, 80477952, "motor", 2012],
      [39925, 82.8, 323407, "wood", 2012],
      [4967, 65.9, 1263589639, "tourism", 2012],
      [34988, 83.2, 127139821, "Dairy", 2012],
      [1393, 71.1, 24763353, "Missle", 2012],
      [31901, 80.4, 49608451, "Electronics", 2012],
      [32806, 80.6, 4435883, "Fur", 2012],
      [63620, 81.3, 5018367, "plank", 2012],
      [22740, 76.7, 38609486, "Agriculture", 2012],
      [23299, 70.4, 143287536, "Fuel", 2012],
      [18057, 76.2, 74849187, "Poltry", 2012],
      [36535, 80.8, 63573766, "Aerospace", 2012],
      [50549, 78.8, 314799465, "Metals", 2012]
    ],
    [
      [42840, 81.8, 23270465, "iron", 2013],
      [42213, 81.5, 35230612, "cryogen", 2013],
      [11805, 76.5, 1362514260, "Medical", 2013],
      [20122, 78.3, 11362505, "smoke", 2013],
      [38788, 80.6, 5453061, "food", 2013],
      [37309, 81.7, 63844529, "engine", 2013],
      [42887, 80.7, 80565861, "motor", 2013],
      [40958, 82.8, 325392, "wood", 2013],
      [5244, 66.2, 1279498874, "tourism", 2013],
      [35614, 83.3, 126984964, "Dairy", 2013],
      [1392, 71.2, 24895705, "Missle", 2013],
      [32684, 80.5, 49846756, "Electronics", 2013],
      [33360, 80.6, 4465276, "Fur", 2013],
      [63322, 81.4, 5083450, "plank", 2013],
      [23144, 76.9, 38618698, "Agriculture", 2013],
      [23561, 71.3, 143367341, "Fuel", 2013],
      [18579, 76.3, 76223639, "Poltry", 2013],
      [36908, 81, 63955654, "Aerospace", 2013],
      [51282, 78.9, 317135919, "Metals", 2013]
    ],
    [
      [43219, 81.8, 23622353, "iron", 2014],
      [42817, 81.6, 35587793, "cryogen", 2014],
      [12609, 76.7, 1369435670, "Medical", 2014],
      [20704, 78.4, 11379111, "smoke", 2014],
      [38569, 80.7, 5479660, "food", 2014],
      [37218, 81.8, 64121249, "engine", 2014],
      [43444, 80.9, 80646262, "motor", 2014],
      [41237, 82.8, 327318, "wood", 2014],
      [5565, 66.5, 1295291543, "tourism", 2014],
      [35635, 83.4, 126794564, "Dairy", 2014],
      [1391, 71.3, 25026772, "Missle", 2014],
      [33629, 80.6, 50074401, "Electronics", 2014],
      [33538, 80.6, 4495482, "Fur", 2014],
      [64020, 81.5, 5147970, "plank", 2014],
      [23952, 77.1, 38619974, "Agriculture", 2014],
      [23293, 72.21, 143429435, "Fuel", 2014],
      [18884, 76.4, 77523788, "Poltry", 2014],
      [37614, 81.2, 64331348, "Aerospace", 2014],
      [52118, 79, 319448634, "Metals", 2014]
    ],
    [
      [44056, 81.8, 23968973, "iron", 2015],
      [43294, 81.7, 35939927, "cryogen", 2015],
      [13334, 76.9, 1376048943, "Medical", 2015],
      [21291, 78.5, 11389562, "smoke", 2015],
      [38923, 80.8, 5503457, "food", 2015],
      [37599, 81.9, 64395345, "engine", 2015],
      [44053, 81.1, 80688545, "motor", 2015],
      [42182, 82.8, 329425, "wood", 2015],
      [5903, 66.8, 1311050527, "tourism", 2015],
      [36162, 83.5, 126573481, "Dairy", 2015],
      [1390, 71.4, 25155317, "Missle", 2015],
      [34644, 80.7, 50293439, "Electronics", 2015],
      [34186, 80.6, 4528526, "Fur", 2015],
      [64304, 81.6, 5210967, "plank", 2015],
      [24787, 77.3, 38611794, "Agriculture", 2015],
      [23038, 73.13, 143456918, "Fuel", 2015],
      [19360, 76.5, 78665830, "Poltry", 2015],
      [38225, 81.4, 64715810, "Aerospace", 2015],
      [53354, 79.1, 321773631, "Metals", 2015]
    ]
  ]
};

export default {
  data() {
    return {
      chartStyle: "width:100%;height:400px;align-content:center;",
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
      page: 0,
      categoryFunc: function(params, _this) {
        // console.log("categoryFunc log:")
        // console.log(params);
        _this.$router.push({
          path: "/analysis/" + params.data.type,
          query: { uuid: params.data.uuid }
        });
      }
    };
  },
  mounted() {
    this.$store.dispatch("fund/getTitle", this.uuid);
    this.$store.dispatch("fund/getCoptree", this.uuid);
    this.$store.dispatch("fund/getWordtree", this.uuid);
    let _page = this.page;
    let _uuid = this.$route.query.fund;
    this.getData(
      res => {
        this.loading = false;
        this.data = res;
      },
      { _uuid, _page }
    );
  },
  computed: {
    ...mapState({
      titleData: state => state.fund.titleData,
      resCoptree: state => state.fund.resCoptree,
      resWordtree: state => state.fund.resWordtree
    }),
    uuid() {
      return this.$route.query.fund;
    },
    collabOption() {
      var CollaborationOption = {
        baseOption: {
          timeline: {
            axisType: "category",
            orient: "vertical",
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            symbol: "none",
            checkpointStyle: {
              borderWidth: 2
            },
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false
            },
            data: []
          },
          title: [
            {
              text: CoData.timeline[0],
              textAlign: "center",
              left: "63%",
              top: "55%",
              textStyle: {
                fontSize: 100
              }
            },
            {
              text: "关联趋势变化图",
              left: "center",
              top: 10,
              textStyle: {
                fontWeight: "normal",
                fontSize: 20
              }
            }
          ],
          tooltip: {
            padding: 5,
            borderWidth: 1,
            formatter: function(obj) {
              var value = obj.value;
              return (
                schema[3].text +
                "：" +
                value[3] +
                "<br>" +
                schema[1].text +
                "：" +
                value[1] +
                schema[1].unit +
                "<br>" +
                schema[0].text +
                "：" +
                value[0] +
                schema[0].unit +
                "<br>" +
                schema[2].text +
                "：" +
                value[2] +
                "<br>"
              );
            }
          },
          grid: {
            top: 100,
            containLabel: true,
            left: 30,
            right: "110"
          },
          xAxis: {
            type: "log",
            name: "涉及金额",
            max: 10000000,
            min: 10000,
            nameGap: 25,
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 18
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value} $"
            }
          },
          yAxis: {
            type: "value",
            name: "关联度",
            max: 100,
            nameTextStyle: {
              fontSize: 18
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value} "
            }
          },
          visualMap: [
            {
              show: false,
              dimension: 3,
              categories: CoData.counties,
              inRange: {
                color: (function() {
                  var colors = [
                    "#51689b",
                    "#ce5c5c",
                    "#fbc357",
                    "#8fbf8f",
                    "#659d84",
                    "#fb8e6a",
                    "#c77288",
                    "#786090",
                    "#91c4c5",
                    "#6890ba"
                  ];
                  return colors.concat(colors);
                })()
              }
            }
          ],
          series: [
            {
              type: "scatter",
              itemStyle: itemStyle,
              data: CoData.series[0],
              symbolSize: function(val) {
                return sizeFunction(val[2]);
              }
            }
          ],
          animationDurationUpdate: 1000,
          animationEasingUpdate: "quinticInOut"
        },
        options: []
      };
      for (var n = 0; n < CoData.timeline.length; n++) {
        let codata = CoData.series[n];
        codata.map(x => {
          x[0] = x[0] * 100;
          x[2] = parseInt(x[2] / 1000000);
        });
        CollaborationOption.baseOption.timeline.data.push(CoData.timeline[n]);
        CollaborationOption.options.push({
          title: {
            show: true,
            text: CoData.timeline[n] + ""
          },
          series: {
            name: CoData.timeline[n],
            type: "scatter",
            itemStyle: itemStyle,
            data: codata,
            // data:CoData.series[n],
            symbolSize: function(val) {
              return sizeFunction(val[2]);
            }
          }
        });
      }
      console.log("collab option:", CollaborationOption);
      return CollaborationOption;
    }
  },
  methods: {
    getData(callback, { _uuid, _page }) {
      reqwest({
        url:
          process.env.VUE_APP_BASE_API +
          "api/fund/similar/" +
          _uuid +
          "/" +
          _page,
        type: "json",
        method: "get",
        contentType: "application/json",
        success: res => {
          let data = res.data.data;
          // console.log(data);
          data.map(x => {
            let temp = x.keywords;
            let result = "";
            for (let i = 0; i < temp.length; i++) {
              result += " " + temp[i];
            }
            x.word = result;
          });
          // console.log("methods getData:", data);
          callback(data);
        }
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.page += 10;
      let _page = this.page;
      let _uuid = this.$route.query.fund;
      // console.log("_uuid: ");
      // console.log(_uuid)
      this.getData(
        res => {
          this.data = this.data.concat(res);
          this.loadingMore = false;
          this.$nextTick(() => {
            window.dispatchEvent(new Event("resize"));
          });
        },
        { _uuid, _page }
      );
    }
  },
  components: {
    TitleFund,
    Graph
  }
};
</script>

<style>
.demo-loadmore-list {
  min-height: 350px;
}
.part {
  padding-top: 5%;
}
.part-title {
  font-size: 2rem;
  color: #616161;
  padding: 2%;
}
.wide {
  width: 80%;
  margin: 0 auto;
  position: relative;
  /*用途：将超出边界的东西不显示，并消除浮动即排列重叠的元素*/
  overflow: hidden;
}
.display-bottom {
  margin-right: 5rem;
  border-top: 1px;
}
.detail-text {
  float: left;
  width: 700px;
}
.detail-title {
  margin-bottom: 3rem;
}
.btn-info {
  width: 120px;
  float: right;
}
.text-muted {
  color: #34495e;
}
#display-name {
  text-decoration: black;
}
#display-name:hover {
}
.patent-info {
  background: #34495e;
}
.login-panel {
  width: 800px;
  height: 700px;
  background-color: #eaecee;
  border-radius: 10px;
  margin: 0 auto;
  top: 15%;
  position: relative;
}
.elastic-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
.close {
  display: none;
}

.blur {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

#detail-full {
  height: 38rem;
  overflow: auto;
  width: 480px;
}
.patent-name {
  font-size: 2rem;
  color: #495057;
}
</style>
