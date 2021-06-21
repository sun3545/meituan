<template>
  <div>
    <dl
      class="product-details-container"
      v-for="item in detail"
      :key="item.itemId"
    >
      <dt>
        <div class="titleIocn">
          <h1>{{ item.title }}</h1>
          <div class="el-rate">
            <i class="el-icon-success"></i>
            商品安全
          </div>
        </div>
        <el-rate v-model="item.score" disabled text-color="#ff9900"> </el-rate>
        <span>{{ `${item.score}分人均 ￥${item.avgPrice} ` }}</span>
        <ul>
          <li>地址：{{ item.address }}</li>
          <li>电话：{{ item.phone }}</li>
          <li>营业时间：{{ item.businessTime }}</li>
        </ul>
        <ul>
          <li v-for="(v, i) in item.service" class="table">
            <i class="el-icon-umbrella"></i>
            <p>{{ v }}</p>
          </li>
        </ul>
      </dt>
      <dd>
        <img :src="item.imgUrl" alt="" />
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["detail"],
};
</script>

