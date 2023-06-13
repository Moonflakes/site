<script lang="ts" src="./profile.ts" />

<template>
  <div class="container">
    <div class="item">
      <img :src="image" :alt="name" :title="name" />
    </div>
    <div class="item col">
      <div class="item name">{{ name }}</div>
      <div class="item job">{{ job }}</div>
    </div>
  </div>
</template>
<style src="./profile.scss"/>
