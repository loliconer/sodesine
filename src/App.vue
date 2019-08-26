<template>
  <div id="app">
    <div class="container">
      <div class="logo"><img src="/img/logo.svg"></div>
      <div class="search-row">
        <v-input v-model="keyword" :placeholder="placeholder" @enter="searchButton.click()"></v-input>
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
  import Button from 'lovue/src/components/Button'
  import Input from 'lovue/src/components/Input'
  import RadioGroup from 'lovue/src/components/RadioGroup'

  const engines = {
    google: ['谷歌', 'https://www.google.com/search?q=${keyword}', '外事问谷歌'],
    zhihu: ['知乎', 'https://www.zhihu.com/search?type=content&q=${keyword}', '解惑问知乎'],
    weibo: ['微博', 'https://s.weibo.com/weibo?q=${keyword}', '八卦问微博'],
    tianya: ['天涯', 'http://search.tianya.cn/bbs?q=${keyword}', '房事问天涯'],
    weixinAccounts: ['微信公众号', 'http://weixin.sogou.com/weixin?query=${keyword}', '没事问微信'],
    weixinArticles: ['微信文章', 'http://weixin.sogou.com/weixin?query=ll -h${keyword}&type=2', '没事问微信'],
    segmentFault: ['SegmentFault', 'https://segmentfault.com/search?q=${keyword}', '技术问SegmentFault'],
    qidian: ['起点文学', '', '小说问起点'],
    huaban: ['花瓣', 'https://huaban.com/search/?q=${keyword}', ''],
    '500px': ['500px', 'https://500px.me/community/search?key=${keyword}&searchtype=photos', ''],
    neteaseMusic: ['网易云音乐', 'https://music.163.com/#/search/m/?s=${keyword}', ''],
    xiami: ['虾米音乐', 'https://www.xiami.com/search?key=${keyword}', ''],
    qqMusic: ['QQ音乐', 'https://y.qq.com/portal/search.html#w=${keyword}', ''],
    kugou: ['酷狗音乐', 'https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=${keyword}', ''],
    bilibili: ['哔哩哔哩', 'https://search.bilibili.com/all?keyword=${keyword}', ''],
    youku: ['优酷视频', 'https://so.youku.com/search_video/q_${keyword}', ''],
    tencentVideo: ['腾讯视频', 'https://v.qq.com/x/search/?q=${keyword}', ''],
    tmall: ['天猫', 'https://list.tmall.com/search_product.htm?q=${keyword}', ''],
    jd: ['京东', 'https://search.jd.com/Search?keyword=${keyword}&enc=utf-8', ''],
    lookao: ['Lookao', 'https://lookao.com/search?q=${keyword}', ''],
    linux: ['Linux命令', 'https://wangchujiang.com/linux-command/list.html#!kw=${keyword}', ''],
    miji: ['秘迹搜索', 'https://mijisou.com/?q=${keyword}', ''],
    toutiao: ['头条搜索', 'https://m.toutiao.com/search/?keyword=${keyword}', ''],
  }

export default {
  name: 'app',
  data() {
    return {
      mobile: isMobile(),
      keyword: '',
      engine: localStorage.engine || 'google',
      engines: Object.keys(engines).map(row => ({ name: engines[row][0], value: row })),
      searchButton: null
    }
  },
  watch: {
    engine(val) {
      localStorage.engine = val
    }
  },
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [RadioGroup.name]: RadioGroup
  },
  computed: {
    placeholder() {
      return engines[this.engine][2] || engines[this.engine][0]
    },
    searchUrl() {
      const { keyword, engine, mobile } = this

      if (engine === 'qidian') return `https://${mobile ? 'm' : 'www'}.qidian.com/search?kw=${keyword}`
      return engines[engine][1].replace('${keyword}', keyword)
    }
  },
  mounted() {
    this.searchButton = this.$el.querySelector('.search-row > a')
  }
}
</script>
