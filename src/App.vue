<template>
  <div id="app">
    <div class="container">
      <h1 class="title">搜的是内</h1>
      <div class="item">
        <div class="i-title">知乎</div>
        <div class="i-input"><v-input v-model="keywordsZhihu"></v-input></div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`https://www.zhihu.com/search?type=content&q=${keywordsZhihu}`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">微博</div>
        <div class="i-input"><v-input v-model="keywordsWeibo"></v-input></div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`https://s.weibo.com/weibo?q=${keywordsWeibo}`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">微信公众号</div>
        <div class="i-input">
          <v-input v-model="keywordsWeixinAccounts"></v-input>
        </div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`http://weixin.sogou.com/weixin?query=${keywordsWeixinAccounts}`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">微信文章</div>
        <div class="i-input">
          <v-input v-model="keywordsWeixinArticles"></v-input>
        </div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`http://weixin.sogou.com/weixin?query=${keywordsWeixinArticles}&type=2`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">SegmentFault</div>
        <div class="i-input">
          <v-input v-model="keywordsSegmentFault"></v-input>
        </div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`https://segmentfault.com/search?q=${keywordsSegmentFault}`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">天涯</div>
        <div class="i-input">
          <v-input v-model="keywordsTianya"></v-input>
        </div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`http://search.tianya.cn/bbs?q=${keywordsSegmentFault}`" target="_blank">搜索</a></div>
      </div>

      <div class="item">
        <div class="i-title">起点文学</div>
        <div class="i-input">
          <v-input v-model="keywordsQidian"></v-input>
        </div>
        <div class="i-btn"><a class="v-btn v-btn-primary" :href="`https://www.qidian.com/search?kw=${keywordsSegmentFault}`" target="_blank">搜索</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      keywordsWeixinAccounts: '',
      keywordsWeixinArticles: '',
      keywordsZhihu: '',
      keywordsWeibo: '',
      keywordsSegmentFault: '',
      keywordsTianya: '',
      keywordsQidian: ''
    }
  }
}
</script>
