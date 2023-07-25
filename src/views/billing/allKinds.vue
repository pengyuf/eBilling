<template>
    <div>
        <van-nav-bar title="全部类别" left-arrow right-text="添加" @click-left="navBack" @click-right="toAddKinds" />
        <div class="body-box">
            <div class="side-box">
                <div :class="['side-item', { active: activeSide == item.value }]" v-for="item in sideList" :key="item.value"
                    @click="changeSide(item.value)">{{ item.label }}</div>
            </div>
            <div class="content-box">
                <div class="title-box">
                    <div class="kind-col">类别</div>
                    <div class="use-col">常用</div>
                </div>
                <div class="content-item" v-for="(item, index) in contentList" :key="index">
                    <div class="title">
                        <div :class="['iconfont', item.icon]"></div>
                        <div>{{ item.label }}</div>
                    </div>
                    <div class="iconfont icon-xingxing used"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router'

const sideList = [
    { label: '常用', value: 'side1' },
    { label: '娱乐', value: 'side2' },
    { label: '交通', value: 'side3' },
    { label: '购物', value: 'side4' },
    { label: '餐饮', value: 'side5' },
    { label: '医教', value: 'side6' },
    { label: '居家', value: 'side7' },
    { label: '投资', value: 'side8' },
    { label: '人亲', value: 'side9' },
    { label: '生意', value: 'side10' },
]

const contentList = [
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
    { label: '测试', value: 'tail', icon: 'icon-tielu' },
]

const router = useRouter()


const activeSide = ref('side1')

const changeSide = (value: string) => {
    activeSide.value = value
}

const navBack = () => {
    router.back()
}

const toAddKinds = () => {
    router.push('/addKinds')
}
</script>
<style scoped lang="scss">
$side-height: 50px;

.body-box {
    display: flex;

    .side-box {
        flex-shrink: 0;
        width: 30%;
        display: flex;
        flex-direction: column;

        .side-item {
            height: $side-height;
            line-height: $side-height;
            text-align: center;
            background: $--eb-color-grey-2;

            &.active {
                color: $--eb-color-primary;
                background: $--eb-color-white;
            }
        }
    }

    .content-box {
        flex: 1;

        .title-box {
            height: $side-height;
            line-height: $side-height;
            display: flex;

            .kind-col {
                width: 60%;
                text-align: center;
            }

            .use-col {
                flex: 1;
                text-align: center;
            }
        }

        .content-item{
            display: flex;
            align-items: center;
            justify-content:space-between;
            height: $side-height;
            line-height: $side-height;
            .title{
                display: flex;
                align-items: center;
                width: 60%;
                justify-content: center;
            }
            .used{
                flex: 1;
                text-align: center;
            }
        }
    }
}
</style>