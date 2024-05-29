<template>
  <div class="bg-black">
    <!-- 标题 -->
    <div class="p-32 md:p-40 lg:p-60 text-center cursor-default relative flex justify-center">
      <img :src="url" class="b-lazy absolute top-0 left-0 w-full h-full object-cover z-10 " />
      <div class="absolute z-20">
        <p class="text-2xl md:text:4xl lg:text-5xl gradient-text show-right-animate">YUAN TU</p>
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
            <div class="group relative" data-aos="zoom-in-down" data-aos-duration="2000">
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
            <div class="group relative" data-aos="zoom-in-up" data-aos-duration="2000">
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
            <div class="group relative" data-aos="flip-up" data-aos-duration="2000">
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
              <p class="text-base font-semibold text-slate-800">demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-4xl gradient-text text-center show-right-animate m-20">SHOW CASE</p>
    <!-- 就那么回事儿 用点动画 -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 ">
      <!-- one -->
      <div class="flex justify-between items-center flex-wrap">
        <div class=" border-4 w-96 rounded-md h-64 box1-animate " data-aos="flip-right" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img src="https://www.wudada.online/dmImage/1234ffe6902191a29b552eb2c915ae98.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">ONE PIECE</p>
        </div>
        <img
          src="https://media.giphy.com/media/bPDTYRc0F2I2imnCPB/giphy.gif?cid=ecf05e4748yf8ytg0m68w29srxkdu9vwtey3uw9osgfsru95&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="" class="w-40">
        <div class="border-4 w-96 rounded-md h-64 box1-animate " data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
          <img src="https://www.wudada.online/dmImage/002350UojXf.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">WALLPAPERS HD</p>
        </div>
      </div>
      <p class="my-5">&nbsp;</p>
      <!-- two -->
      <div class="flex justify-between items-center flex-wrap">
        <div class=" border-4 w-96 rounded-md h-64 box1-animate " data-aos="fade-right" data-aos-duration="2000">
          <img src="https://www.wudada.online/dmImage/1597c35f145079bf0731e8ac09be4583.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">YOUTH</p>
        </div>
        <img
          src="https://media.giphy.com/media/QbtDhYTWo2hzsuS2U1/giphy.gif?cid=ecf05e47gkyeiazqe7qrfboi6ufytbhz4l5ucyb8d1jjnf9t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="" class="w-40">
        <div class=" border-4 w-96 rounded-md h-64 box1-animate " data-aos="fade-left" data-aos-duration="2000">
          <img src="https://www.wudada.online/dmImage/182318YFFsA.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">WALLPAPERS HD</p>
        </div>
      </div>
      <p class="my-5">&nbsp;</p>
      <!-- three -->
      <div class="flex justify-between items-center flex-wrap">
        <div class=" border-4 w-96 rounded-md h-64 box1-animate " data-aos="flip-right" data-aos-duration="1500">
          <img src="https://www.wudada.online/dmImage/192726NQoqd.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">MULBERRY</p>
        </div>
        <img
          src="https://media.giphy.com/media/C4NdKtRaQE9m8/giphy.gif?cid=ecf05e47z12ebobq61yfzsiezobfjsip56bbu6x6y4hu6fzc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          class="w-40" alt="">
        <div class="border-4 w-96 rounded-md h-64 box1-animate " data-aos="flip-left" data-aos-duration="1500">
          <img src="https://www.wudada.online/dmImage/164544xnN69.jpg" class="b-lazy" alt="">
          <p class="text-2xl text-center gradient-text">WALLPAPERS HD</p>
        </div>
      </div>
      <img
        src="https://media.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif?cid=ecf05e47koeo8z4lfvg55avp1hcbblvv5r7vayycvzm3maoq&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        alt="" class="w-full h-10 rounded-xl mt-10">
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
          class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Axios</span>
        <span
          class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pexels</span>
        <span
          class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Router</span>
        <span
          class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Aos</span>
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

import { gsap } from "gsap";

import AOS from 'aos'
import 'aos/dist/aos.css'

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
    AOS.init()
    // 盒子动画
    gsap.to(".show-right-animate", { rotation: 360, duration: 3, })

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