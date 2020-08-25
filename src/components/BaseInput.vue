<template>
  <label>
    <div v-if="label" class="mb-2 text-gray-700 font-semibold">
      {{ label }}
    </div>
    <div class="relative">
      <div class="absolute left-0 ml-1 h-full w-10 flex items-center justify-center">
        <BaseIcon v-if="icon" :name="icon" class="text-gray-400" />
      </div>
      <input
        v-bind="{
          ...$attrs,
          value: modelValue,
          onInput: event => $emit('update:modelValue', event.target.value)
        }"
        class="p-3 border rounded text-gray-900"
        :class="{'pl-10': icon}"
      />
    </div>
  </label>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  inheritAttrs: false,

  components: {
    BaseIcon,
  },

  props: {
    modelValue: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: false,
    },

    icon: {
      type: String,
      required: false,
    }
  }
}
</script>
