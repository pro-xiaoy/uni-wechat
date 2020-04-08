<template>
  <view class="content">
    <view>
      <text class="title">{{title}}</text>
      <p>{{name}}</p>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello',
      name: '1111'
    }
  },
  onLoad () {
  },
  created () {
    var a = 1
    this.name = a
    console.log('222')
  },
  methods: {

  }
}
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
