<template>
  <div>
    <P class="mt-2 px-5 py-2 border mx-5 rounded-sm"
      >由于站点问题，video页咱无法正常提供video素材，站长正在解决处理...</P
    >
  </div>
  <div class="opacity-0">
    <div
      class="mt-2 h-60 md:h-72 lg:h-80 xl:h-96 w-fill p-4 shadow-inner shadow-stone-50 mb-2"
      id="dPlayer"
    >
      暂无可播放视频，可点击下方进行播放观看！
    </div>

    <div class="p-4 pl-2" :class="downloadUrl ? 'opacity-1' : 'opacity-0'">
      <a :href="downloadUrl" download class="border p-2 rounded-lg"
        >下载当前视频</a
      >
    </div>
    <p v-if="isTip" class="w-full text-center p-10 text-orange-400 text-sm">
      世间美景与你环环相扣。
    </p>

    <div
      class="flex flex-wrap gap-2 w-fill justify-center pl-2 pr-2 flex-grow bg-neutral-950 pt-4 pb-4"
    >
      <div
        v-for="item in videoLists"
        :key="item.id"
        class="shadow-inner shadow-stone-50 relative rounded-sm p-2 pb-0"
      >
        <el-image
          :src="item.image"
          lazy
          :class="currentVideo === item.id ? 'border border-orange-400' : ''"
          class="w-28 h-16 md:w-32 lg:w-72 xl:w-56 2xl:w-72 md:h-20 lg:h-32 xl:h-40 object-fill rounded-sm hover:scale-90 duration-200"
          @click="clickHandle(item)"
        />

        <div
          class="absolute top-1 left-1 md:top-2 lg:top-4 xl:top-4 md:left-2 lg:left-4 xl:left-6"
        >
          <img
            class="w-4 md:w-4 lg:w-6 xl:w-6"
            src="../../assets/img/video.svg"
            alt="play Video"
          />
          <p
            class="bottom-4 right-0 text-xs text-center pb-2 w-full overflow-hidden text-amber-400"
          >
            {{ item.user.name }}
          </p>
        </div>
      </div>
    </div>

    <div class="pb-1 border-b border-black"></div>

    <div class="flex justify-center">
      <el-pagination
        small
        background
        layout="prev, next"
        class="mt-4 mb-4"
        :total="total / 10"
        @change="pageChangeHandle"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { videoList } from "~/api/pexels";
import DPlayer from "dplayer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export default {
  mounted() {
    this.init();
  },
  setup() {
    const videoLists = ref([]);
    const page = ref(1);
    const limit = ref(10);
    const isTip = ref(true);
    const currentVideo = ref(0);
    const downloadUrl = ref("");
    const total = ref(0);

    // 获取视频
    const init = async () => {
      NProgress.start(); // 开始加载进度条
      const res = await videoList(page.value, limit.value);
      NProgress.done(); // 完成加载进度条
      if (res.status !== 200) {
        // 错误请求...
        return;
      }
      total.value = res.data.total_results;
      videoLists.value = res.data.videos;
    };

    // 点击观看视频
    const clickHandle = (item) => {
      isTip.value = false;
      currentVideo.value = item.id;
      downloadUrl.value = item.video_files[0].link;
      const dp = new DPlayer({
        container: document.getElementById("dPlayer"),
        video: {
          quality: [
            {
              name: "SD",
              url: item.video_files[0].link,
              type: "hls",
            },
            {
              name: "HD",
              url: item.video_files[2].link,
              type: "normal",
            },
          ],
          defaultQuality: 0,
          pic: item.video_pictures[0].picture,
          thumbnails: item.video_pictures[6].picture,
        },
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 平滑滚动
      });
    };

    // 分页
    const pageChangeHandle = (val) => {
      page.value = val;
      init();
    };

    return {
      init: init,
      videoLists: videoLists,
      clickHandle: clickHandle,
      isTip: isTip,
      currentVideo: currentVideo,
      downloadUrl: downloadUrl,
      pageChangeHandle: pageChangeHandle,
      total: total,
    };
  },
};
</script>
