<template>
  <div class="px-3 rounded-full font-semibold text-sm capitalize leading-loose" :class="colorClasses">
    {{ status }}
  </div>
</template>

<script>
const colors = {
  active: 'text-green-900 bg-green-200',
  inactive: 'text-red-900 bg-red-200',
}

export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => Object.keys(colors).includes(value),
    }
  },

  computed: {
    colorClasses () {
      return colors[this.status]
    },
  }
}
</script>
