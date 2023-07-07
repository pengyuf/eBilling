<template>
    <div class="add-kind-box">
        <van-nav-bar title="添加类别" left-arrow right-text="完成" @click-left="navBack" @click-right="addKinds" />
        <div class="form-box">
            <div class="iconfont icon-zaocan1 active-icon"></div>
            <div class="input-wrap">
                <input />
            </div>
        </div>
        <div class="kind-box"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navBack = () => {
    router.back()
}

const addKinds = () => {

}

</script>
<style scoped lang="scss">
.add-kind-box{
    padding: 0 10px;
}
.form-box {
    display: flex;
    align-items: center;
    padding: 20px 0;
    .active-icon{
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
            padding:10px;
        }
    }
}
</style>