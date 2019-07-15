<template>
  <div id="app">
    <div class="container">
      <div class="logo"><img src="/img/logo.svg"></div>
      <div class="search-row">
        <v-input v-model="keyword" :placeholder="placeholder"></v-input>
        <a :href="searchUrl" target="_blank"><v-button>搜索</v-button></a>
      </div>
      <div class="engines">
        <v-radio-group :source="engines" v-model="engine" lnf="button"></v-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
  import {isMobile} from 'lovue/dist/utils.esm'

export default {
  name: 'app',
  data() {
    return {
      mobile: isMobile(),
      keyword: '',
      engine: 'google',
      engines: [
        { name: '谷歌', value: 'google' },
        { name: '知乎', value: 'zhihu' },
        { name: '微博', value: 'weibo' },
        { name: '天涯', value: 'tianya' },
        { name: '微信公众号', value: 'weixinAccounts' },
        { name: '微信文章', value: 'weixinArticles' },
        { name: 'SegmentFault', value: 'segmentFault' },
        { name: '起点文学', value: 'qidian' },
        { name: '花瓣', value: 'huaban' },
        { name: '500px', value: '500px' },
        { name: '网易云音乐', value: 'neteaseMusic' },
        { name: '虾米音乐', value: 'xiami' },
        { name: 'QQ音乐', value: 'qqMusic' },
        { name: '酷狗音乐', value: 'kugou' },
        { name: '哔哩哔哩', value: 'bilibili' },
        { name: '优酷视频', value: 'youku' },
        { name: '腾讯视频', value: 'tencentVideo' },
        { name: '天猫', value: 'tmall' },
        { name: '京东', value: 'jd' },
      ]
    }
  },
  computed: {
    placeholder() {
      switch (this.engine) {
        case 'google':
          return '外事问谷歌'
        case 'zhihu':
          return '解惑问知乎'
        case 'weibo':
          return '八卦问微博'
        case 'weixinAccounts':
          return '没事问微信'
        case 'weixinArticles':
          return '没事问微信'
        case 'segmentFault':
          return '技术问SegmentFault'
        case 'tianya':
          return '房事问天涯'
        case 'qidian':
          return '小说问起点'
        case 'huaban':
          return '花瓣网'
        case '500px':
          return '500px'
        case 'neteaseMusic':
          return '网易云音乐'
        case 'xiami':
          return '虾米音乐'
        case 'qqMusic':
          return 'QQ音乐'
        case 'kugou':
          return '酷狗音乐'
        case 'bilibili':
          return '哔哩哔哩'
        case 'youku':
          return '优酷视频'
        case 'tencentVideo':
          return '腾讯视频'
        case 'tmall':
          return '天猫'
        case 'jd':
          return '京东'
        default:
          break
      }
    },
    searchUrl() {
      const { keyword, engine, mobile } = this

      let url = ''
      switch (engine) {
        case 'google':
          url = `https://www.google.com/search?q=${keyword}`
          break
        case 'zhihu':
          url = `https://www.zhihu.com/search?type=content&q=${keyword}`
          break
        case 'weibo':
          url = `https://s.weibo.com/weibo?q=${keyword}`
          break
        case 'weixinAccounts':
          url = `http://weixin.sogou.com/weixin?query=${keyword}`
          break
        case 'weixinArticles':
          url = `http://weixin.sogou.com/weixin?query=ll -h${keyword}&type=2`
          break
        case 'segmentFault':
          url = `https://segmentfault.com/search?q=${keyword}`
          break
        case 'tianya':
          url = `http://search.tianya.cn/bbs?q=${keyword}`
          break
        case 'qidian':
          url = `https://${mobile ? 'm' : 'www'}.qidian.com/search?kw=${keyword}`
          break
        case 'huaban':
          url = `https://huaban.com/search/?q=${keyword}`
          break
        case '500px':
          url = `https://500px.me/community/search?key=${keyword}&searchtype=photos`
          break
        case 'neteaseMusic':
          url = `https://music.163.com/#/search/m/?s=${keyword}`
          break
        case 'xiami':
          url = `https://www.xiami.com/search?key=${keyword}`
          break
        case 'qqMusic':
          url = `https://y.qq.com/portal/search.html#w=${keyword}`
          break
        case 'kugou':
          url = `https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=${keyword}`
          break
        case 'bilibili':
          url = `https://search.bilibili.com/all?keyword=${keyword}`
          break
        case 'youku':
          url = `https://so.youku.com/search_video/q_${keyword}`
          break
        case 'tencentVideo':
          url = `https://v.qq.com/x/search/?q=${keyword}`
          break
        case 'tmall':
          url = `https://list.tmall.com/search_product.htm?q=${keyword}`
          break
        case 'jd':
          url = `https://search.jd.com/Search?keyword=${keyword}&enc=utf-8`
          break
        default:
          break
      }

      return url
    }
  }
}
</script>
