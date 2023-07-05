<template>
    <div>
        <router-view></router-view>
        <div class="nav-box">
            <div v-for="(nav, index) in navList" :key="index" class="item">
                <div :class="['iconfont', nav.icon]"></div>
                <div>{{ nav.label }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { NavType } from '@/types'

const navList: NavType[] = [
    { label: '明细', path: '/details', icon: 'icon-nav-details' },
    { label: '图表', path: '/charts', icon: 'icon-nav-charts' },
    { label: '记账', path: '/billing', icon: 'icon-add' },
    { label: '发现', path: '/finds', icon: 'icon-nav-finds' },
    { label: '我的', path: '/myself', icon: 'icon-nav-myself' },
]

</script>


<style scoped lang="scss">
.nav-box{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 50px;
    .item{
        flex: 1;
        text-align: center;
    }
}
</style>