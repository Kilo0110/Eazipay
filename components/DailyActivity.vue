<template>
  <div class="activity bg-white shadow-lg px-10 py-3 rounded-2xl">
    <table class="w-full text-sm">
      <thead>
        <tr class="text-left uppercase font-light">
          <th>{{ props.activity.cellOne }}</th>
          <th>Activity</th>
          <th>{{props.activity.cellThree}}</th>
          <th :class="props.activity.time ? '' : 'invisible pointer-events-none'">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="flex items-center gap-2">
            <img
              :src="props.activity.imgSrc ? props.activity.imgSrc : '/img/activity-image.png'"
              alt=""
            >
            {{props.activity.name}}
          </td>
          <td>
            {{props.activity.activity}}
          </td>
          <td>
            {{props.activity.cellThreeData}}
          </td>
          <td>
            {{props.activity.time}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Actvity from '~/types/ActivityType';

const props = defineProps<{
  activity: Actvity
}>()
</script>

<style lang="scss" scoped>
</style>
