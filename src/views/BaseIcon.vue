<template>
  <div class="text-center">
    <div class="inline-block p-4 bg-white rounded shadow">
      <BaseIcon :name="icon" class="text-4xl text-green-500" />
    </div>
    <div class="mt-4">
      <select v-model="icon" class="p-2 border rounded">
        <option>user</option>
        <option>mail</option>
      </select>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },

  data () {
    return {
      icon: 'user'
    }
  }
}
</script>
