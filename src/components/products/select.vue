<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>{{ title }} <i class="el-icon-caret-bottom"></i></dt>
      <dd>
          <dt class="select-title">{{title}}</dt>
          <span v-for="item,i in list" :key="i">{{item.name}}</span>
      </dd>
    </dl>
    
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
};
</script>

<style>
</style>