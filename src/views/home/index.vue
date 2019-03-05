<template>
  <div>
    <div class="qqMusic_home_head">
      <nav class="blog_home">
        <a href class="home_botton">首页</a>
        <a href class="home_botton">关于</a>
        <a href class="home_botton">留言板</a>
      </nav>
    </div>
    <div class="blog_home_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.qqMusic_home_head {
  height: 5rem;
  width: 100%;
  background: #af914ced;
  // position: fixed;
  top: 0;
  z-index: 1000;
}
.blog_home {
  display: flex;
  width: 50%;
  float: right;
  line-height: 5rem;
  justify-content: flex-end;
}
.home_botton {
  font-size: 1.8rem;
  margin-left: 2rem;
}
.blog_home_content {
  margin-top: 6rem;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>
