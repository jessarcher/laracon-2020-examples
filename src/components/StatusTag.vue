<template>
  <div class="px-3 rounded-full font-semibold text-sm capitalize leading-loose" :class="[textColorClass, bgColorClass]">
    {{ status }}
  </div>
</template>

<script>
const colors = {
  active: {
    text: 'text-green-900',
    bg: 'bg-green-200'
  },

  inactive: {
    text: 'text-red-900',
    bg: 'bg-red-200'
  }
}

export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ['active', 'inactive'].includes(value)
    }
  },

  computed: {
    textColorClass () {
      return colors[this.status].text
    },

    bgColorClass () {
      return colors[this.status].bg
    }
  }
}
</script>
