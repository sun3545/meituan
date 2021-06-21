<template>
  <div class="geo-container">
    <div class="position">
      <i class="el-icon-location-outline" />
      {{ position }}
      <router-link class="changeCity" :to="{ name: 'ChangeCity' }">
        切换城市
      </router-link>
      [<a
        href=""
        style="padding: 0 5px"
        v-for="item in subPosition"
        :key="item.id"
        >{{ item.name }}</a
      >]
    </div>
    <div class="m-user" v-if="!userName">
      <router-link class="login" :to="{ name: 'Login' }">
        立即登录
      </router-link>
      <router-link class="register" :to="{ name: 'Register' }">
        注册
      </router-link>
    </div>
    <div class="m-user" v-else>
      <router-link class="loginName" :to="{ name: 'Login' }">
        {{ userName }}
      </router-link>
      <span class="loginOut" @click="reload()"> 退出 </span>
    </div>
  </div>
</template>

<script>
import myStore from "@/myStore";
export default {
  data() {
    return {
      position: myStore.state.position,
      userName: myStore.state.userName,
      subPosition: {},
    };
  },
  async created() {
    const position = await this.$api.getPosition();
    this.subPosition = position.nearCity;
  },
  watch: {
    $route() {
      this.position = myStore.state.position;
    },
  },
  methods: {
    reload() {
      //   myStore.setPosition("");
      //   myStore.setUserName("");
      //   this.$router.push({ name: "Home" });
      location.reload();
    },
  },
};
</script>

<style>
</style>
