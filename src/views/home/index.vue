<template>
  <div class="home-main">
    <el-row>
      <el-col :span="5"> <MyMenu /> </el-col>
      <el-col :span="19"><MyLife /></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container
          @handleBoubleOver="handleBoubleOver($event)"
          :list="cityList"
          :cardList="cardList"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"
        ><Container
          @handleBoubleOver="handleBoubleOvergediao($event)"
          :list="gediaoList"
          :cardList="gediaoCardList"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/Home/menu";
import MyLife from "@/components/Home/life";
import Container from "@/components/Home/container";
// import List from "@/components/Home/list";

export default {
  components: {
    MyMenu,
    MyLife,
    Container,
    // List,
  },
  data() {
    return {
      cityList: {
        title: "推荐民宿",
        list: [
          { city: "天津", type: "all" },
          { city: "济南", type: "jinan" },
          { city: "大连", type: "dalian" },
          { city: "太原", type: "taiyuan" },
          { city: "石家庄", type: "shijiazhuang" },
          { city: "秦皇岛", type: "qinhuangdao" },
          { city: "呼和浩特", type: "huhehaote" },
          { city: "潍坊", type: "langfang" },
          { city: "唐山", type: "tangshan" },
          { city: "泰安", type: "taian" },
        ],
      },
      gediaoList: {
        title: "有格调",
        list: [
          { city: "全部", type: "all" },
          { city: "约会聚餐", type: "food" },
          { city: "电影演出", type: "movie" },
          { city: "丽人SPA", type: "spa" },
          { city: "品质出游", type: "travel" },
        ],
      },
      gediaoCardList: [],
      resultsData: {},
      cardList: [
        {
          title: "小白客栈花园小筑",
          text: "整套1居室·可住2人|",
          price_info: {
            current_proce: 20,
            old_price: 30,
          },
          image:
            "https://img.meituan.net/phoenix/7bd71747af44521c1e54b0db668a62783106432.jpg@740w_416h_1e_1c",
        },
        {
          title: "清馨阁-新区北购万隆小区欧式轻奢投影房",
          text: "整套1居室·可住2人|",
          price_info: {
            current_price: 20,
            old_price: 40,
          },
          image:
            "https://img.meituan.net/phoenix/ec60e84da4a7743c6426f95208dded5b76767.jpg@740w_416h_1e_1c",
        },
        {
          title: "【叁客·行驻】精装复式LOFT | 空中",
          text: "整套1居室·可住2人|",
          price_info: {
            current_price: 20,
            old_price: 40,
          },
          image:
            "https://img.meituan.net/phoenix/7775d3468210a2ad68cacb5e1bad32293783055.jpg@740w_416h_1e_1c",
        },
        {
          title: "大学城落地窗公寓、吾悦广场",
          text: "整套1居室·可住2人|",
          price_info: {
            current_price: 20,
            old_price: 40,
          },
          image:
            "http://p0.meituan.net/iphoenix/11380fe53bcda07eb4226097c632db84255792.jpg@740w_416h_1e_1c",
        },
        {
          title: "小白客栈花园小筑",
          text: "整套1居室·可住2人|",
          price_info: {
            current_price: 20,
            old_price: 40,
          },
          image:
            "https://img.meituan.net/phoenix/f97998ffe47bd86cf65ced1c989b5c66246523.jpg@740w_416h_1e_1c",
        },
        {
          title: "大学城落地窗公寓、吾悦广场",
          text: "整套1居室·可住2人|",
          price_info: {
            current_price: 20,
            old_price: 40,
          },
          image:
            "http://p0.meituan.net/iphoenix/11380fe53bcda07eb4226097c632db84255792.jpg@740w_416h_1e_1c",
        },
      ],
    };
  },
  methods: {
    handleBoubleOver(type) {
      //   console.log(type);
    },
    handleBoubleOvergediao(type) {
      this.gediaoCardList = this.resultsData[type];
    },
  },
  async created() {
    this.resultsData = await this.$api.gediao();
    this.gediaoCardList = this.resultsData["all"];
    // console.log(this.resultsData);
  },
};
</script>

<style lang="scss" src="@/assets/css/index/index.scss">
</style>
