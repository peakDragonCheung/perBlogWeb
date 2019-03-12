<template>
  <div class="articleList_flex_co">
    <div class="articleList_centent">
      <div class="articleList_label">标题</div>
      <i-input icon="ios-search" placeholder="请输入..." style="width: 200px"></i-input>
    </div>
    <div class="articleList_flex_co">
      <div class="articleList_detail" v-for="(item, index) in articleList" :key="index">
        <div>
          <p class="articleList_title text_left">博客的标题</p>
          <p class="articleList_content text_left">博客的概述内容</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [
        {
          name: "王小明",
          age: 18,
          address: "北京市朝阳区芍药居"
        },
        {
          name: "张小刚",
          age: 25,
          address: "北京市海淀区西二旗"
        },
        {
          name: "李小红",
          age: 30,
          address: "上海市浦东新区世纪大道"
        },
        {
          name: "周小伟",
          age: 26,
          address: "深圳市南山区深南大道"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.articleList_flex_co {
  display: flex;
  flex-direction: column;
}
.articleList_centent {
  width: 100%;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
}
.articleList_label {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.articleList_detail {
  margin: 1rem;
  padding: 1rem;
  background: #515a6e85;
  border-radius: 0.5rem;
  display: flex;
}
.text_left {
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
</style>
