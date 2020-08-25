<template>
  <div class="relative w-full max-w-4xl mx-auto">
    <div class="absolute top-0 left-0 z-40 w-10 h-full bg-gradient-to-r from-gray-100"></div>
    <div class="absolute top-0 right-0 z-40 w-10 h-full bg-gradient-to-l from-gray-100"></div>

    <HorizontalScroll ref="scrollContainer" class="scrollbars-hidden" @mouseleave="centerCurrent({ behavior: 'smooth' })">
      <div class="py-6 flex items-center">
        <div class="w-10 flex-shrink-0">&nbsp;</div>
        <div class="py-2 px-6 bg-green-600 text-green-300 font-bold rounded-full whitespace-no-wrap">The Hitchhiker's Guide to the Galaxy</div>
        <div class="h-1 w-12 flex-shrink-0 bg-green-600"></div>
        <div class="py-2 px-6 bg-green-600 text-green-300 font-bold rounded-full whitespace-no-wrap">The Restaurant at the End of the Universe</div>
        <div class="h-1 w-12 flex-shrink-0 bg-green-600"></div>
        <div ref="current" class="py-2 px-6 bg-green-600 text-white font-bold rounded-full whitespace-no-wrap">Life, the Universe and Everything</div>
        <div class="h-1 w-12 flex-shrink-0 bg-gray-300"></div>
        <div class="py-2 px-6 bg-gray-300 text-gray-600 font-bold rounded-full whitespace-no-wrap">So Long, and Thanks for All the Fish</div>
        <div class="h-1 w-12 flex-shrink-0 bg-gray-300"></div>
        <div class="py-2 px-6 bg-gray-300 text-gray-600 font-bold rounded-full whitespace-no-wrap">Mostly Harmless</div>
        <div class="h-1 w-12 flex-shrink-0 bg-gray-300"></div>
        <div class="py-2 px-6 bg-gray-300 text-gray-600 font-bold rounded-full whitespace-no-wrap">And Another Thing...</div>
        <div class="w-10 flex-shrink-0">&nbsp;</div>
      </div>
    </HorizontalScroll>
  </div>
</template>

<script>
import HorizontalScroll from '@/components/HorizontalScroll.vue'

export default {
  components: {
    HorizontalScroll
  },

  mounted() {
    this.centerCurrent()
  },

  methods: {
    centerCurrent({ behavior = 'auto' } = {}) {
      const currentElementOffsetCenter = this.$refs.current.offsetLeft + this.$refs.current.clientWidth / 2
      const scrollContainerCenter = this.$refs.scrollContainer.$el.clientWidth / 2

      this.$refs.scrollContainer.$el.scroll({
        left: currentElementOffsetCenter - scrollContainerCenter,
        behavior
      })
    }
  }
}
</script>
