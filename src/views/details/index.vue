<template>
  <div class="detail-wrap">
    <div class="header-wrap">
      <div class="title-box">个人账本</div>
      <div class="stat-box">
        <div class="item">
          <div>2013年</div>
          <div>7月</div>
        </div>
        <div class="item">
          <div>支出</div>
          <div>5000.00</div>
        </div>
        <div class="item">
          <div>收入</div>
          <div>8545.00</div>
        </div>
        <div class="item">
          <div>预算</div>
          <div>10000.00</div>
        </div>
      </div>
    </div>
    <div class="list-wrap"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'

onMounted(() => {

})



</script>
<style scoped lang="scss">
.detail-wrap {
  padding: 10px;

  .header-wrap {
    background: $--eb-color-primary;
    color: $--eb-color-white;
    padding: 10px;
    border-radius: 4px;

    .title-box {
      text-align: center;
      margin-bottom: 20px;
    }

    .stat-box {
      display: flex;
      margin-bottom: 20px;

      .item {
        flex: 1;
        text-align: center;
      }
    }
  }

  .list-wrap {}
}</style>