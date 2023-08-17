<template>
  <div class="employee-card flex py-3 gap-x-3 border-t-2 w-full justify-between">
    <img
      src=""
      alt=""
      class="employee-img border-2 w-14 h-14 aspect-square rounded-[50%]"
    >
    <div class="employee-bio basis-full flex gap-1 flex-col">
      <h3 class="employee-name">{{props.employee.name}}</h3>
      <span class="employee-position text-sm">{{props.employee.position}}</span>
      <span class="employee-gender text-sm">{{props.employee.gender}}</span>
    </div>
    <p class="employee-salary basis-full self-end font-bold text-green-950 text-sm">&#8358;{{ props.employee.salary }}</p>
  </div>
</template>

<script setup lang="ts">
import EmployeeType from '~/types/EmployeeType';

const props = defineProps<{
  employee: EmployeeType
}>()
</script>

<style lang="scss" scoped>
</style>
