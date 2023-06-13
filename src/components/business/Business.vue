<script lang="ts" src="./business.ts" />

<template>
  <div>
    <span class="info">Équipe : </span>
    <button @click="switchMate('principal')">Principale</button>
    <button @click="switchMate('all')">Tous</button>
    <div class="profiles">
      <Profile
        v-for="mate in team"
        :key="mate.id"
        :image="mate.image"
        :name="mate.name"
        :job="mate.job"
        :mateIsShown="mateIsShown(mate.tag, buttonFilter)"
      />
    </div>
  </div>

  <p>
    <span class="info">Taille : </span>
    <span>{{ number }}</span>
  </p>

  <p>
    <span class="info">Activité : </span>
    <slot />
  </p>

  <p>
    <span class="info">Stack : </span>
    <ChipItem v-for="techno in stack" :key="techno.id" :chipName="techno" />
  </p>
</template>
<style src="../global.scss"/>
