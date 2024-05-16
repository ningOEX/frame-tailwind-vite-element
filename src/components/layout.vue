<template>
  <el-container>
    <el-header class="z-40">
      <navigate />
    </el-header>
    <el-main class="z-30">
      <router-view></router-view>
      <el-backtop :right="50" :bottom="100" />
    </el-main>
    <el-footer>
      <footers />
    </el-footer>
  </el-container>
</template>

<script setup>
import navigate from "./navigate.vue";
import footers from "./footers.vue";
</script>

<style scoped>
.el-header {
  --el-header-padding: 0;
}
.el-main {
  --el-main-padding: 0;
}
.el-footer {
  --el-footer-padding: 0;
}
</style>
