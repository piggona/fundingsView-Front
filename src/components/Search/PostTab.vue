<template>
  <div>
    <div class="top-button">
      <a-button
        class="top-btn"
        id="reset-button"
        icon="retweet"
        @click="resetSearch"
        >Reset</a-button
      >
      <a-button
        class="top-btn"
        id="multi-search-button"
        icon="search"
        :loading="iconLoading"
        @click="enterIconLoading"
        >Search</a-button
      >
    </div>
    <a-collapse>
      <a-collapse-panel
        v-for="data in searchData"
        :key="data.id"
        :header="data.header"
      >
        <SearchTab
          :key="tabId"
          :id="data.id"
          :type="data.type"
          :data="data.data"
          :isSearch="data.isSearch"
          :template="data.template"
        />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import SearchTab from "./SearchTab";
export default {
  props: ["iconLoading", "keyword"],
  data() {
    return {
      tabId: +new Date()
    };
  },
  computed: {
    searchData() {
      let res = [
        {
          id: 0,
          header: "文本搜索",
          type: "radio",
          data: [
            { id: 1, ex: "匹配所有词", value: "and" },
            { id: 2, ex: "匹配至少一个词", value: "or" }
          ],
          template: { attr: "basic", query: "", logic: "" },
          isSearch: true
        },
        {
          id: 1,
          header: "项目负责人",
          type: "radio",
          data: [
            { id: 1, ex: "匹配所有词", value: "and" },
            { id: 2, ex: "匹配至少一个词", value: "or" }
          ],
          template: { attr: "Investigator", query: "", logic: "" },
          isSearch: true
        },
        {
          id: 2,
          header: "项目承担机构",
          type: "radio",
          data: [
            { id: 1, ex: "匹配所有词", value: "and" },
            { id: 2, ex: "匹配至少一个词", value: "or" }
          ],
          template: { attr: "Institution", query: "", logic: "" },
          isSearch: true
        },
        {
          id: 3,
          header: "相关技术",
          type: "radio",
          data: [
            { id: 1, ex: "匹配所有词", value: "and" },
            { id: 2, ex: "匹配至少一个词", value: "or" }
          ],
          template: { attr: "Technology", query: "", logic: "" },
          isSearch: true
        },
        {
          id: 4,
          header: "相关产业",
          type: "radio",
          data: [
            { id: 1, ex: "匹配所有词", value: "and" },
            { id: 2, ex: "匹配至少一个词", value: "or" }
          ],
          template: { attr: "Industry", query: "", logic: "" },
          isSearch: true
        },
        {
          id: 5,
          header: "日期",
          type: "date",
          data: "",
          template: { attr: "Date", query: "", logic: "" },
          isSearch: false
        }
      ];
      return res;
    }
  },
  methods: {
    setData(id) {
      console.log(id);
    },
    resetSearch() {
      this.$store.commit("search/initQuery");
      this.$store.commit("search/setBasic", "");
      this.tabId = +new Date();
    },
    enterIconLoading() {
      this.$store.dispatch("search/getSearch");
    }
  },
  // mounted() {
  //   let val = this.keyword;
  //   let id = 0;
  //   // this.$store.commit("search/initQuery", this.pageType);
  //   this.$store.commit("search/setQuery", { id, val });
  //   this.$store.commit("search/setBasic", val);
  // },
  components: {
    SearchTab
  }
};
</script>

<style scoped>
select.multi-search {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #8d8c8c;
  height: 30px;
  width: 100px;

  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png")
    no-repeat scroll right center transparent;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
  vertical-align: -webkit-baseline-middle;
  margin-bottom: 10px;
}
.select-search-group {
  padding-bottom: 3rem;
}

#search-block {
  padding-bottom: 3rem;
}

/*
 * Component: Products List
 * ------------------------
 */
.products-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.products-list > .item {
  border-radius: 0.25rem;
  padding: 10px 0;
  background: #ffffff;
}

.products-list > .item::after {
  display: block;
  clear: both;
  content: "";
}

.products-list .product-img {
  float: left;
}

.products-list .product-img img {
  width: 50px;
  height: 50px;
}

.products-list .product-info {
  margin-left: 60px;
}

.products-list .product-title {
  font-weight: 600;
}

.products-list .product-description {
  display: block;
  color: #6c757d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-list-in-card > .item {
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.product-list-in-card > .item:last-of-type {
  border-bottom-width: 0;
}

.btn-info {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  height: 30px;
  line-height: 0;
}

.btn-info:hover {
  color: #bfc9ca;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info:focus,
.btn-info.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
  color: #ffffff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125),
    0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.search-result {
  float: right;
}
.top-button {
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 2px;
  margin-top: 2px;
}
.top-btn {
  background-color: rgba(0, 0, 0, 0.03);
  color: #212121;
  border: none;
  margin-left: 3px;
}
.top-btn:hover {
  color: #99a3a4;
}
.next-page {
  width: 100%;
  background: #99a3a4;
  font-weight: inherit;
}
.search-head {
  font-weight: bold;
  font-size: 2rem;
  color: #707b7c;
}
#search-count {
  color: #1f618d;
}
#paper-thead-title {
  min-width: 20rem;
}

#year-label {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  font-size: 1rem;
}
</style>
