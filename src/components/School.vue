<script lang="ts" src="./school.ts"/>

<template>
  <slot name="title"/>
  <p>
    De {{ formattedDateFrom }} à {{ formattedDateTo }}, à
    <b class="primaryColor">{{ city }}</b>
  </p>
  <slot name="description"/>
</template>
