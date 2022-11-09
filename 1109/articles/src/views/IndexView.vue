<template>
  <div>
      <h1>Articles</h1>
      {{ articles }}
      <router-link :to="{name: 'create'}">게시물 작성</router-link>
      <ArticleItem
      v-for="article in articles"
      :key=article.id
      :article=article
      />
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
    name:'IndexView',
    computed: {
        articles() {
            return this.$store.state.articles
        }
    },
    components: {
        ArticleItem
    }
}
</script>

<style>

</style>