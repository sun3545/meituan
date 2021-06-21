<template>
  <div class="change-city-container">
    <el-row> <ChangeCity /> </el-row>
    <el-row> <Hot title="热门城市" :list="hotList" /> </el-row>
    <el-row><Hot title="最近访问" :list="recentList" /></el-row>
    <el-row><Letter title="按拼音首字母选择" :list="letterList" /></el-row>
  </div>
</template>

<script>
import ChangeCity from "@/components/ChangeCity";
import Hot from "@/components/ChangeCity/Hot";
import Letter from "@/components/ChangeCity/Letter";
export default {
  components: {
    ChangeCity,
    Hot,
    Letter,
  },
  data() {
    return {
      hotList: ["南陵", "广德市", "宁国", "含山", "和县", "全椒"],
      recentList: ["南陵", "广德市", "宁国", "含山"],
      letterList: "ABCDEFGHJKLMNPQRSTWXYZ",
    };
  },
  created() {
    const data = [];
    const newData = [];
    data.forEach((item) => {
      if (!newData[item.firstChar]) {
        newData[item.firstChar] = [];
      }
      newData[item.firstChar].push(item);
    });
  },
  methods: {},
  async created() {
    this.hotList = await this.$api.hotCity();
    this.recentList = await this.$api.recentsCity();
  },
};
</script>

<style lang='scss' src="@/assets/css/changecity/iselect.scss">
</style>
