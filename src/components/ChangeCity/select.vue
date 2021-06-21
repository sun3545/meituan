<template>
  <div
    :class="{ 'select-container': true, disabled: disabled }"
    @click.stop="handleSelectClick()"
    v-documentClick="documentClick"
  >
    <div :class="{ choose: true, disabled: disabled }">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: isActive }">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col" v-for="(item, i) in renderData" :key="i">
            <span
              :class="{
                'mt-item': true,
                active:
                  (subItem.provinceName
                    ? subItem.provinceName
                    : subItem.name) === value,
              }"
              v-for="subItem in item"
              :key="subItem.provinceCode"
              @click.stop="changeValue(subItem)"
              >{{
                subItem.provinceName ? subItem.provinceName : subItem.name
              }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "title", "value", "isActive", "disabled"],
  computed: {
    renderData() {
      const col = Math.ceil(this.list.length / 12);
      const newColList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        newColList.push(data);
      }
      return newColList;
    },
  },
  methods: {
    handleSelectClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("changeActive", true);
    },
    documentClick() {
      this.$emit("documentClick", false);
    },
    changeValue(item) {
      this.$emit("MyChange", item);
    },
  },
};
</script>

<style lang='scss' scoped src="@/assets/css/changecity/select.scss">
</style>