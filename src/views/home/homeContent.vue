<template>
  <div>
    <div class="article_boxs">
      <div class="article_box" v-for="item in articles" :key="item.id" @click="seeDetail(item)">
        <div style="font-size: 0;">
          <img src="../../assets/bg.jpg" width="100px" height="100px" alt>
        </div>
        <div class="article_body">
          <p>{{item.title}}</p>
          <p>{{item.createTime}}-点赞数: {{item.praiseNum}}-点击数:{{item.cliNum}}-评论数-{{item.comments.length}}</p>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <Page :total="pageTotle" :page-size="5" @on-change="handPageChange"/>
  </div>
</template>
<script>
import { getArticles } from "@/api/article.js";
import { pariseTime } from "@/uitl/time.js";
export default {
  data() {
    return {
      articles: [],
      pageTotle: 0
    };
  },
  created() {
    this.queryArticles({
      pageNum: 1,
      pageSize: 5
    });
  },
  methods: {
    // 分页获取文章
    handPageChange(page) {
      this.queryArticles({
        pageNum: page,
        pageSize: 5
      });
    },
    // 获取文章内容
    queryArticles(params) {
      getArticles(params).then(res => {
        if (res.data.statue) {
          this.articles = res.data.data.list;
          this.pageTotle = res.data.data.totle;
          this.articles.forEach(ele => {
            ele.createTime = pariseTime(ele.createTime);
          });
        }
      });
    },
    // 查看详情
    seeDetail(item) {
      this.$router.push({
        name: "articleDetail",
        params: {
          article: item
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.article_boxs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.article_box {
  background: #f6f6f6;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
}
.article_body p {
  text-align: left;
}
.article_body {
  margin-left: 0.5rem;
}
</style>
