<template>
  <div>
    <div v-if="resource.data === null">正在搜索，请稍等</div>
    <a-table
      :columns="conf.column"
      :dataSource="resource.data"
      style="width: 100%"
    >
      <router-link
        :slot="conf.slot"
        color="blue"
        slot-scope="text, record"
        :to="conf.to + record.uuid"
        target="_blank"
        >{{ text }}</router-link
      >
    </a-table>
  </div>
</template>

<script>
const columns_fund = [
  {
    title: "编号",
    key: "id",
    dataIndex: "id",
    scopedSlots: { customRender: "id" }
  },
  {
    title: "名称",
    key: "title",
    dataIndex: "title"
  },
  {
    title: "金额",
    key: "amount",
    dataIndex: "amount"
  },
  {
    title: "起始日期",
    key: "start",
    dataIndex: "start"
  },
  {
    title: "终止日期",
    key: "end",
    dataIndex: "end"
  }
];

export default {
  props: ["resource"],
  data() {
    return {
      columns_fund
    };
  },
  computed: {
    conf() {
      let result = {
        column: columns_fund,
        to: "/analysis/fundings?fund=",
        slot: "id"
      };
      return result;
    }
  }
};
</script>

<style></style>
