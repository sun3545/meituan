<template>
  <div class="letter-container">
    <dl class="m-category">
      <dt>{{ title }}：</dt>
      <dd v-for="(item, i) in list" :key="i">
        <a :href="'#city_' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      :id="'city_' + index"
      v-for="(item, index) in newCity"
      :key="index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import myStore from "@/myStore";
export default {
  props: ["title", "list"],
  data() {
    return {
      newCity: {},
      hash: "",
    };
  },

  created() {
    this.$api.cityList().then((res) => {
      let obj = {};
      res.forEach((ele, i) => {
        if (!obj[ele.firstChar.toUpperCase()]) {
          obj[ele.firstChar.toUpperCase()] = [];
        }
        obj[ele.firstChar.toUpperCase()].push(ele);
      });
      this.newCity = obj;
    });
  },
  methods: {
    changeCity(item) {
      myStore.setPosition(item.name);
      this.$router.push({ name: "HomeIndex" });
    },
  },
};
</script>

<style lang='scss' scoped src="@/assets/css/changecity/category.scss">
</style>