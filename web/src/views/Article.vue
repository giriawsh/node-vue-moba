<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Menu text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <div class="text-grey fs-xs">
        2019-06-19
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg">

    </div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu">
        </i>
        <strong class="text-blue fs-lg ml-2">相关咨询</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link class="py-2" v-for="item in model.related" tag="div" :key="item._id" :to="`/articles/${item._id}`">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    id: {required: true},
  },
  data() {
    return {
      model: {}
    }
  },
  watch:{
    // id: 'fetch',//id变化时调用fetch
    id() {
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";

.page-article {
  .icon-Menu{
    font-size: 1.692rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }

    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>