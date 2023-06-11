<script setup>
import SchoolItem from './School.vue'
</script>
<script>
export default {
  // eslint-disable-next-line comma-dangle
  name: 'SchoolStory',
}
</script>
<template>
  <Story
    title="Formations"
    group="top1"
    icon="mdi:school"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="42">
      <SchoolItem
        :city="'Paris'"
        :date-from="'11/01/2017'"
        :date-to="'11/01/2021'"
      >
        <template #title>
          <h2 class="primaryColor">Architecte en technologie numérique</h2>
        </template>
        <template #description>
          <p>
            Niveau 14 (junior)<br />
            Projet portant sur le développement d'un site web en PHP avec BDD
            MySQL<br />
            Projet de reproduction d'une application web de streaming en React
          </p>
        </template>
      </SchoolItem>
    </Variant>
    <Variant title="Université de savoie">
      <SchoolItem
        :city="'Chambéry'"
        :date-from="'09/01/2011'"
        :date-to="'09/01/2013'"
      >
        <template #title>
          <h2 class="primaryColor">
            Master de psychologie spécialisé en neuropsychologie
          </h2>
        </template>
        <template #description>
          <p>Mention bien</p>
        </template>
      </SchoolItem>
    </Variant>
  </Story>
</template>
<style src="./global.scss">
</style>
