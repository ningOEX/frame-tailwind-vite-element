<template>
    <div class="mx-auto max-w-7xl  sm:px-6 lg:px-8 ">
        <!-- PC -->
        <div class="">
            <ul class="flex gap-2 text-center justify-center flex-wrap">
                <li v-for="(item, index) in list" :key="index"
                    class=" shadow-inner shadow-green-700 bg-black w-40 py-12 h-auto cursor-pointer duration-500 rounded-md my-10 "
                    id="li-dom" @mouseenter="mouseenterHandler(item)">
                    <div class="text-center grid gird-rows-1 justify-center ">
                        <p class=" w-6  m-auto " id="name-dom">
                            {{ item.name }}
                        </p>
                        <img :src="item.url" alt="img" class="w-20 h-20  object-cover m-5 rounded-sm duration-1000 "
                            id="img-dom">
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const list = [
    { id: 0, name: '悬停动画效果', url: 'https://www.wudada.online/dmImage/002350UojXf.jpg', introduce: '婚礼纪念' },
    { id: 1, name: '悬停动画效果', url: 'https://www.wudada.online/dmImage/002350UojXf.jpg', introduce: '婚礼纪念' },
    { id: 2, name: '悬停动画效果', url: 'https://www.wudada.online/dmImage/002350UojXf.jpg', introduce: '婚礼纪念' },
    { id: 3, name: '悬停动画效果', url: 'https://www.wudada.online/dmImage/002350UojXf.jpg', introduce: '婚礼纪念' },
    { id: 4, name: '悬停动画效果', url: 'https://www.wudada.online/dmImage/002350UojXf.jpg', introduce: '婚礼纪念' }
]
let liAll;
let name;
let imgs;

const currentIndex = ref(0);

onMounted(() => {
    liAll = document.querySelectorAll("#li-dom");
    name = document.querySelectorAll("#name-dom");
    imgs = document.querySelectorAll("#img-dom");
    liAll[0].classList.add("flex-auto");
    imgs[0].classList.add("scale-150");
    name[0].classList.remove("w-6");
    name[0].classList.add("text-xl", "my-4");

})

const mouseenterHandler = (item) => {
    for (let i = 0; i < liAll.length; i++) {
        imgs[i].classList.remove("scale-150");
        liAll[i].classList.remove("flex-auto");
        name[i].classList.add("w-6");
        name[i].classList.remove("text-xl", "my-4");
        if (item.id === i) {
            liAll[i].classList.add("flex-auto");
            name[i].classList.remove("w-6");
            name[i].classList.add("text-xl", "my-4");
            imgs[i].classList.add("scale-150");
        }
    }
}

</script>

<style></style>
