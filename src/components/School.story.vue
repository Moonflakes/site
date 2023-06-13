<script setup>
import SchoolItem from './school/School.vue'
import schools from './school.json'
</script>
<template>
  <Story
    title="Formations"
    group="top1"
    icon="mdi:school"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant v-for="school in schools" :key="school.id" :title="school.name">
      <SchoolItem
        :city="school.city"
        :date-from="school.dateFrom"
        :date-to="school.dateTo"
      >
        <template #title>
          <h2 class="htw-text-primary-500">{{ school.degreeName }}</h2>
        </template>
        <template #description>
          <div v-for="p in school.description" :key="p.id">
            <span>{{ p }}</span
            ><br v-show="school.description.lenght > p.id" />
          </div>
        </template>
      </SchoolItem>
    </Variant>
  </Story>
</template>
