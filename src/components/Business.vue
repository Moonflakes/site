<script lang="ts" src="./business.ts" />

<template>
    <div>
        <span class="info">Équipe : </span>
        <button @click="buttonFilter='principal'">Principale</button> <button @click="buttonFilter='all'">Tous</button>
        <div class="profils">
            <Profil v-for="item in team"
                :key="item.id"
                :image='item.image'
                :name='item.name'
                :job='item.job'
                :show='teamState(item.tag, buttonFilter)'/>
        </div>
    </div>

    <p><span class="info">Taille : </span>
    <span>{{number}}</span></p>

    <p><span class="info">Activité : </span>
    <slot name="activity"></slot></p>

    <p>
        <span class="info">Stack : </span>
        <ChipItem v-for="item in stack" :key="item.id" :chipName="item"/>
    </p>
</template>
<style src="./global.scss">
</style>
