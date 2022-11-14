<template>
  <div>
    <h5>{{article.id}}</h5>
    <h5>{{article.title}}</h5>
    
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>
