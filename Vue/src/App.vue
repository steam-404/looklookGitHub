<template>
<!--  头部标题-->
  <headMessage></headMessage>
  <el-container>
    <el-container>
      <el-aside>
        <el-button>user</el-button>
        <br>
        <el-button>Repository</el-button>
        <br>
        <el-button>issues</el-button>
        <br>
        <el-button>commits</el-button>
      </el-aside>
      <el-container>
      </el-container>
    </el-container>
  </el-container>
<!--  页面底部-->
  <bottomMessage></bottomMessage>
</template>
<script>
import head from '@/components/head.vue'
import bottom from '@/components/bottom.vue'
export default {
  components:{
    headMessage:head,
    bottomMessage:bottom,
  }
}
</script>
<style>
el-aside{
  width: 15vh;
  height: auto;
  background-color: #409EFF;
}
el-button{
  
}
</style>