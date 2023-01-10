<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <div v-for="item in list" :key="item.id">
        <!-- 关于这个key值的绑定，后面再说 -->
        <button @click="handler(item)">
          {{ item.name }}点击跳转到详细页面
        </button>
      </div>
      <div v-if="isLogin">{{ user }}已登录</div>
      <div v-else>未登录</div>
    </div>
    <div>
      <!-- 弹出盒子 -->

      <sec v-show="isShow">
        <template v-solt> 你确定要去购物车吗？ </template>
      </sec>
      <div
        class="btn"
        :isShow="isShow"
        @submit="handlerSubmit"
        @cancel="handlerCancel"
      >
        <button @click="isShow = true">进入</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sec from '../components/Sec.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    sec,
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    // isLogin() {
    //   return this.$store.state.user.isLogin
    // },
    // user() {
    //   return this.$store.state.user.user
    // },
    // list() {
    //   return this.$store.state.user.list
    // },
    ...mapState('user', ['isLogin', 'user', 'list']),
    // 辅助函数的工作机制
    // mapState(模块的名称，[具体你要使用的仓库的数据1，具体你要使用的仓库的数据2])
    // 返回一个对象,...将返回结果的{}打开，要符合Vue的计算属性的语法规则

    // {
    //   视图上使用的变量1:()=>{
    //     return this.$store.state.模块名.具体你要使用的仓库的数据1
    //   },
    //   视图上使用的变量2:() =>{
    //     return this.$store.state.模块名.具体你要使用的仓库的数据2
    //   },
    // isLogin:() =>{
    //   return this.$store.state.user.isLogin
    // },
    //  ...
    //  ...
    // }
  },
  created() {
    console.log('created')
  },
  methods: {
    handler(item) {
      /*
        完成跳转页面   home  =>detail

        通过js方式跳转路由，称之为编程式导航
        而通过router-link跳转,称之为声明式导航
      */
      //  1、动态路由传递
      // this.$router.push(`/detail/${item.id}`)

      // 2、普通参数传递
      // this.$router.push({name:'detail',params:{id:item.id}})

      // 3、查询参数传递
      // 查询参数传递只要看到路径上有问号? 说明当前组件传递数据的方式
      // 是查询参 注意的是接收数据的字段不是params而是query
      this.$router.push(`/detail?id=${item.id}`)
    },

    handlerSubmit() {
      this.isShow = false
      console.log('点击了是')
    },
    handlerCancel() {
      this.isShow = false
      console.log('点击了否')
    },
  },
}
</script>
<style lang="scss">
.btn {
  position: absolute;
  bottom: 10vh;
  left: 50vw;
}
</style>
