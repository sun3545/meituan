<template>
  <div class="menu-container">
    <dl class="nav" @mouseleave="handleMenuLeave()">
      <dt>全部分类</dt>
      <dd
        v-for="(item, i) in menuList"
        :key="i"
        @mouseenter="handleMenuEnter(item)"
      >
        <i :class="item.type"></i>{{ item.name }} <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="curDetail"
      @mouseenter="handleDetailEnter()"
      @mouseleave="handleDetailLeave()"
    >
      <template v-for="(item, index) in curDetail"
        ><h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">{{
          v
        }}</span></template
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curDetail: null,
      menuList: [],
    };
  },
  methods: {
    handleMenuEnter(data) {
      this.curDetail = data.items;
    },
    handleMenuLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    handleDetailEnter() {
      clearTimeout(this.timer);
    },
    handleDetailLeave() {
      this.curDetail = null;
    },
  },
  async created() {
    this.menuList = await this.$api.getMenuList();
  },
};
</script>

<style>
</style>
