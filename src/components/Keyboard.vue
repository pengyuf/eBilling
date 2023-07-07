<template>
    <div class="keyboard-wrapper">
        <div class="keyboard-box">
            <div class="key-box">
                <div v-for="(item, index) in keyList" :key="index" class="item" @click="onClickKeyboard(item)">
                    {{ item }}
                </div>
            </div>
            <div class="opt-box">
                <div class="iconfont icon-keyboard-del item cancel" @click="onClickKeyboard('cancel')"></div>
                <div class="item finish" @click="onClickKeyboard('finish')">完成</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { showNotify } from 'vant';

const keyList: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', '.']

const curData = ref('')

const emit = defineEmits(['changeAmount', 'finish'])

const onClickKeyboard = (data: string) => {
    if (data == 'cancel') {
        curData.value = curData.value.slice(0, curData.value.length - 1)
        emit('changeAmount', curData.value)
    } else if (data == 'finish') {
        const amount = Number(curData.value)
        if (isNaN(amount) || amount === 0) {
            showNotify({ message: '请输入合法的金额' })
        } else {
            emit('finish',amount)
        }
    } else {
        curData.value = curData.value + data
        emit('changeAmount', curData.value)
    }
}
</script>

<style scoped lang="scss">
$key-height: 50px;
$opt-height: 110px;
$key-radius: 8px;
$key-size: 20px;
$key-bg: $--eb-color-grey-2;

.keyboard-wrapper {
    background: $key-bg;
}

.keyboard-box {
    display: flex;
    padding: 10px;

    .key-box {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
            width: 32%;
            height: $key-height;
            line-height: $key-height;
            text-align: center;
            background: $--eb-color-white;
            margin-bottom: 10px;
            border-radius: $key-radius;
            font-size: $key-size;
            font-weight: bold;

            &:active {
                background: $key-bg;
            }
        }
    }

    .opt-box {
        width: 24%;
        margin-left: 10px;

        .item {
            height: $opt-height;
            line-height: $opt-height;
            text-align: center;
            margin-bottom: 10px;
            border-radius: $key-radius;
            font-size: $key-size;
            font-weight: bold;

            &:last-child {
                margin-bottom: 0px;
            }

            &:active {
                background: $key-bg;
            }
        }

        .cancel {
            background: $--eb-color-white;
        }

        .finish {
            background: $--eb-color-primary;
            color: $--eb-color-white;
        }
    }
}
</style>