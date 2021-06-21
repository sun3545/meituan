<template>
  <div class="details-container">
    <el-row class="m-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ name:'Home' }">{{}}</el-breadcrumb-item> -->
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <ProductDetails :detail="detail" />
    </el-row>
    <!-- <el-row class="details-con">
      <el-col :span="19">
        <DetailsItem />
        <DetailsList />
      </el-col>
      <el-col :span="5">
        <div class="details-con-right">12</div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import ProductDetails from "@/components/ProductDetails";
import DetailsItem from "@/components/ProductDetails/DetailsItem";
import DetailsList from "@/components/ProductDetails/DetailsList";
export default {
  data() {
    return {
      detail: [],
    };
  },
  components: { ProductDetails, DetailsItem, DetailsList },
  async created() {
    const res = await this.$api.detail();
    this.detail.push(res);
  },
};
</script>

<style lang="scss" src="@/assets/css/detail/index.scss">
</style>