<template>
  <div class="footers">
    <ul>
      <a href="/pages/counter/main">
        <span>首页</span>
      </a>
      <a href="/pages/index/main">
        <span>查询</span>
      </a>
      <a href="/pages/logs/main">
        <span>团队</span>
      </a>
      <a href="/pages/counter/main">
        <span>我的</span>
      </a>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style lang="less">
  .footers {
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #86e2db;
    ul{
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items:center;
      li{
        display: flex;
        height: 1rem;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        flex-wrap: wrap;
        width: 1rem;
      }
    }
  }
</style>
