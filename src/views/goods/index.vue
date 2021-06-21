<template>
  <div class="goods-container" @wheel="handleSticty()">
    <el-row class="m-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'Home' }">{{
          currentPosition
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row><Category /></el-row>
        <el-row><List /></el-row>
      </el-col>
      <el-col :span="5">
        <div class="positionSticky" ref="positionSticky">
          <img
            src="https://img0.baidu.com/it/u=2504497668,3331398205&fm=26&fmt=auto&gp=0.jpg"
            :style="{ width: '100%' }"
            alt=""
          />
        </div>
        <div class="recommend-box">
          <RightCard :rightCardList="rightList" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from "@/myStore";
import Category from "@/components/products/category";
import List from "@/components/products/list";
import RightCard from "@/components/products/RightCard";
export default {
  data() {
    return {
      rightList: [],
    };
  },
  components: {
    Category,
    List,
    RightCard,
  },
  computed: {
    currentPosition() {
      return store.state.position;
    },
  },
  async created() {
    this.rightList = await this.$api.recommend();
  },
  methods: {
    handleSticty() {
      const top = this.$refs.positionSticky.getBoundingClientRect().top;
      if (top <= 0) {
        this.$refs.positionSticky.style.top = 0;
      }
    },
  },
};
</script>

<style lang="scss" >
@import "@/assets/css/products/index.scss";

.recommend-box {
  margin-left: 10px;
  padding-top: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 0;
  width: 230px;
  box-sizing: border-box;
}
.positionSticky {
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 230px;
  box-sizing: border-box;
  position: sticky;
  z-index: 999;
}
</style>
