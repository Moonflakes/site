<script setup>
import InternshipItem from './internship/Internship.vue'
import internships from './internships.json'
</script>
<template>
  <Story title="Stages" group="top2" icon="mdi:briefcase-clock">
    <Variant
      v-for="internship in internships"
      :key="internship.id"
      :title="internship.business.name"
    >
      <InternshipItem
        :city="internship.city"
        :date-from="internship.dateFrom"
        :date-to="internship.dateTo"
        :business="internship.business"
      >
        <template #title>
          {{ internship.job }}
        </template>
        <template #activity>
          {{ internship.business.activity }}
        </template>
      </InternshipItem>
    </Variant>
    <Variant title="test">
      <h4>Test</h4>
    </Variant>
  </Story>
</template>
