<template>
  <div class="list-container">
    <dl @mouseover="handleBoubleOver($event)">
      <dt>{{list.title}}</dt>
      <dd
        :class="{ active: isActive == item.type }"
        v-for="item in list.list"
        :key="item.type"
        :data-type="item.type"
      >
        {{ item.city }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: "",
    };
  },
  props: ["list",],
  methods: {
    handleBoubleOver(e) {
      if (e.target.tagName !== "DD") {
        return;
      }
      this.isActive = e.target.getAttribute("data-type");

      this.$emit("handleBoubleOver", this.isActive);
    },
  },
};
</script>

<style>
</style>