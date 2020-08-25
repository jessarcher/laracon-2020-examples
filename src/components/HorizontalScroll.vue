<template>
  <div ref="container" class="overflow-x-scroll overflow-y-none">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.container.addEventListener('wheel', event => {
      // Preventing scrolling is pretty shady - use with care! And remember
      // that if this component is used on a page with vertical scrolling, and
      // the cursor happens falls over one of these bad boys, it will start
      // scrolling this component sideways instead!
      event.preventDefault()
      // Translate X and Y scrolling into horizontal movement
      // We need to reimplement X movement because we're prevent the default scrolling above
      const delta = Math.max(-1, Math.min(1, event.deltaY + event.deltaX)) * -1
      this.$refs.container.scrollLeft -= delta * 60
    }, false)
  }
}
</script>
