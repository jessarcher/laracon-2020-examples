<template>
  <component
    :is="iconComponent"
    class="inline-block stroke-current"
    style="height: 1em; width: 1em; vertical-align: -0.125em;"
    role="img"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    iconComponent () {
      const name = this.name // Trigger a dependency for change detection
      return defineAsyncComponent(() => import(
        /* webpackChunkName: "icon-[request]" */
        '@/assets/icons/' + name + '.svg'
      ))
    }
  }
}
</script>
