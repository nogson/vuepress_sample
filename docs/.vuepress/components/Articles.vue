<template>
  <section class="articles">
    <article class="article" v-for="article in articles">
      <h2>{{article.title}}</h2>
      <p>{{article.frontmatter.description}}</p>
      <p class="date">{{article.frontmatter.date|lastUpdated}}</p>
    </article>
  </section>
</template>

<script>
  export default {
    name: "Articles",
    props: ['pages'],
    computed: {
      articles() {
        return this.pages.filter(d => d.path.startsWith('/blog/'))
      }
    },
    filters:{
      lastUpdated(v) {
        return new Date(v).toLocaleString('ja')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .articles
    display flex
    flex-wrap wrap
    margin-top 32px

    .article
      width 25%
      padding 16px
      box-sizing border-box

      h2
        border-bottom none
        padding 0
      .date
        font-size 0.8rem
        color #6e6e6e
</style>