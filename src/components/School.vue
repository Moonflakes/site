<script lang="ts" src="./school.ts">
export default {
  // eslint-disable-next-line comma-dangle
  name: 'SchoolItem',
}
</script>

<template>
    <slot name="title"></slot>
    <p>De {{formattedDateFrom}} à {{formattedDateTo}}, à <b class="primaryColor">{{city}}</b></p>
    <slot name="description"></slot>
</template>
