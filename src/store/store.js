import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 控制是否展示一级侧边栏
        showSidebar: 1,
        // 控制是否展开二级侧边栏
        openDBList: 1,
        // 控制是否显示二级侧边栏和选项卡
        showDBList: 1,
        // 右侧内容区域的纵向滚动条是否有显示。0：不显示，1：显示
        isMainYScroll: 0,
        // 右侧内容区域的横向滚动条是否有显示。0：不显示，1：显示
        isMainXScroll: 0,
        // 当前选中数据库的id
        dbConfigId: localStorage.currentDbConfigId,
        // 当前选中数据库的ip地址
        dbIp: localStorage.currentDbIp,
        // 当前选中数据库的标签名
        dbAlias: localStorage.currentDbAlias,
        // 当前选中数据库胡监控状态
        monitorStatus: localStorage.monitorStatus,
        // 判断选中的数据库是否发生了改变
        dbMessUpdate: false,
        // oracle10g数据库去掉cpu模块,10g为10，其他均为1
        dbVersion: localStorage.dbVersion,
        // 当前用户权限
        userPermission: '',
        loading: 0,
        // 项目是否使用滚动条插件（ie、chrome用自带的ccs样式修改滚动条。firefox无法用css修改，需要用到插件。）
        useScrollbarPlugin: 1
    },
    mutations: {
        changeSideBarShow: function(state, value) {
            state.showSidebar = value;
        },
        changeDBListOpen: function(state, value) {
            state.openDBList = value;
        },
        changeDBListShow: function(state, value) {
            state.showDBList = value;
        },
        setMainYScroll: function (state, value) {
            state.isMainYScroll = value;
        },
        setMainXScroll: function (state, value) {
            state.isMainXScroll = value;
        },
        changeDbConfigId: function (state, value) {
            localStorage.currentDbConfigId = value;
            state.dbConfigId = value;
        },
        changeDbIp: function (state, value) {
            localStorage.currentDbIp = value;
            state.dbIp = value;
        },
        changeDbAlias: function (state, value) {
            localStorage.currentDbAlias = value;
            state.dbAlias = value;
        },
        changemonitorStatus: function (state, value) {
            localStorage.monitorStatus = value;
            state.monitorStatus = value;
            console.log(localStorage.monitorStatus);
        },
        changeDbMessUpdate: function(state) {
            state.dbMessUpdate = !state.dbMessUpdate;
        },
        refreshUserPermission: function (state, value) {
            state.userPermission = value;
        },
        changeLoadingStatus: function(state, value) {
            state.loading += value;
        },
        changeDbVersion: function(state, value) {
            localStorage.dbVersion = value;
            state.dbVersion = value;
        },
        changeUseScrollbarPlugin: function(state, value) {
            state.useScrollbarPlugin = value;
        }
    }
});

export default store;
