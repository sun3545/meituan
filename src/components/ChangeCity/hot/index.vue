<template>
  <div class="hot-container">
    <dl>
      <dt>{{ title }}：</dt>
      <dd v-for="item in list" :key="item.id">{{ item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
};
</script>

<style lang='scss' scoped src="@/assets/css/changecity/hot.scss">
</style>
