<template>
  <div class="login-container">
    <div class="header">
      <router-link :to="{name:'HomeIndex'}" class="logo" >美团网</router-link>
    </div>
    <div class="main">
      <div class="banner">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt=""
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{ error }}</h4>
        <p class="modeLogin">
          <span>账号登录</span
          ><span style="cursor: pointer"
            >手机动态码登录<i class="el-icon-mobile-phone"></i
          ></span>
        </p>
        <form action="">
          <el-input
            v-model="userName"
            :class="{ error: error && !userName }"
            prefix-icon="el-icon-s-custom"
            placeholder="手机号/邮箱/用户名"
          ></el-input>
          <el-input
            v-model="password"
            :class="{ error: error && !password }"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock"
          ></el-input>
          <p class="foot"><a>忘记密码？</a></p>
        </form>
        <el-button
          type="primary"
          class="btn-login"
          @click="handleSubmit()"
          @keydown="handleKeyDown()"
          >登录</el-button
        >
        <p class="reg">
          <span>还没有账号？</span
          ><router-link :to="{ name: 'Register' }">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2021 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </div>
  </div>
</template>

<script>
import myStore from "@/myStore";
export default {
  data() {
    return {
      password: "",
      userName: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      this.$api
        .login({
          userName: this.userName,
          password: this.password,
        })
        .then((res) => {
          if (res.status !== "success") {
            this.error = res.msg;
            return false;
          }
          this.$router.push({ name: "HomeIndex" });
          myStore.setUserName(this.userName);
        });
    },
    handleKeyDown(e) {
      console.log(e);
    },
  },
  created() {
    this.userName = myStore.state.userName ? myStore.state.userName : "";
  },
};
</script>

<style lang="scss" scoped src="@/assets/css/login/index.scss">
</style>