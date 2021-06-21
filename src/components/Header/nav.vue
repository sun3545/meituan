<template>
  <div class="nav-container">
    <ul class="nav">
      <li
        v-for="(item, i) in list"
        :key="i"
        :class="{ bd: item.name === '商家中心', list: item.name !== '手机App' }"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
        <dl v-if="item.children">
          <dd v-for="(child, i) in item.children" :key="i">
            <router-link :to="child.path">{{ child.name }}</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link to="/">网站导航</router-link>
        <div class="subContainer">
          <dl
            v-for="(subItem, index) in subList"
            :key="index"
            :class="[
              subItem.name === '酒店旅游' ? 'hotel' : '',
              subItem.name === '吃美食' ? 'food' : '',
              subItem.name === '看电影' ? 'movie' : '',
            ]"
          >
            <dt>{{ subItem.name }}</dt>
            <dd v-for="(ele, j) in subItem.children" :key="j">
              {{ ele.name }}
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="民宿app"
                alt="民宿app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              />
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          path: '/',
          name: '我的美团',
          children: [
            { path: '/', name: '我的订单' },
            { path: '/', name: '我的收藏' },
            { path: '/', name: '抵用券' },
            { path: '/', name: '账户设置' }
          ]
        },
        {
          path: '/',
          name: '手机App'
        },
        {
          path: '/',
          name: '商家中心',
          children: [
            { path: '/', name: '美团餐饮商户中心' },
            { path: '/', name: '登录商家中心' },
            { path: '/', name: '美团智能收银' },
            { path: '/', name: '我想合作' },
            { path: '/', name: '手机免费开店' },
            { path: '/', name: '到店综合业务招募' },
            { path: '/', name: '餐饮合作商招募' },
            { path: '/', name: '商家申请开票' },
            { path: '/', name: '免费合作美团排队' }
          ]
        }
      ],
      subList: [
        {
          path: '/',
          name: '酒店旅游',
          children: [
            { path: '/', name: '国际机票' },
            { path: '/', name: '火车票' },
            { path: '/', name: '民宿' },
            { path: '/', name: '经济型酒店' },
            { path: '/', name: '主题酒店' },
            { path: '/', name: '商务酒店' },
            { path: '/', name: '公寓' },
            { path: '/', name: '豪华酒店' },
            { path: '/', name: '客栈' },
            { path: '/', name: '青年旅社' },
            { path: '/', name: '度假酒店' },
            { path: '/', name: '别墅' },
            { path: '/', name: '农家院' }
          ]
        },
        {
          path: '/',
          name: '吃美食',
          children: [
            { path: '/', name: '烤鱼' },
            { path: '/', name: '特色小吃' },
            { path: '/', name: '烧烤' },
            { path: '/', name: '自助餐' },
            { path: '/', name: '火锅' },
            { path: '/', name: '代金卷' }
          ]
        },
        {
          path: '/',
          name: '看电影',
          children: [
            { path: '/', name: ' 热映电影' },
            { path: '/', name: '热门影院' },
            { path: '/', name: '热映电影口碑榜' },
            { path: '/', name: '最受期待电影' },
            { path: '/', name: '国内票房榜' },
            { path: '/', name: '北美票房榜' },
            { path: '/', name: '电影排行榜' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
