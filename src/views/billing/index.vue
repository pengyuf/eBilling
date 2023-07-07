<template>
  <div>
    <div class="header-box">
      <div class="books">个人账本</div>
      <div class="tab-box">
        <div v-for="item in tabList" :key="item.value" class="tab-item" :class="{ active: item.value == activeTab }"
          @click="changeTab(item.value)">
          {{ item.label }}
        </div>
      </div>
      <div class="cancel" @click="onCancel">取消</div>
    </div>
    <div class="kind-box">
      <div v-for="item in activeKindList" :key="item.value" class="kind-item" @click="changeKind(item.value)">
        <div :class="['iconfont', item.icon, 'icon', { active: item.value == activeKind }]"></div>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>
    <div class="form-box">
      <div class="form-item">
        <div class="title">账户</div>
        <div class="content">现金</div>
      </div>
      <div class="form-item">
        <div class="title">成员</div>
        <div class="content">本人</div>
      </div>
      <div class="form-item">
        <div class="title">上传图片</div>
        <div class="content">现金</div>
      </div>
    </div>
    <div class="kewboard-box">
      <div class="input-box">
        <div class="remark">
          <input placeholder="点此输入备注" v-model="curRemark" />
        </div>
        <div class="value">{{ curAmount || '0.0' }}</div>
      </div>
      <div class="btn-box">
        <span class="item" @click="controlCalendar">{{ curTime }}</span>
      </div>
      <EBKeyboard @changeAmount="onChangeAmount" @finish="onFinish" />
    </div>
    <van-calendar v-model:show="showCalendar" @confirm="onConfirmCalendar" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'
import { useRouter } from 'vue-router'
import { expendKindList, incomeKindList } from '@/mock'
import EBKeyboard from '@/components/Keyboard.vue'

const tabList = [
  { label: '支出', value: 'expend' },
  { label: '收入', value: 'income' },
]

const router = useRouter()

const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;


const activeTab = ref('expend')
const activeKindList = ref(expendKindList)
const activeKind = ref('')
const curAmount = ref('')
const curRemark = ref('')
const showCalendar = ref(false)
const curTime = ref(formatDate(new Date()))


const changeTab = (value: string) => {
  activeTab.value = value
  if (value == 'income') {
    activeKindList.value = incomeKindList
  }
  if (value == 'expend') {
    activeKindList.value = expendKindList
  }
}

const changeKind = (value: string) => {
  activeKind.value = value
  if (value == 'all') {
    toAllKinds()
  }
}

const toAllKinds = () => {
  router.push('/allKinds')
}

const onCancel = () => {
  router.back()
}

const onChangeAmount = (data: string) => {
  // console.log('onChangeAmount', data)
  curAmount.value = data
}

const onFinish = (data: number) => {
  console.log('onFinish', data)
}

const controlCalendar = () => {
  showCalendar.value = !showCalendar.value
}

const onConfirmCalendar = (value: Date) => {
  showCalendar.value = false;
  curTime.value = formatDate(value);
};

</script>
<style scoped lang="scss">
$top-header: 50px;

.header-box {
  display: flex;
  height: $top-header;
  line-height: $top-header;
  justify-content: space-between;

  .books {
    flex-shrink: 0;
    width: 20%;
    text-align: center;
    color: $--eb-color-block;
  }

  .tab-box {
    width: 40%;
    position: relative;
    display: flex;
    justify-content: space-evenly;

    .tab-item {

      &.active {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 4px solid $--eb-color-primary;
      }
    }
  }

  .cancel {
    text-align: center;
    width: 20%;
    flex-shrink: 0;
    color: $--eb-color-grey;
  }
}

.kind-box {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  .kind-item {
    width: 20%;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      font-size: 30px;
      margin-bottom: 4px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
    }

    .active {
      background: $--eb-color-primary;
    }
  }
}

.form-box {
  margin-top: 20px;

  .form-item {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    height: 50px;

    .title {
      flex-shrink: 0;
      width: 20%;
      color: $--eb-color-block-6;
    }

    .content {
      color: $--eb-color-block;
    }
  }
}

.kewboard-box {
  .input-box {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    background: $--eb-color-grey-2;
    display: flex;
    justify-content: space-between;

    .remark {
      input {
        outline: none;
        border: none;
        background: transparent;
      }
    }

    .value {
      font-size: 20px;
    }
  }

  .btn-box {
    padding: 0 10px;
    background: $--eb-color-grey-2;

    .item {
      background: $--eb-color-white;
      padding: 8px 10px;
      border-radius: 14px;
    }
  }
}
</style>