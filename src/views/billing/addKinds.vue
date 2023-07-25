<template>
    <div class="add-kind-box">
        <van-nav-bar title="添加类别" left-arrow right-text="完成" @click-left="navBack" @click-right="addKinds" />
        <div class="form-box">
            <div :class="['iconfont', activeIcon, 'active-icon']"></div>
            <div class="input-wrap">
                <input v-model="kindLabel" placeholder="输入类别名称(不超过4个字)" />
            </div>
        </div>
        <div class="kind-box">
            <div v-for="(item, index) in kindList" :key="index">
                <div class="title">{{ item.lable }}</div>
                <div class="icon-box">
                    <div v-for="(icon, index) in item.child" :key="index" :class="['iconfont', icon]"
                        @click="changeIcon(icon)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { showNotify } from 'vant';
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router'

const kindList = [
    { lable: '娱乐', child: ['icon-shicai-', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan'] },
    { lable: '交通', child: ['icon-shicai-', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan'] },
    { lable: '饮食', child: ['icon-shicai-', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan'] },
    { lable: '医教', child: ['icon-shicai-', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan'] },
    { lable: '购物', child: ['icon-shicai-', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan', 'icon-xiangyan'] },
]

const router = useRouter()

const activeIcon = ref('icon-zaocan1')
const kindLabel = ref('')

const changeIcon = (icon: string) => {
    activeIcon.value = icon
}

const navBack = () => {
    router.back()
}

const addKinds = () => {
    if (kindLabel.value.length > 4) {
        showNotify({ message: '类别名称不超过4个字' })
    }
}

</script>
<style scoped lang="scss">
.add-kind-box {
    padding: 0 10px;
}

.form-box {
    display: flex;
    align-items: center;
    padding: 20px 0;

    .active-icon {
        margin-right: 10px;
        font-size: 30px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background: $--eb-color-primary;
    }

    .input-wrap {
        flex: 1;
        border-bottom: 1px solid $--eb-color-primary;

        input {
            outline: none;
            border: none;
            padding: 10px;
        }
    }
}

.kind-box {
    $col-height: 20px;

    .title {
        text-align: center;
        margin-bottom: $col-height;
    }

    .icon-box {
        display: flex;
        flex-wrap: wrap;

        .iconfont {
            font-size: 30px;
            width: 20%;
            text-align: center;
            margin-bottom: $col-height;
        }
    }
}
</style>