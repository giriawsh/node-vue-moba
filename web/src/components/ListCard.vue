<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active === i}"
           v-for="(category, i) in categories" :key="i"
           @click="active = i">
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list"  @slidechange="()=> active = $refs.list.swiper.realIndex" autoHeight>
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  name: "ListCard",
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
    categories: {type: Array, required: true}
  },
  data() {
    return {
      active: 0
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
}
</script>

<style scoped>

</style>