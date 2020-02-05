<template>
  <div class="home">
    <div class="banner">
      <!-- <img alt="2019-nCoV banner" src="../assets/images/banner.png"> -->
      <div class="view_count">{{viewCount}}人次已浏览</div>
    </div>
    <!-- 数据统计汇总 - 头部概览 -->
    <div class="map_top">
      <div class="map_top_title">
        <span>截至{{dateTime}}全国数据统计</span>
        <em><img alt="question" src="../assets/images/question.png">数据说明</em>
      </div>
      <!-- 数据 -->
      <div class="map_top_data">
        <div class="data_item">
          <span class="compare_yesterday">较昨日<span class="confirm_color">{{confirmChange}}</span></span>
          <span class="count_total confirm_color">{{confirmCount}}</span>
          <span class="count_type">确诊</span>
        </div>
        <div class="data_item">
          <span class="compare_yesterday">较昨日<span class="suspected_color">{{suspectedChange}}</span></span>
          <span class="count_total suspected_color">{{suspectedCount}}</span>
          <span class="count_type">疑似</span>
        </div>
        <div class="data_item">
          <span class="compare_yesterday">较昨日<span class="severe_color">{{severeChange}}</span></span>
          <span class="count_total severe_color">{{severeCount}}</span>
          <span class="count_type">重症</span>
        </div>
        <div class="data_item">
          <span class="compare_yesterday">较昨日<span class="death_color">{{deathChange}}</span></span>
          <span class="count_total death_color">{{deathCount}}</span>
          <span class="count_type">死亡</span>
        </div>
        <div class="data_item">
          <span class="compare_yesterday">较昨日<span class="cure_color">{{cureChange}}</span></span>
          <span class="count_total cure_color">{{cureCount}}</span>
          <span class="count_type">治愈</span>
        </div>
      </div>
      <!-- 病毒科普描述 -->
      <ul class="virus_describe">
        <li>病毒：新型冠状病毒 2019-nCoV</li>
        <li>传染源：新型冠状病毒感染的肺炎患者</li>
        <li>传播途径：经呼吸道飞沫传播，亦可通过接触传播，存在粪-口传播可能性</li>
        <li>易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病</li>
        <li>潜伏期：一般为 3～7 天，最长不超过 14 天，潜伏期内可能存在传染性，但无症状病例传染性较弱</li>
        <li>宿主：野生动物，可能为中华菊头蝠</li>
      </ul>
    </div>
    <!-- 门诊入口 按钮 -->
    <div class="outpatient_service">
      <div>全国发热门诊 ></div>
      <div>在线义诊 ></div>
    </div>
    <!-- 疫情地图 -->
    <div class="map">
      <primaryTitle :primaryTitleName="mapTitleName" :titleRemark="mapTitleRemark"></primaryTitle>
      <!-- 全国确诊病例地图显示 -->
      <chinaMap></chinaMap>
      <!-- 折线图-轮播 -->
      <lineSwiper></lineSwiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import primaryTitle from '../components/primaryTitle.vue'
import chinaMap from '../components/chinaMap.vue'
import lineSwiper from '../components/lineSwiper.vue'

export default {
  name: 'home',
  // props: ['primaryTitleName', 'titleRemark'],
  data () {
    return {
      viewCount: 888,
      dateTime: '2020-02-07 09:31',
      confirmChange: '+3151',
      confirmCount: '31211',
      suspectedChange: '+4833',
      suspectedCount: '26359',
      severeChange: '+962',
      severeCount: '4821',
      deathChange: '+73',
      deathCount: '637',
      cureChange: '+389',
      cureCount: '1542',
      mapTitleName: '疫情地图',
      mapTitleRemark: '数据来源：国家及各省市地区卫健委'
    }
  },
  components: {
    primaryTitle,
    chinaMap,
    lineSwiper
  }
}
</script>

<style scoped lang="scss">
  .home {
    width: 7.5rem;
    background-color: #f7f7f7;
  }
  .banner {
    margin: 0 auto;
    width: 100%;
    height: 2.5rem;
    /* border: 1px solid aliceblue;
    border-bottom: none;
    box-sizing: border-box; */
    background: url(//assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/kv.5d3a3a1d.png) no-repeat;
    background-size: cover;
  }
  /* .banner img {
    width: 7.5rem;
    height: 2.5rem;
    border: 1px solid aliceblue;
    box-sizing: content-box;
  } */
  .view_count {
    position: absolute;
    top: .1rem;
    right: 0;
    padding: 0 .16rem 0 .24rem;
    height: .48rem;
    line-height: .48rem;
    background-color: rgba(19,15,133,.6);
    color: #fff;
    font-size: .24rem;
    border-top-left-radius: .24rem;
    border-bottom-left-radius: .24rem;
  }
  .map_top {
    margin: .3rem auto 0;
    background-color: #FFFFFF;
  }
  .map_top_title {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.8rem;
    height: .7rem;
    span {
      font-size: .24rem;
    }
    em {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: .48rem;
      margin-right: -.35rem;
      padding: 0 .16rem;
      background-color: #f7f7f7;
      font-style: normal;
      font-size: .24rem;
      border-top-left-radius: .24rem;
      border-bottom-left-radius: .24rem;
      img {
        margin: 0 .08rem;
        width: .24rem;
        height: .24rem;
      }
    }
  }
  .map_top_data {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 94%;
    height: 1.5rem;
    border-bottom: 1px solid #e8e3e3;
    .data_item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-right: 1px solid #e8e3e3;
      border-image: -webkit-linear-gradient(-180deg, rgba(255,255,255,0.00) 0%,#e8e3e3 50%, rgba(255,255,255,0.00) 99%) 1 1 1 1;
      border-image: -moz-linear-gradient(-180deg, rgba(255,255,255,0.00) 0%,#e8e3e3 50%, rgba(255,255,255,0.00) 99%) 1 1 1 1;
      border-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%,#e8e3e3 50%, rgba(255,255,255,0.00) 99%) 1 1 1 1;

      .compare_yesterday {
        line-height: .3rem;
        font-size: .18rem;
      }
      .count_total {
        line-height: .5rem;
        font-size: .36rem;
        font-weight: bold;
      }
      .count_type {
        line-height: .3rem;
        font-size: .22rem;
        font-weight: bold;
      }
      .confirm_color {
        color: #f74c31;
      }
      .suspected_color {
        color: #f78207;
      }
      .severe_color {
        color: #a25a4e;
      }
      .death_color {
        color: #5d7092;
      }
      .cure_color {
        color: #28b7a3;
      }
    }
    .data_item:last-child {
      border-right: none;
    }
  }
  .virus_describe {
    margin: 0 auto;
    width: 6.8rem;
    padding: .3rem 0;
    text-align: left;
    li {
      margin: .08rem 0 0 .4rem;
      // width: 100%;
      list-style-type: square;
      line-height: .48rem;
      font-size: .3rem;
      // content: "\2022";
      // color: #f74c31;
    }
    // li:before{
    //   content: ".";
    //   color: #f74c31;
    //   font-size: 50px;
    //   line-height: .48rem;
    // }
  }
  .outpatient_service {
    margin: 0 auto;
    width: 100%;
    height: 1rem;
    padding: .1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 3.1rem;
      height: .72rem;
      line-height: .72rem;
      border-radius: .3rem;
      background-color: #ffffff;
      font-size: .26rem;
      color: #FFA500;
    }
    div:first-child {
      margin-right: .3rem;
    }
  }
  .map {
    width: 100%;
    background-color: #fff;
  }
</style>
