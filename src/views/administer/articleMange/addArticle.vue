<template>
  <div>
    <div>标题
      <Input v-model="article.title" placeholder="Enter something..." clearable/>
    </div>
    <div>展示内容
      <Input v-model="article.shortContent" type="textarea" placeholder="Enter something..."/>
    </div>
    <div>实际内容
      <mavon-editor v-model="article.content"/>
    </div>
    <br>
    <br>
    <div>
      <Button @click="addArticle(article)" type="success" long>添加</Button>
    </div>
  </div>
</template>
<script>
import { insertArticles } from "@/api/article.js";
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
        shortContent: ""
      }
    };
  },
  methods: {
    addArticle(data) {
      insertArticles(data).then(res => {
        if (res.data.statue) {
          this.$Message.success("添加成功！");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
