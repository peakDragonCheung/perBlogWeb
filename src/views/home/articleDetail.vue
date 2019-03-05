<template>
  <div>
    <mavon-editor v-model="value" defaultOpen="preview" :toolbarsFlag="false" :subfield="false" :boxShadow="false"/>
    <!-- <mavon-editor v-model="value"/> -->
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "# 这个是一个标题  <br>``` var oject = { name:'' } ```"
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
