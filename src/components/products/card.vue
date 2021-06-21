<template>
  <dl class="card-container">
    <dt><img :src="meta.image" alt="" /></dt>
    <dd>
      <h3>
        <router-link
          :to="{
            name: 'Details',
            params: {
              name: meta.title,
            },
          }"
          >{{ meta.title }}</router-link
        >
      </h3>
      <p>
        <el-rate v-model="+meta.score" disabled show-score text-color="#ff9900">
        </el-rate>
        <span class="el-rate">{{ meta.score | rate }}</span>
        <span class="">{{ meta.score }}分</span>
        <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(item, index) in meta.tab" :key="index">{{
            item + (index < meta.tab.length - 1 ? "|" : "")
          }}</span>
          <span class="s-item-addr">{{ meta.address }}</span>
          <span
            ><a href="">
              <i class="el-icon-location"></i>
              查看地图
            </a></span
          >
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{ meta.avgPrice }}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(v, i) in meta.deal_items" :key="i">
          <p class="deal-title">{{ v.title }}</p>
          <p>
            <span class="deal-price">￥{{ v.price }}</span>
            <span class="deal-old-price">门市价￥{{ v.counterPrice }}</span>
            <span class="deal-sales">已售{{ v.saleNum }}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>


// TXT记录验证：
// 请到域名当前DNS服务商处给该域名添加TXT记录
// 域名：github.io
// 主机记录：alidnscheck
// 记录值：3e0951451d3643439dd7e84d8a5f3817
// 添加完毕后点击"验证"按钮，验证通过后，即可成功创建域名

<script>
export default {
  props: ["meta"],
  filters: {
    rate(val) {
      if (val > 4.5) {
        return "很好";
      } else if (val > 4) {
        return "好";
      } else if (val > 3.5) {
        return "不错";
      } else if (val > 3) {
        return "一般";
      } else {
        return "很差";
      }
    },
  },
};
</script>

<style>
</style>