<template>
  <div class="border bg-white rounded shadow-md overflow-hidden">
    <table class="w-full">
      <thead class="bg-gray-100">
        <tr>
          <DataTableHeading
            v-for="column in columns"
            :key="column.name"
            v-bind="column"
            :sort="sort"
            @sort="$emit('sort', $event)"
          >
            {{ column.label }}
          </DataTableHeading>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <slot v-for="(column, i) in columns" :name="`column-wrapper.${column.name}`">
            <DataTableCell :key="i" v-bind="column">
              <slot
                :name="`column-${column.name}`"
                :value="row[column.name]"
                :row="row"
                :column="column"
              >
                {{ row[column.name] }}
              </slot>
            </DataTableCell>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataTableHeading from './DataTableHeading'
import DataTableCell from './DataTableCell'

export default {
  components: {
    DataTableHeading,
    DataTableCell
  },

  props: {
    columns: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    },

    sort: {
      type: String,
      default: ''
    }
  }
}
</script>
