<template>
  <div class="">
    <div
      class="flex justify-center flex-wrap items-center mt-2 md:mt-2 lg:mt-4 gap-2 md:gap-4 ml:gpa-6"
    >
      <el-empty v-if="!imgLists.length" description="No Data~" />
      <div
        v-else
        v-for="item in imgLists"
        :key="item.id"
        class="shadow-inner shadow-stone-50 rounded-lg"
      >
        <a :href="item.src.original" data-lightbox="gallery" class="relative">
          <el-image
            :src="item.src.landscape"
            lazy
            fit="cover"
            class="scale-95 transition w-24 md:w-60 lg:w-70 h-24 md:h-60 lg:h70 rounded-lg object-cover lazy-image hover:scale-90"
          />
          <span class="absolute right-4 bottom-4 text-orange-300 text-xs">{{
            item.photographer
          }}</span>
        </a>
      </div>
    </div>
    <div class="flex items-center gap-4 justify-center">
      <p class="pt-3 text-xs text-gray-500">total:{{ total }}</p>
      <el-pagination
        small
        background
        layout="prev, next"
        :total="total"
        class="mt-4"
        @change="changeHandle"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import { imgList, imgSearch } from "~/api/pexels";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export default {
  mounted() {
    this.init();
  },

  setup() {
    const imgLists = ref([]);
    const total = ref(0);
    const page = ref(1);
    const limit = ref(50);
    const query = ref("");

    // 图片请求
    const init = () => {
      NProgress.start(); // 开始加载进度条
      imgList(page.value, limit.value).then((res) => {
        total.value = res.data.total_results;
        NProgress.done(); // 完成加载进度条
        if (res.status === 200) {
          // 成功
          imgLists.value = res.data.photos;
          window.scrollTo({
            top: 0,
            behavior: "smooth", // 平滑滚动
          });
        } else {
          // 获取失败
          console.log(res.statusText);
        }
      });
    };

    // 分页
    const changeHandle = async (val) => {
      NProgress.start(); // 开始加载进度条
      page.value = val;
      const res = await imgList(page.value, limit.value);
      NProgress.done(); // 完成加载进度条
      if (res.status !== 200) {
        console.log(res.statusText);
        return;
      }
      imgLists.value = res.data.photos;
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 平滑滚动
      });
    };

    return {
      imgLists: imgLists,
      changeHandle: changeHandle,
      total: total,
      query: query,
      Search: Search,
      init: init,
      limit: limit,
      Refresh: Refresh,
    };
  },
};
</script>
