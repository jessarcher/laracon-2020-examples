<template>
  <th class="px-4 py-2 uppercase text-sm tracking-wide font-medium text-gray-700" :class="[alignmentClass]">
    <template v-if="sortable">
      <button type="button" class="uppercase font-medium" @click="emitSortEvent">
        <slot />
        <template v-if="sort[0] === '-' && isActive">
          <svg class="ml-1 inline-block h-4" :class="isActive ? 'text-gray-600' : 'text-gray-400'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
          </svg>
        </template>

        <template v-else>
          <svg class="ml-1 inline-block h-4" :class="isActive ? 'text-gray-600' : 'text-gray-400'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
          </svg>
        </template>
      </button>
    </template>
    <template v-else>
      <slot />
    </template>
  </th>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },

    sortable: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      required: true
    },

    sort: {
      type: String,
      default: ''
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
    },

    sortColumnName () {
      return this.sort.replace(/^-/, '')
    },

    isActive () {
      return this.sortColumnName === this.name
    }
  },

  methods: {
    emitSortEvent () {
      this.$emit('sort', (this.isActive && this.sort[0] !== '-' ? '-' : '') + this.name)
    }
  }
}
</script>
