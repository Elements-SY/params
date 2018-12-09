<template>
   <div class="index">
       <ul>
        <router-link :to="{path:'/lens',query:{id:'适马'}}">
            <li>镜头</li>
        </router-link>

        <router-link to="/computer/电脑">
            <li>电脑</li>
        </router-link>
        <!-- <router-link :to="{path:'/phone',query:{id:123}}">手机</router-link>  -->
        <button @click="phones">手机</button>
       </ul>
       
       <router-view></router-view>
   </div>
</template>
<script>
export default {
    methods:{
        phones(){
            this.$router.push({
                path:'/phone', 
                query:{    
                    id: 123,
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
