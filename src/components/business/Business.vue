<script lang="ts" src="./business.ts" />

<template>
  <div>
    <span class="info">Équipe : </span>
    <button @click="switchMate('principal')">Principale</button>
    <button @click="switchMate('all')">Tous</button>
    <div class="profiles-container">
      <Profile
        v-for="mate in team"
        :key="mate.id"
        :mate="mate"
        v-show="isMateShown(mate.tag)"
      />
    </div>
  </div>

  <p>
    <span class="info">Taille : </span>
    <span>{{ number }}</span>
  </p>

  <p>
    <span class="info">Activité : </span>
    <span><slot /></span>
  </p>

  <p>
    <span class="info">Stack : </span>
    <ChipItem v-for="techno in stack" :key="techno.id" :chipName="techno" />
  </p>
</template>

<style src="../global.scss"/>
