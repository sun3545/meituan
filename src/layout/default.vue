<template>
  <div class="layout-default">
    <el-container>
      <el-header height="" style="padding:0">
        <MyHeader />
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer height="">
        <MyFooter />

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss" src='@/assets/css/public/layout.scss'>
</style>
