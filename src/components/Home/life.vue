<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li v-for="(item, i) in navList" :key="i">
          <router-link to="/" :class="item.cla">{{ item.title }}</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14"><Slider /></el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <div class="setUp">
            <i class="el-icon-setting"></i>
          </div>
          <h4>
            <img :src="userImg" />
          </h4>
          <p class="m-life-login-name">
            Hi！{{ userName ? userName : "你好" }}
          </p>
          <template v-if="!userName">
            <p>
              <router-link :to="{ name: 'Register' }"
                ><el-button round>注册</el-button></router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'Login' }"
                ><el-button round>立即登录</el-button></router-link
              >
            </p>
          </template>
          <template v-else>
            <table class="userTable">
              <tr v-for="(item, index) in newTableData" :key="index">
                <td v-for="(v, i) in item" :key="i">
                  <i :class="v.icon"></i>
                  <p>{{ v.name }}</p>
                </td>
              </tr>
            </table>
          </template>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
          <p>美团APP手机版</p>
          <p class="last-p"><span class="red">1元起</span>吃喝玩乐</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "../slider";
import myStore from "@/myStore";
export default {
  data() {
    return {
      userName: myStore.state.userName,
      userImg: "//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg",
      navList: [
        {
          title: "美团外卖",
          cla: "",
        },
        {
          title: "猫眼电影",
          cla: "",
        },
        {
          title: "民俗/公寓",
          cla: "apartment",
        },
        {
          title: "商家入驻",
          cla: "takeout",
        },
        {
          title: "美团工艺",
          cla: "business",
        },
      ],
      tableData: [
        { icon: "el-icon-s-order", name: "我的订单" },
        { icon: "el-icon-star-off", name: "我的收藏" },
        { icon: "el-icon-s-ticket", name: "抵用卷" },
        { icon: "el-icon-money", name: "余额" },
        { icon: "el-icon-more", name: "更多" },
      ],
      newTableData: [],
    };
  },
  components: {
    Slider,
  },
  created() {
    this.userImg = myStore.state.userName
      ? "https://img2.baidu.com/it/u=2979761458,4171071140&fm=26&fmt=auto&gp=0.jpg"
      : this.userImg;
    const length = Math.ceil(this.tableData.length / 3);
    const newData = [];
    for (let i = 0; i < length; i++) {
      let data = this.tableData.slice(i * length, i * length + 3);
      newData.push(data);
    }
    this.newTableData = newData;
  },
};
</script>

<style lang="scss" src="@/assets/css/index/life.scss">
</style>
