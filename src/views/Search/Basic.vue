<template>
  <div>
    <a-row>
      <a-col :span="3">
        <a-affix :offset-top="top" class="affix">
          <div class="illustrate">
            <a-steps direction="vertical" :current="part">
              <a-step>
                <!-- <span slot="title">Finished</span> -->
                <template slot="title">
                  <a href="#search" @click="part = 0">开始搜索</a>
                </template>
                <span slot="description">This is a description.</span>
              </a-step>
              <a-step description="This is a description.">
                <template slot="title">
                  <a href="#brief" @click="part = 1">基金概览</a>
                </template>
              </a-step>
              <a-step description="This is a description.">
                <template slot="title">
                  <a href="#detail" @click="part = 2">基金主分类详解</a>
                </template>
              </a-step>
            </a-steps>
          </div>
        </a-affix>
      </a-col>
      <a-col :span="21">
        <div class="basic-w">
          <!-- 第一部分 -->
          <div class="part" id="search">
            <div class="part-title">基金搜索</div>
            <a-card style="width:100%">
              <div class="search-con">
                <a-input-search
                  placeholder="请输入任意与待搜索基金相关的信息"
                  @search="onSearch"
                  enterButton="Search"
                  size="large"
                />
              </div>
              <div class="side-link">
                <router-link :to="'multi?keyword='">高级搜索</router-link>
              </div>
            </a-card>
          </div>

          <!-- 第二部分 -->
          <div class="part" id="brief">
            <div class="part-title">基金概览</div>
            <hr />
            <!-- 基金统计及主分类资金分布 -->
            <div class="statistic">
              <a-row>
                <a-col :span="6">
                  <div style="padding-top: 20%; padding-left: 10%;">
                    <a-statistic
                      title="收录基金数量"
                      :value="statistic.fundingsAmount"
                      style="margin-right: 50px;padding-top: 10%;"
                    />
                    <a-statistic
                      title="平均投资金额(USD)"
                      :precision="2"
                      :value="statistic.avgInvested"
                      style="margin-right: 50px;padding-top: 10%;"
                    />
                  </div>
                </a-col>
                <a-col :span="18">
                  <a-tabs
                    defaultActiveKey="1"
                    :tabPosition="'left'"
                    :style="{ height: '100%' }"
                  >
                    <a-tab-pane tab="主分类资金分布" key="1">
                      <Graph
                        :ChartStyle="chartStyle"
                        :option="resPie"
                        :click_func="categoryFunc"
                      />
                    </a-tab-pane>
                    <a-tab-pane tab="热点产业词" key="2">
                      <Graph
                        :ChartStyle="chartStyle"
                        :option="resCloud"
                        :click_func="industryFunc"
                      />
                    </a-tab-pane>
                  </a-tabs>
                </a-col>
              </a-row>
            </div>
            <!-- 基金金额排序部分 -->
            <div class="part">
              <a-card title="基金投资趋势">
                <div class="table-operations">
                  <a-button
                    :class="activeAmount ? 'fund-choose active' : 'fund-choose'"
                    @click="activeAmount = true"
                    >产业投资金额排名</a-button
                  >
                  <a-button
                    :class="
                      !activeAmount ? 'fund-choose active' : 'fund-choose'
                    "
                    @click="activeAmount = false"
                    >产业增长率排名</a-button
                  >
                </div>
                <div class="search-result row col-md-10" id="fund-result">
                  <FundResult :isAmount="activeAmount" :fund="fund" />
                </div>
              </a-card>
            </div>
          </div>
          <!-- 第三部分 -->
          <div class="part" id="detail">
            <div class="part-title">基金主分类详解</div>
            <hr />
            <div class="part">
              <a-tabs
                defaultActiveKey="1"
                :tabPosition="'left'"
                :style="{ height: '100%' }"
                @change="activeCallback"
              >
                <a-tab-pane tab="主分类技术词" key="1">
                  <a-input-search
                    style="margin-bottom: 8px"
                    placeholder="搜索技术词"
                    @change="onChange"
                  />
                  <a-tree
                    :expanded-keys="expandedKeys"
                    :auto-expand-parent="autoExpandParent"
                    :tree-data="treeNodes"
                    @expand="onExpand"
                  >
                    <template slot="title" slot-scope="{ title }">
                      <span @click="toTech(title)">
                        <span v-if="title.indexOf(searchValue) > -1">
                          {{ title.substr(0, title.indexOf(searchValue)) }}
                          <span style="color: #f50">{{ searchValue }}</span>
                          {{
                            title.substr(
                              title.indexOf(searchValue) + searchValue.length
                            )
                          }}
                        </span>
                        <span v-else>{{ title }}</span>
                      </span>
                    </template>
                  </a-tree>
                </a-tab-pane>
                <a-tab-pane tab="主分类产业词" key="2">
                  <a-input-search
                    style="margin-bottom: 8px"
                    placeholder="搜索产业词"
                    @change="onChange"
                  />
                  <a-tree
                    :expanded-keys="expandedKeys"
                    :tree-data="treeNodes"
                    @expand="onExpand"
                  >
                    <template slot="title" slot-scope="{ title }">
                      <span @click="toIndustry(title)">
                        <span v-if="title.indexOf(searchValue) > -1">
                          {{ title.substr(0, title.indexOf(searchValue)) }}
                          <span style="color: #f50">{{ searchValue }}</span>
                          {{
                            title.substr(
                              title.indexOf(searchValue) + searchValue.length
                            )
                          }}
                        </span>
                        <span v-else>{{ title }}</span>
                      </span>
                    </template>
                  </a-tree>
                </a-tab-pane>
              </a-tabs>
            </div>
          </div>
          <!-- 结束 -->
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import FundResult from "../../components/Search/FundResult";
import Graph from "../../components/Analysis/Graph";
// import HotTree from "../../components/Analysis/RecursiveTree";
import { mapState } from "vuex";

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

var dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
// generateList(this.treeNodes.data);

export default {
  data() {
    return {
      chartStyle: "width:100%;height:400px;align-content:center;",
      searchInput: "",
      activeAmount: true,
      activeTech: true,
      part: 1,
      top: 200,
      autoExpandParent: true,
      expandedKeys: [],
      searchValue: "",
      categoryFunc: function(params, _this) {
        // console.log(params);
        _this.$router.push({
          path: "/analysis/category",
          query: { uuid: params.name }
        });
      },
      industryFunc: function(params, _this) {
        // console.log(params);
        _this.$router.push({
          path: "/analysis/industry",
          query: { uuid: params.name }
        });
      }
    };
  },
  computed: {
    ...mapState({
      statistic: state => state.search.statistic,
      fund: state => state.search.fundRank,
      resPie: state => state.search.resPie,
      resCloud: state => state.search.resCloud,
      treeNodes: state => state.search.treeNodes
    })
  },
  methods: {
    onSearch(value) {
      // console.log("onSearch", value);
      this.$router.push({ path: "/search/multi?keyword=" + value });
    },
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    activeCallback(key) {
      if (key === "1") {
        this.$store.dispatch("search/setTech", "tech");
      } else {
        this.$store.dispatch("search/setTech", "indu");
      }
    },
    onChange(e) {
      const value = e.target.value;
      const expandedKeys = dataList
        .map(item => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, this.treeNodes);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true
      });
      // console.log("searchValue");
      // console.log(this.searchValue);
    },
    toTech(uuid) {
      this.$router.push({
        path: "/analysis/tech",
        query: { uuid: uuid }
      });
    },
    toIndustry(uuid) {
      this.$router.push({
        path: "/analysis/industry",
        query: { uuid: uuid }
      });
    }
  },
  mounted() {
    this.$store.dispatch("search/getBasic");
  },
  watch: {
    treeNodes: {
      handler(val) {
        generateList(val);
      }
    },
    activeAmount: {
      handler(val) {
        // console.log(val);
        // // console.log("watch handler fund:", this.fund);
        if (val) {
          this.$store.dispatch("search/setRank", "amount");
        } else {
          this.$store.dispatch("search/setRank", "growth");
        }
      }
    },
    activeTech: {
      handler(val) {
        // console.log(val);
        // // console.log("watch handler fund:", this.fund);
        if (val) {
          this.$store.dispatch("search/setTech", "tech");
        } else {
          this.$store.dispatch("search/setTech", "indu");
        }
      }
    }
  },
  components: {
    FundResult,
    Graph
  }
};
</script>

<style scoped>
.affix {
  padding-top: 50%;
  padding-left: 10%;
}
.basic-w {
  width: 90%;
  padding-right: 8%;
  margin: 0 auto;
  position: relative;
  /*用途：将超出边界的东西不显示，并消除浮动即排列重叠的元素*/
  overflow: hidden;
}
.side-btn {
  padding-top: 10%;
  padding-left: 5%;
}
.independent-btn {
  padding: 2%;
}
.fund-choose.active {
  background-color: #007bff;
  color: #ffffff;
}
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
.statistic {
  padding-top: 5%;
}
.illustrate {
  padding: 10%;
}
.side-link {
  padding-left: 5%;
}
.part {
  padding-top: 5%;
}
.part-title {
  font-size: 2rem;
  color: #616161;
  padding: 2%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0%;
}
.search-con {
  padding-top: 2rem;
  padding-bottom: 3rem;
}
input {
  width: 800px;
  height: 40px;
}
.fund-choose.active {
  background-color: #007bff;
  color: #ffffff;
}
.search-con {
  padding: 5%;
}
.search-con #search-input {
  width: 70%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #616161;
}
.search-con .search-btn {
  position: absolute;
  height: 40px;
}

.search-con .search-btn:hover {
  color: #fff;
  background: #1565c0;
}

.search-con select {
  margin-bottom: 1rem;
}
.second-class {
  padding-left: 1.5rem;
}
.third-class {
  padding-left: 1.5rem;
}
.main-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.second-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.third-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 0.75rem;
}
.second-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.third-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.fourth-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.main-class-phrase {
  color: #b03a2e;
  font-size: 0.75rem;
  font-weight: bold;
}
.second-class-phrase {
  color: #b9770e;
  font-size: 0.75rem;
  font-weight: bold;
}
.third-class-phrase {
  color: #21618c;
  font-size: 0.75rem;
  font-weight: bold;
}
.fourth-class-phrase {
  color: #cb4335;
  font-size: 0.75rem;
  font-weight: bold;
}
.main-class-btn {
  width: 3rem;
  background-color: #21618c;
  color: #f5f5f5;
}
.second-class-btn {
  width: 3rem;
  background-color: #b03a2e;
  color: #f5f5f5;
}
.third-class-btn {
  width: 3rem;
  background-color: #eb984e;
  color: #f5f5f5;
}
.fourth-class-btn {
  width: 3rem;
  background-color: #5dade2;
  color: #f5f5f5;
}
</style>
