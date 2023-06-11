<script lang="ts" src="./internship.ts" />

<template>
  <slot name="title"/>
  <h5>
    chez <span class="primaryColor">{{ business.name }}</span>
  </h5>
  <h5>
    De {{ formattedDateFrom }} à {{ formattedDateTo }}, à
    <span class="primaryColor">{{ city }}</span>
  </h5>

  <Business
    :number="business.number"
    :stack="business.stack"
    :team="business.team"
  >
    <slot name="activity"/>
  </Business>

  <p><span class="info">Mes Missions : </span></p>

  <p><span class="info">Skills : </span></p>

  <slot name="description"/>
</template>
<style src="../global.scss"/>
