<template>
  <div class="right-card-container">
    <div class="top-nav-box">猜你喜欢</div>
    <a
      href=""
      class="recommend-item"
      v-for="item in rightCardList"
      :key="item.itemId"
    >
      <div class="recommend-card-wrapper">
        <div class="img-box">
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>
      <div class="info-box">
        <div class="title">{{ item.title }}</div>
        <div class="score-line">
          <el-rate
            v-model="+item.score"
            disabled
            text-color="#ff9900"
            class="star"
          >
          </el-rate>
          <span>{{ item.commentNum }}个评价</span>
        </div>
        <div class="desc-line">{{ item.areaName }}</div>
        <div class="bottom-line">
          ￥<span>{{ item.lowPrice }}</span
          >起
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["rightCardList"],
};
</script>

<style lang="scss" scoped >
.right-card-container {
  position: relative;
  width: 100%;
  .recommend-item {
    margin-bottom: 20px;
    display: inline-block;
    width: 190px;
    .recommend-card-wrapper .img-box {
      height: 0;
      width: 100%;
      padding-bottom: 56.25%;
      background-color: #f4f4f4;
      //   background-image: url(//p0.meituan.net/travelcube/214b841….png);
      //   background-size: cover;
      //   background-position: 50% 50%;
      border-radius: 4px;
      overflow: hidden;
      img {
        width: 100%;
        font-size: 0;
      }
    }
  }
}
.star {
  display: inline-block;
}
.bottom-line {
  color: rgb(247, 186, 42);
  span {
    font-size: 20px;
  }
}
.desc-line {
  color: #999;
}
</style>