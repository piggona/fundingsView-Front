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
      <div class="part-title">基金分析</div>
      <hr />
      <div class="part">
        <a-tabs
          defaultActiveKey="1"
          :tabPosition="'left'"
          :style="{ height: '100%' }"
        >
          <a-tab-pane tab="基金关键词" key="1">
            <Graph :ChartStyle="chartStyle" :option="resWordtree" :dblclick_func="categoryFunc"/>
          </a-tab-pane>
          <a-tab-pane tab="基金承担机构" key="2">
            <Graph :ChartStyle="chartStyle" :option="resCoptree" />
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
          <a :href="'fundings?uuid='+item.uuid" slot="actions">内容</a>
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

export default {
  data() {
    return {
      chartStyle: "width:100%;height:400px;align-content:center;",
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
      page: 0,
      categoryFunc: function(params,_this){
        // console.log("categoryFunc log:")
        // console.log(params);
        _this.$router.push({
          path: "/analysis/"+params.data.type,
          query: {uuid:params.data.uuid}
        })
      }
    };
  },
  mounted() {
    this.$store.dispatch("fund/getTitle", this.uuid);
    this.$store.dispatch("fund/getCoptree", this.uuid);
    this.$store.dispatch("fund/getWordtree", this.uuid);
    let _page = this.page;
    let _uuid = this.$route.query.uuid;
    this.getData(res => {
      this.loading = false;
      this.data = res;
    },{_uuid, _page});
  },
  computed: {
    ...mapState({
      titleData: state => state.fund.titleData,
      resCoptree: state => state.fund.resCoptree,
      resWordtree: state => state.fund.resWordtree
    }),
    uuid() {
      return this.$route.query.uuid;
    }
  },
  methods: {
    getData(callback,{_uuid,_page}) {
      reqwest({
        url: "api/fund/similar/"+_uuid+"/"+ _page,
        type: "json",
        method: "get",
        contentType: "application/json",
        success: res => {
          let data = res.data;
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
      this.page++;
      let _page = this.page;
      let _uuid = this.$route.query.uuid;
      // console.log("_uuid: ");
      // console.log(_uuid)
      this.getData(res => {
        this.data = this.data.concat(res);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event("resize"));
        });
      },{_uuid, _page});
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
}
.patent-name {
  font-size: 2rem;
  color: #495057;
}
</style>
