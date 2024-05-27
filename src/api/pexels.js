import request from "./request"

const headers = {
    "Authorization": "FktcH4rkZP3IOWDmw7NAUW1rMsXbx3iwNcWKqcGIUzUeQpatWsOpwFVj"
}

// 精选图片
export function imgList(page, limit) {
    return request({
        url: `/v1/curated?page=${page}&per_page=${limit}`,
        method: 'get',
        headers,
    })
}

// 搜索图片
export function imgSearch(query, page, limit) {
    return request({
        url: `/v1/search?query=${query}&page=${page}&per_page=${limit}`,
        method: 'get',
        headers,
    })
}

// 热门视频
export function videoList(page, limit) {
    return request({
        url: `/videos/popular?page=${page}&per_page=${limit}`,
        method: 'get',
        headers,
    })
}

// 随机音乐
export function randomMusic() {
    return request({
        url: "/api/music/wy/rand",
        method: 'get',
    })
}

// 随机壁纸
export function randomWallpaper() {
    return request({
        url: "/Api/ScTp",
        method: 'get',
    })
}
