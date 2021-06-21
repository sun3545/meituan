<template>
  <div class="list-container">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <Card v-for="(item, i) in productList" :key="i" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Card from "./card";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false,
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productList: [],
    };
  },
  components: {
    Card,
  },
  async created() {
    const res = await this.$api.goodsList();
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(...res);
    }
    this.productList = arr;
  },
};
</script>

<style lang="scss" scoped src="@/assets/css/products/list.scss">
</style>
