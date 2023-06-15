<template>
  <div class="container">
    <div class="ma-6">
      <img :src="image" :alt="name" :title="name" />
    </div>
    <div class="ma-6 col">
      <div class="ma-6 name">{{ name }}</div>
      <div class="ma-6 job">{{ job }}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./profile.ts" />
<style src="./profile.scss"/>
