<template>
    <div>
        <router-view></router-view>
        <div class="nav-box">
            <div v-for="(nav, index) in navList" :key="index" :class="['item', { active: nav.path == activeNav }]"
                @click="changeNav(nav.path)">
                <div v-if="nav.direct == 'left'">
                    <div :class="['iconfont', nav.icon, 'icon']"></div>
                    <div class="label">{{ nav.label }}</div>
                </div>
                <div v-if="nav.direct == 'center'">
                    <div :class="['iconfont', nav.icon, 'icon', 'billing-icon']"></div>
                </div>
                <div v-if="nav.direct == 'right'">
                    <div :class="['iconfont', nav.icon, 'icon']"></div>
                    <div class="label">{{ nav.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed, watch, watchEffect } from 'vue'
import { NavType } from '@/types'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navList: NavType[] = [
    { label: '明细', path: '/details', icon: 'icon-nav-details', direct: 'left' },
    { label: '图表', path: '/charts', icon: 'icon-nav-charts', direct: 'left' },
    { label: '记账', path: '/billing', icon: 'icon-add', direct: 'center' },
    { label: '发现', path: '/finds', icon: 'icon-nav-finds', direct: 'right' },
    { label: '我的', path: '/myself', icon: 'icon-nav-myself', direct: 'right' },
]

const activeNav = ref('/details')

watchEffect(
    () => {
        activeNav.value = route.path
    }
)

const changeNav = (path: string) => {
    router.push(path)
}

</script>


<style scoped lang="scss">
.nav-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 50px;
    align-items: center;

    .item {
        &.active {
            color: $--eb-color-primary;
        }

        flex: 1;
        text-align: center;
        color: $--eb-color-block;

        .icon {
            font-size: 26px;
            margin-bottom: 4px;
        }

        .label {
            font-size: 10px;
        }

        .billing-icon {
            font-size: 70px;
            color: $--eb-color-primary;
            padding-bottom: 30px;
        }
    }
}
</style>