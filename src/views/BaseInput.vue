<template>
  <div class="flex justify-center">
    <BaseInput
      v-model="email"
      name="email"
      type="email"
      label="Please enter your email address"
      icon="mail"
      placeholder="tricia.mcmillan@subetha.net"
    />
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
  components: {
    BaseInput
  },

  data () {
    return {
      email: '',
    }
  }
}
</script>
