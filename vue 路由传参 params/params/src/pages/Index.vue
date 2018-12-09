<template>
    <div class="index">

      <ul>
          <router-link to="/books/123"><li>书</li></router-link>
          <router-link :to="{name:'phone',params:{id:456}}"><li>手机</li></router-link>
          <button @click="food">美食</button>
          <!-- <li v-for="article in articles" @click="getDescribe(article.id)"> -->
      </ul>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        food(){
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
