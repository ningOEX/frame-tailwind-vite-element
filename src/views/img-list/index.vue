<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" @scroll="handleScroll" ref="container">
    <div class="text-3xl py-1 border-l-4 my-3 rounded-md border-r-4 text-right pl-4 ">
      <p class="imgList-title">tuku</p>
    </div>
    <div class="flex justify-center flex-wrap items-center mt-2 gap-1 ">
      <el-empty v-if="!imgLists.length" description="No Data~" />
      <div v-else v-for="item in imgLists" :key="item.id" class="shadow-inner shadow-stone-50 rounded-lg"
        data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <a :href="item.src.original" data-lightbox="gallery" class="relative">
          <el-image :src="item.src.landscape" lazy fit="cover"
            class="scale-95 transition w-24 md:w-60 lg:w-70 h-24 md:h-60 lg:h70 rounded-lg object-cover lazy-image hover:scale-90" />
          <span class="absolute right-4 bottom-4 text-orange-300 text-xs">{{
    item.photographer
  }}</span>
        </a>
      </div>
    </div>
    <el-button type="primary" v-if="isLoading">Loading...</el-button>
    <div class="flex items-center gap-4 justify-center">

      <el-pagination small background layout="prev,pager, next" :total="total" class="mt-4" @change="changeHandle" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import { imgList } from "~/api/pexels";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from "gsap";
export default {
  mounted() {
    this.init();
    AOS.init()
    gsap.to(".imgList-title", { x: -1130, duration: 3 })
  },

  setup() {
    const imgLists = ref([]);
    const total = ref(0);
    const page = ref(1);
    const limit = ref(50);
    const query = ref("");

    const btnTxt = ref("加载更多...");
    const isLoading = ref(false)
    const container = ref(null)

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

    // 加载更多
    async function fetchPosts() {
      isLoading.value = true
      try {
        const res = await imgList(page.value, limit.value);
        if (res.status !== 200) {
          console.log(res.statusText);
          return;
        }
        const newImgList = res.data.photos;
        imgLists.value = [...imgLists.value, ...newImgList]
        page.value++
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        isLoading.value = false
      }
    }

    const handleScroll = () => {
      const scrollHeight = container.value.scrollHeight
      const scrollTop = container.value.scrollTop
      const clientHeight = container.value.clientHeight

      if (scrollTop + clientHeight >= scrollHeight && !isLoading.value) {
        fetchPosts()
      }
    }

    return {
      imgLists: imgLists,
      changeHandle: changeHandle,
      total: total,
      query: query,
      Search: Search,
      init: init,
      limit: limit,
      Refresh: Refresh,
      isLoading: isLoading,
      btnTxt: btnTxt,
      handleScroll: handleScroll,
      container: container,
    };
  },
};
</script>
