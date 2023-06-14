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
          <div v-for="(description, index) in school.description" :key="index">
            <span>{{ description }}</span
            ><br v-show="school.description.lenght > index" />
          </div>
        </template>
      </SchoolItem>
    </Variant>
  </Story>
</template>
