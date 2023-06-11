<script lang="ts" src="./profile.ts" />

<template>
  <div class="container" v-show="show">
    <div class="item">
      <img :src="image" alt="Fabien" title="Fabien" />
    </div>
    <div class="item col">
      <div class="item name">{{ name }}</div>
      <div class="item job">{{ job }}</div>
    </div>
  </div>
</template>
<style src="./profile.scss"/>
