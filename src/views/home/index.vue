<template>
  <div class="">
    <!-- 标题 -->
    <div class="p-32 md:p-40 lg:p-60 text-center cursor-default relative flex justify-center">
      <img :src="url" class="b-lazy absolute top-0 left-0 w-full h-full object-cover z-10 " />
      <div class="absolute z-20">
        <p class="text-2xl md:text:4xl lg:text-5xl gradient-text">YUAN TU</p>
        <p class="pt-2">{{ typedText }}</p>
      </div>
    </div>
    <!-- 网站表现 -->
    <div class="bg-indigo-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-slate-800 cursor-default">
            Beautiful scenery
          </h2>

          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="../../assets/img/home/swiper1.jpg" alt="home website"
                  class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="/">
                  <span class="absolute inset-0"></span>
                  about home website
                </a>
              </h3>
              <p class="text-base font-semibold text-slate-800">Home</p>
            </div>
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="../../assets/img/home/swiper2.jpg" alt="img-list website"
                  class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="/img-list">
                  <span class="absolute inset-0"></span>
                  about Photo website
                </a>
              </h3>
              <p class="text-base font-semibold text-slate-800">Photo</p>
            </div>
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="../../assets/img/home/swiper3.jpg" alt="video list"
                  class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  about video website
                </a>
              </h3>
              <p class="text-base font-semibold text-slate-800">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术支持 -->
    <div class="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 cursor-default">
      <p class="text-2xl md:text:2xl lg:text-3xl text-center py-5">技术支持</p>
      <div class="flex gap-2 items-center justify-center flex-wrap">
        <span
          class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Vue
          Vite</span>
        <span
          class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">TailWind
          CSS</span>
        <span
          class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Swiper</span>
        <span
          class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pexels</span>
        <span
          class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Howler</span>
      </div>
    </div>
    <!-- swiper -->
    <div class="h-16 md:h-20 lg:h-24 xl:h-28 object-cover text-center ">
      <swiper :direction="'vertical'" :pagination="{
        clickable: true,
      }" :autoplay="true" :modules="modules" class="">
        <swiper-slide>
          <img src="../../assets/img/home/swiper1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/home/swiper2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/home/swiper3.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

import { randomWallpaper } from '../../api/pexels'

import { ElMessage } from 'element-plus'

import Blazy from 'blazy';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.startTyping();

    // 懒加载
    this.bLazy = new Blazy({
      selector: '.b-lazy',
      successClass: 'b-loaded',
      errorClass: 'b-error',
      loadInvisible: true,
      offset: 100,
    });

  },

  beforeUnmount() {
    this.bLazy.destroy();
  },

  setup() {
    const text = ref("落叶飘零秋意浓，凋零的美丽何曾空。");
    const typedText = ref("");

    const url = ref("")

    // 打字效果
    const startTyping = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        typedText.value += text.value[index];
        index++;
        if (index === text.value.length) {
          clearInterval(intervalId);
        }
      }, 100); // 每个字符显示的时间间隔（毫秒）
    };

    // 随机壁纸
    randomWallpaper().then((res) => {
      if (!res.data.code === "200") {
        return ElMessage.error(res.data.msg)
      }
      url.value = res.data.data;
    })

    return {
      text: text,
      startTyping: startTyping,
      typedText: typedText,
      url: url,
      modules: [Pagination],
    };
  },
};
</script>


<style>
.b-lazy {
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.b-loaded {
  opacity: 1;
}

.b-error {
  opacity: 1;
  background-color: #f0f0f0;
}
</style>