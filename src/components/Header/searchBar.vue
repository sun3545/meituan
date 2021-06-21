<template>
  <div class="search-bar-container">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="{ name: 'HomeIndex' }"
          ><img
            src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
            alt="美团"
        /></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            @input="handleInput()"
            @focus="handleFocus()"
            @blur="handleBlur()"
          ></el-input
          ><el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlaceList" :key="item">
              <router-link
                :to="{
                  name: 'Goods',
                  params: {
                    name: item,
                  },
                }"
                >{{ item }}</router-link
              >
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, i) in searchList" :key="i">
              <router-link
                :to="{
                  name: 'Goods',
                  params: {
                    name: item,
                  },
                }"
                >{{ item }}</router-link
              >
            </dd>
          </dl>
        </div>
        <div class="suggest">
          <a href="" v-for="item in suggest" :key="item">{{ item }}</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      oldInput: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggest: [],
    };
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.input;
    },
    isSearchList: function () {
      return this.isFocus && this.input;
    },
  },
  methods: {
    async handleInput() {
      if (this.oldInput === this.input && this.input !== "") {
        return;
      }
      this.oldInput = this.input;
      const res = await this.$api.search();
      this.searchList = [...new Set(res.list)];
    },
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
  },
  async created() {
    this.suggest = await this.$api.searchWords();
    const hot = await this.$api.searchWords();
    console.log();
    if (hot) {
      this.hotPlaceList = hot.splice(2);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";

@import "@/assets/css/public/header/search.scss";
</style>
