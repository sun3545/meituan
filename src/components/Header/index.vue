<template>
  <div class='header-container'>
    <el-row>
      <TopBar />
    </el-row>
    <el-row>
      <SearchBar />
    </el-row>
  </div>
</template>

<script>
import TopBar from './topBar'
import SearchBar from './searchBar'
export default {
  components: {
    TopBar,
    SearchBar
  }
}
</script>

<style>
</style>
