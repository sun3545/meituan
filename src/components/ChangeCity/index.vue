<template>
  <div>
    <span class="name">按省份选择</span>
    <MySelect
      :list="provinceList"
      title="省份"
      :value="provinceValue"
      :isActive="provinceShow"
      @changeActive="provinceShowContent($event)"
      @documentClick="documentClick()"
      @MyChange="changePrivince"
    />
    <MySelect
      :list="cityList"
      title="城市"
      :value="cityValue"
      :isActive="cityShow"
      @changeActive="cityShowContent($event)"
      @documentClick="documentClick()"
      @MyChange="changeCity($event)"
      :disabled="cityDisabled"
    />
    <span>直接搜索</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.name"
        @click.native="handleSearch()"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MySelect from "./select";
import myStore from "@/myStore";
export default {
  data() {
    return {
      provinceValue: "省份",
      provinceList: [],
      cityValue: "城市",
      cityList: [],
      provinceShow: false,
      cityShow: false,
      searchList: [],
      options: [],
      searchWord: "",
      loading: false,
      cityDisabled: true,
    };
  },
  components: {
    MySelect,
  },
  methods: {
    handleSearch() {
      if (this.options[0] && this.options[0].name !== this.searchWord) {
        return false;
      }
      myStore.setPosition(this.searchWord);
      this.$router.push({ name: "HomeIndex" });
    },
    provinceShowContent(status) {
      this.cityShow = !status;
      this.provinceShow = status;
    },
    cityShowContent(status) {
      this.provinceShow = !status;
      this.cityShow = status;
    },
    changePrivince(item) {
      this.provinceValue = item.provinceName;
      this.cityList = item.cityInfoList;
      this.provinceShow = false;
      this.cityDisabled = false;
    },
    changeCity(item) {
      this.cityValue = item.name;
      myStore.setPosition(item.name);
      this.cityShow = false;
      this.$router.push({ name: "HomeIndex" });
    },
    documentClick() {
      this.provinceShow = false;
      this.cityShow = false;
    },
    remoteMethod(query) {
      const reg = new RegExp(query, "g");
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.searchList.filter((item) => {
            return reg.test(item.name);
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
  async created() {
    this.provinceList = await this.$api.province();
    this.searchList = await this.$api.cityList();
  },
};
</script>

<style lang='scss' scoped src="@/assets/css/changecity/iselect.scss">
</style>