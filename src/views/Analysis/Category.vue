<template>
  <div class="w">
    <!-- 第一部分，分类简介 -->
    <div class="part">
      <a-card>
        <TitleSimple
          :Title="titleData.Title"
          :AbstractNarration="titleData.AbstractNarration"
        />
      </a-card>
    </div>
    <div class="part">
      <DetailedChart
        :title="CategoryTitle"
        :option="'基金投资金额排名'"
        :list="res_category_list"
        :chartStyle="chartStyle"
        :chartOptionOne="resCategory.data"
      />
    </div>
    <div class="part">
      <DetailedChart
        :title="TechTitle"
        :option="'相关技术投资金额排名'"
        :list="res_tech_list"
        :chartStyle="chartStyle"
        :chartOptionOne="resTech.dataOne"
        :chartOptionTwo="resTech.dataTwo"
        :chartOneTab="'Top5'"
        :chartTwoTab="'投资趋势'"
      />
    </div>
    <div class="part">
      <DetailedChart
        :title="OrgTitle"
        :option="'相关机构接收投资金额排名'"
        :list="res_org_list"
        :chartStyle="chartStyle"
        :chartOptionOne="resOrg.dataOne"
        :chartOptionTwo="resOrg.dataTwo"
        :chartOneTab="'Top5'"
        :chartTwoTab="'投资趋势'"
      />
    </div>
    <div class="part">
      <DetailedChart
        :title="IndustryTitle"
        :option="'相关产业投资金额排名'"
        :list="res_industry_list"
        :chartStyle="chartStyle"
        :chartOptionOne="resIndustry.dataOne"
        :chartOptionTwo="resIndustry.dataTwo"
        :chartOneTab="'Top5'"
        :chartTwoTab="'投资趋势'"
      />
    </div>

  </div>
</template>

<script>
import TitleSimple from "../../components/Analysis/TitleSimple";
import DetailedChart from "../../components/Analysis/DetailedChart";
import { mapState } from "vuex";

export default {
  data() {
    return {
      chartStyle: "width:100%;height:400px;align-content:center;",
      CategoryTitle: "主分类相关基金投资",
      TechTitle: "相关技术投资排名",
      OrgTitle: "相关机构投资排名",
      IndustryTitle: "相关产业投资排名",
      loading: true,
      data: [],
      page: 0
    };
  },
  mounted() {
    let uuid = this.uuid
    this.$store.dispatch("category/getTitle", uuid,);
    this.$store.dispatch("category/getResCategory",uuid);
    this.$store.dispatch("category/getResTech",uuid);
    this.$store.dispatch("category/getResOrg",uuid);
    this.$store.dispatch("category/getResIndustry",uuid);
  },
  computed: {
    ...mapState({
      titleData: state => state.category.titleData,
      resCategory: state => state.category.resCategory,
      resTech: state => state.category.resTech,
      resOrg: state => state.category.resOrg,
      resIndustry: state => state.category.resIndustry
    }),
    uuid() {
      return this.$route.query.uuid;
    },
    res_category_list() {
      let result = [];
      if (JSON.stringify(this.resCategory.ranklist) !== undefined) {
        result = JSON.parse(JSON.stringify(this.resCategory.ranklist));
        result.map(x => {
          x.href = "/analysis/fundings?uuid=" + x.uuid;
          x.date = "$ "+x.date;
        });
      }
      // console.log("tech list: ")
      // console.log(this.resTech)
      return result;
    },
    res_tech_list() {
      let result = [];
      if (JSON.stringify(this.resTech.ranklist) !== undefined) {
        result = JSON.parse(JSON.stringify(this.resTech.ranklist));
        result.map(x => {
          x.href = "/analysis/tech?uuid=" + x.uuid;
          x.date = "$ "+x.date;
        });
      }
      // console.log("tech list: ")
      // console.log(this.resTech)
      return result;
    },
    res_org_list() {
      let result = [];
      if (JSON.stringify(this.resOrg.ranklist) !== undefined) {
        // console.log(JSON.stringify(this.resOrg.ranklist));
        result = JSON.parse(JSON.stringify(this.resOrg.ranklist));
        result.map(x => {
          x.href = "/analysis/org?uuid=" + x.uuid;
          x.date = "$ "+x.date;
        });
      }
      return result;
    },
    res_industry_list() {
      let result = [];
      if (JSON.stringify(this.resIndustry.ranklist) !== undefined) {
        // console.log(JSON.stringify(this.resIndustry.ranklist));
        result = JSON.parse(JSON.stringify(this.resIndustry.ranklist));
        result.map(x => {
          x.href = "/analysis/industry?uuid=" + x.uuid;
          x.date = "$ "+x.date;
        });
      }
      return result;
    }
  },
  methods: {
  },
  components: {
    TitleSimple,
    DetailedChart
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
