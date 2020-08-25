<template>
  <td class="p-4 border-t text-gray-900" :class="[alignmentClass]">
    <slot />
  </td>
</template>

<script>
export default {
  props: {
    align: {
      default: 'left'
    }
  },

  computed: {
    alignmentClass () {
      if (this.align === 'center') {
	return 'text-center'
      }

      if (this.align === 'right') {
	return 'text-center'
      }

      return 'text-left'
    }
  }
}
</script>
