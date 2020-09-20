<template>
  <div class="w">
    <a-layout style="padding: 24px 0; background: none">
      <a-layout-sider width="270" style="background: none">
        <PostTab
          :pageType="pageType"
          :keyword="keyword"
          :iconLoading="isSearching"
        />
      </a-layout-sider>
      <a-layout-content style="background: none">
        <div style="padding-left: 5%">
          <a-card
            :title="
              '搜索到' +
                resultNum +
                '条结果,' +
                '当前基础搜索词为:' +
                basicPhrase
            "
          >
            <DisplayTable :type="pageType" :resource="resource" />
          </a-card>
        </div>
        <!-- {{ searchPhrase }} -->
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import PostTab from "../../components/Search/PostTab";
import DisplayTable from "../../components/Search/DisplayTable";
import { mapState } from "vuex";
export default {
  data() {
    return {
      pageType: "refer"
    };
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.search_result,
      basic: state => state.search.basic,
      isSearching: state => state.search.isSearching
    }),
    keyword() {
      return this.$route.query.keyword;
    },
    resource() {
      // 开发最后接入api时，需将this.searchResult转换为vuex获取的api状态
      if (JSON.stringify(this.searchResult) === "{}") {
        return null;
      } else {
        return this.searchResult;
      }
    },
    basicPhrase() {
      return this.basic;
    },
    resultNum() {
      if (this.resource === null) {
        return 0;
      } else {
        return this.resource.tot_res;
      }
    }
  },
  mounted() {
    let searchphrase = {
      from: 0,
      size: 500,
      type: "basic",
      query: [{ attr: "basic", query: this.keyword, logic: "and" }]
    };
    // console.log("挂载值", searchphrase);
    // console.log("基础搜索词：", this.basic);
    this.$store.dispatch("search/initSearch", searchphrase);
    this.$store.commit("search/setSearching", true);
    let val = this.keyword;
    let id = 0;
    // this.$store.commit("search/initQuery", this.pageType);
    this.$store.commit("search/setQuery", { id, val });
    this.$store.commit("search/setBasic", val);
  },
  components: {
    PostTab,
    DisplayTable
  }
};
</script>

<style scoped></style>
