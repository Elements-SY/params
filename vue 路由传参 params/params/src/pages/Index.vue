<template>
  <div class="index">
    <ul>
      <router-link to="/books/123">
        <li>书</li>
      </router-link>
      <router-link :to="{name:'phone',params:{id:456}}">
        <li>手机</li>
      </router-link>
      <button @click="food">美食</button>
      <!-- <li v-for="article in articles" @click="getDescribe(article.id)"> -->
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 记住params做跳转的时候不能加path，因为它会覆盖name，优先选择path做跳转，
    // 此时你this.$route.params获取不到params传的属性
    food () {
      this.$router.push({
        name: 'food',
        params: {
          mark: 666
        },
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
