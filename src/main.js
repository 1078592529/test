//入口文件
import Vue from "vue"


//1.导入路由的包
import VueRouter from "vue-router"

//2.安装路由
Vue.use(VueRouter)

//3.导入自己的router.js路由模块
import router from "./router.js"

// 4. 导入 vue-resource
import VueResource from 'vue-resource'
// 4.1 安装 vue-resource
Vue.use(VueResource)

//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';


//导入时间格式化插件
import moment from "moment" 

//定义全局过滤器
Vue.filter('dateFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})



//导入mint-ui组件
import {
    Header,Swipe,SwipeItem
} from "mint-ui"
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Header.name, Header)

//导入MUI的样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

//导入App组件
import app from "./App.vue"
import { IPv4 } from "ipaddr.js";

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router //4.挂载路由对象到VM实例对象中
})