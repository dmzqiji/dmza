<template>
  <div class="focus">
    <p class="item">div聚焦变色</p>
    <div class="from-block item">
      <label class="label">
        <span>账号</span>
        <input class="txt" type="text">
      </label>
    </div>
    <div class="from-block item">
      <label class="label">
        <span>密码</span>
        <input class="txt" type="password">
      </label>
    </div>
  </div>
</template>


<script>

  export default {

  }

</script>


<style scoped>

  .focus {
    width: 300px;
    height: 370px;
    background-color: #fff;
    margin-top: -1px;
    text-align: center;
    padding-top: 80px;
    box-sizing: border-box;
  }
  .item {
    margin: 20px auto;
  }
  .from-block:focus-within {
    background: rgb(89, 89, 212, 0.5);
  }

</style>