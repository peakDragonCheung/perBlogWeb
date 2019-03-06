import request from "../uitl/request.js";

export function getArticleById(data) {
  return request({
    url: "/getArticleById",
    method: "post",
    data
  });
}
export function getArticles(data) {
  return request({
    url: "/getArticles",
    method: "post",
    data
  });
}
export function insertArticles(data) {
  return request({
    url: "/insertArticle",
    method: "post",
    data
  });
}
