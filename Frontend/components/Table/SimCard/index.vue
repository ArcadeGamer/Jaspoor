<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>iccid</th>
        <th>Rate Plan</th>
        <th>Usage (%)</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <TableSimCardColumn v-for="simCard in simCards" :sim-card="simCard"></TableSimCardColumn>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import type { SimCard } from '~/entities/SimCard';

  // TODO : This Table should be it's own generic component
  const props = defineProps<{
    simCards: SimCard[];
  }>()
</script>