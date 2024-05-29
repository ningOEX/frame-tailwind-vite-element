<template>
    <div
        class="flex gap-4 mt-1 justify-center flex-wrap mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 items-center text-center text-slate-600">
        <div :class="classMuster" class="hover:bg-slate-50">
            <!-- 随机音乐 -->
            <div class="mx-auto max-w-60 mt-4 ">
                <el-image :src="music.cover" lazy class="w-60 rounded-full cursor-pointer"
                    :class="isPlay ? 'rotating-element' : ''" />
                <address class="mt-4 cursor-default">
                    <span class="flex items-center justify-center gap-1">
                        <img src="../../assets/img/demo/music/headphones.svg" alt="music-icon">
                        <p>{{ music.song }}</p>
                    </span>
                    <p>歌手：{{ music.singer }}</p>
                </address>
            </div>
            <div class="flex items-center justify-center gap-2 cursor-pointer mt-2">
                <img src="../../assets/img/demo/music/skip-back.svg" alt="">
                <img v-show="!isPlay" src="../../assets/img/demo/music/play-circle.svg" alt=""
                    @click="playClickHandler">
                <img v-show="isPlay" src="../../assets/img/demo/music/pause-circle.svg" alt=""
                    @click="pauseClickHandler">
                <img src="../../assets/img/demo/music/skip-forward.svg" alt="" @click="skipClickHandler">
                <img v-if="volume <= 0.5 && volume != 0" src="../../assets/img/demo/music/volume-1.svg" alt=""
                    @click="isVolume = !isVolume">
                <img v-if="volume > 0.5" src="../../assets/img/demo/music/volume-2.svg" alt=""
                    @click="isVolume = !isVolume">
                <img v-if="volume === 0" src="../../assets/img/demo/music/volume-x.svg" alt=""
                    @click="isVolume = !isVolume">
                <span class="flex gap-2" v-if="isVolume">
                    <img src="../../assets/img/demo/music/minus.svg" alt="" @click="minusClickHandler">
                    {{ volume }}
                    <img src="../../assets/img/demo/music/plus.svg" alt="" @click="plusClickHandler">
                </span>
            </div>

        </div>
        <div :class="classMuster">
            没想好写点啥
        </div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
        <div :class="classMuster">没想好写点啥</div>
    </div>
</template>

<script setup>
import { randomMusic } from "../../api/pexels";
import { ref, onMounted } from 'vue';
import { Howl, Howler } from 'howler'
import { ElMessage } from 'element-plus'
const classMuster = "w-96 h-96 border  border-slate-600  hover:border-slate-200  rounded-md";

const music = ref({})

const isOnload = ref(false);
const isVolume = ref(false);
const volume = ref(0.5);
const isPlay = ref(false);

const src = ref('')
const sound = ref(null)

onMounted(() => {
    getMusic();

})

// 资源请求
const getMusic = () => {
    randomMusic().then(res => {
        isOnload.value = true
        if (res.data.code !== 200) {
            // 请求失败
            return ElMessage.error(res.data.msg)
        }
        isOnload.value = false
        music.value = res.data.data;
        src.value = `${music.value.Music}.mp3`
    })
}
// 减音量
const minusClickHandler = () => {
    if (volume.value <= 0.1) {
        volume.value = 0;
        return
    }
    volume.value = (volume.value - 0.1).toFixed(1);
    Howler.volume(volume.value);
}

// 加音量
const plusClickHandler = () => {
    if (volume.value >= 0.9) {
        volume.value = 1;
        return
    }
    volume.value = (Number(volume.value) + 0.1).toFixed(1);
    Howler.volume(volume.value);
}

// 播放事件
const playClickHandler = () => {
    isPlay.value = true;
    // 创建音频实例
    sound.value = new Howl({
        src: [src.value],
        loop: true,
        html5: true, // 强制使用 HTML5 Audio
        preload: true, // 预加载音频
        volume: 0.5,
    });
    // 播放
    sound.value.play();
    // 播放结束
    sound.value.on('end', function () {
        sound.value.stop();
        getMusic();
        console.log("end!")
    });
}

// 暂停
const pauseClickHandler = () => {
    isPlay.value = false;
    sound.value.pause()
}

// 下一首
const skipClickHandler = () => {
    if (isPlay.value) {
        sound.value.pause()
    }
    isPlay.value = false;
    getMusic();

}
</script>

<style>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.rotating-element {
    animation: rotate 5s linear infinite;
}
</style>
