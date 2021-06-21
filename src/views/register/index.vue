<template>
  <div class="register-container">
    <div class="header">
      <header>
        <router-link :to="{name:'HomeIndex'}" class="logo">美团网</router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'Login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            @input="handleInputLength()"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span><span>中</span><span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="ruleForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import myStore from "@/myStore";
export default {
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (
        this.ruleForm.userName.length < 6 ||
        this.ruleForm.userName.length > 16
      ) {
        callback(new Error("密码必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validateRePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else if (
        this.ruleForm.userName.length < 6 ||
        this.ruleForm.userName.length > 16
      ) {
        callback(new Error("密码必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (
        this.ruleForm.userName.length < 4 ||
        this.ruleForm.userName.length > 16
      ) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
        rePassword: "",
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        rePassword: [{ validator: validateRePassword, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }],
      },
      strengthClass: "",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.register({ ...this.ruleForm }).then((res) => {
            if (res.status !== "success") {
              alert(res.msg);
              return;
            }
            this.$router.push({ name: "Login" });
            myStore.setUserName(this.ruleForm.userName);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleInputLength() {
      const length = this.ruleForm.password.length;
      if (!length) {
        this.strengthClass = "";
        return;
      }
      if (length > 20) {
        this.strengthClass = "strong";
      } else if (length > 8) {
        this.strengthClass = "normal";
      } else {
        this.strengthClass = "week";
      }
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/css/register/index.scss">
</style>