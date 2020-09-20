<template>
  <div>
    <div class="sub-title">{{ option }}</div>
    <hr />
    <br />
    <br />
    <a-list
      :pagination="pagination"
      :data-source="list"
      :rowKey="
        item => {
          item.rank;
        }
      "
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="item.email">
          <span slot="title">{{ item.rank }}.</span>
          <a slot="title" @click="toPage(item.href)">{{
            item.title | ellipsis
          }}</a>
          <span slot="description">{{ item.date }} </span>
        </a-list-item-meta>
        <a @click="toPage(item.href)">详情</a>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  props: ["option", "list"],
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 35) {
        return value.slice(0, 35) + "...";
      }
      return value;
    }
  },
  data() {
    return {
      pagination: {
        // onChange: page => {
        //   // console.log(page);
        // },
        pageSize: 5
      }
    };
  },
  methods: {
    toPage(href) {
      window.open(href, "_blank");
    }
    // handleOk(e) {
    //   // console.log(e);
    //   this.visible = false;
    // }
  }
};
</script>

<style></style>
