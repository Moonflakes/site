<template>
  <h2>
    <strong><slot name="title" /></strong>
  </h2>
  <h5>
    chez <strong>{{ business.name }}</strong>
  </h5>
  <h5>
    De {{ formattedDateFrom }} à {{ formattedDateTo }}, à
    <strong>{{ city }}</strong>
  </h5>

  <Business
    :number="business.number"
    :stack="business.stack"
    :team="business.team"
  >
    <slot name="activity" />
  </Business>

  <p><span class="info">Mes Missions : </span></p>

  <p><span class="info">Skills : </span></p>

  <slot name="description" />
</template>

<script lang="ts" src="./internship.ts" />
<style src="../global.scss"/>
