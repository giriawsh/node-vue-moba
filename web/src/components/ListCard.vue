<template>
  <m-card icon="icon" title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: false}">
        <div class="nav-link">热门</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper>
        <swiper-slide v-for="n in 5" :key="n">
          <div v-for="n in 5" :key="n" class="py-2">
            <span>[新闻]</span>
            <span>|</span>
            <span>title</span>
            <span>date</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  name: "ListCard",
  props:{
    title: {type: String, required: true},
    icon: {type: String, required: true},
    categories: {type: Array, required: true}
  },
}
</script>

<style scoped>

</style>