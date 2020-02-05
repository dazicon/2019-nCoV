<template>
  <div class="primary_title">
    <span class="primary_title_name"><i class="blue_mark"></i>{{primaryTitleName}}</span>
    <span class="title_remark">{{titleRemark}}</span>
  </div>
</template>

<script>
export default {
  name: 'primaryTitle',
  props: ['primaryTitleName', 'titleRemark'],
  // props: {
  //   primaryTitleName: String,
  //   titleRemark: String
  // },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .primary_title {
    // width: 100%;
    height: .9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    border-bottom: 1px solid #ebebeb;
    .blue_mark {
      display: inline-block;
      width: .08rem;
      height: .32rem;
      margin-right: .15rem;
      background-color: #4169e2;
    }
    .primary_title_name {
      display: inline-block;
      font-size: .34rem;
      font-weight: 500;
    }
    .title_remark {
      margin-left: 0;
      font-size: .24rem;
      color: #999;
    }
  }
</style>
