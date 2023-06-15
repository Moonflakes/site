<template>
  <slot name="title"/>
  <p>
    De {{ formattedDateFrom }} à {{ formattedDateTo }}, à
    <b class="htw-text-primary-500">{{ city }}</b>
  </p>
  <slot name="description"/>
</template>

<script lang="ts" src="./school.ts"/>
