<template>
  <el-row class=' m-header-topbar m-header'>
    <el-col :span='10'><Geo /></el-col>
    <el-col :span='14'><MyNav /></el-col>
  </el-row>
</template>

<script>
import Geo from './geo'
import MyNav from './nav'
export default {
  components: {
    Geo,
    MyNav
  }
}
</script>

<style lang='scss' src='@/assets/css/public/header/topbar.scss'>
</style>
