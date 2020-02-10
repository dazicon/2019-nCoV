<template>
  <div class="dataTable">
    <!-- 表头 -->
    <div class="table_title">
      <ul>
        <li>地区</li>
        <li>确诊</li>
        <li>死亡</li>
        <li>治愈</li>
      </ul>
    </div>
    <van-collapse v-model="activeNames" v-for="(item, index) in dataArray" :key="index">
      <van-collapse-item :name="item.provinces">
        <div slot="title" class="table_item">
          <ul @click="changeArrow(item.provinces)">
            <li><van-icon :name="item.arrow" style="margin-right: .08rem;" />{{item.provinces}}</li>
            <li>{{item.confirmNum}}</li>
            <li>{{item.deathNum}}</li>
            <li>{{item.cureNum}}</li>
          </ul>
        </div>
        内容
      </van-collapse-item>
      <!-- <van-collapse-item name="2">
        <div slot="title" class="table_item">
          <ul @click="changeArrow">
            <li><van-icon :name="arrow" style="margin-right: .08rem;" />浙江</li>
            <li>1120</li>
            <li>1</li>
            <li>125</li>
          </ul>
        </div>
        内容
      </van-collapse-item> -->
    </van-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: [],
      // arrow: 'arrow',
      dataArray: [
        {
          provinces: '湖北',
          confirmNum: 27100,
          deathNum: 780,
          cureNum: 1440,
          arrow: 'arrow'
        },
        {
          provinces: '浙江',
          confirmNum: 1120,
          deathNum: 1,
          cureNum: 125,
          arrow: 'arrow'
        },
        {
          provinces: '广东',
          confirmNum: 1120,
          deathNum: 1,
          cureNum: 125,
          arrow: 'arrow'
        }
      ]
    }
  },
  methods: {
    changeArrow (provinces) {
      if (this.arrow === 'arrow') {
        this.arrow = 'arrow-down'
      } else if (this.arrow === 'arrow-down') {
        this.arrow = 'arrow'
      }
    }
  }
}
</script>

<style lang="scss">
  .table_title {
    margin: 0 auto;
    width: 6.8rem;
    height: .65rem;
    line-height: .65rem;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      box-sizing: content-box;
      li {
        height: .65rem;
        border-right: .005rem solid #fff;
        font-size: .3rem;
        font-weight: 700;
      }
      li:first-child {
        width: 40%;
        background-color: #aaaaff;
      }
      li:nth-child(2) {
        width: 20%;
        background-color: #f3bab0;
      }
      li:nth-child(3) {
        width: 20%;
        background-color: #7c818a;
      }
      li:last-child {
        width: 20%;
        background-color: #42B983;
      }
    }
  }
  .van-cell {
    margin: 0 auto;
    width: 6.8rem;
    height: .65rem;
    padding: 0;
  }
  .table_item {
    margin: 0 auto;
    width: 6.8rem;
    height: .65rem;
    line-height: .65rem;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      box-sizing: content-box;
      background-color: #f7f7f7;
      li {
        width: 20%;
        height: .65rem;
        border-right: .005rem solid #fff;
        font-size: .3rem;
        font-weight: 700;
      }
      li:first-child {

        width: 40%;
        text-align: left;
      }
    }
  }
</style>
