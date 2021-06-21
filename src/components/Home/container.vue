<template>
  <div class="m-istyle">
    <div class="list-container">
      <dl @mouseover="handleBoubleOver($event)">
        <dt>{{ list.title }}</dt>
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

    <ul class="ibody">
      <li v-for="(item, i) in cardList" :key="i">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <p class="title">{{ item.title }}</p>
            <p class="sub-title">
              <span>{{ item.text }}</span>
            </p>
            <p class="price-number numfont price">
              <span class="price-icon">￥</span>{{ "1234" }}
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list", "cardList"],
  data() {
    return {
      isActive: "all",
    };
  },
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

<style lang="scss" src="@/assets/css/index/artistic.scss">
</style>
