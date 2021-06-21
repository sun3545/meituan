<template>
  <div class="category-container">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in menuList" :key="item.type">
        <MySelect :list="item.sub_list" :title="item.title" />{{ item.name }}
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item,i in areaList" :key="i">
        <MySelect :list="item.sub_list" :title="item.title" />{{ item.name }}
      </dd>
    </dl>
  </div>
</template>

<script>
import MySelect from "./select";
export default {
  data() {
    return {
      menuList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            { name: "日本菜", id: "Japan" },
            { name: "面包甜点", id: "cate" },
            { name: "饮品", id: "drink" },
          ],
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            { name: "温泉酒店", id: "hot_spring" },
            { name: "经济型酒店", id: "economy" },
            { name: "高端酒店", id: "high" },
          ],
        },
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            { name: "望京", id: "10000" },
            { name: "昌平", id: "19999" },
          ],
        },
      ],
    };
  },
  components: {
    MySelect,
  },
};
</script>

<style>
</style>