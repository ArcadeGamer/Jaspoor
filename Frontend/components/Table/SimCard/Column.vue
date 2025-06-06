<template>
    <tr>
      <td>{{ simCard.id }}</td>
      <td>{{ simCard.iccid }}</td>
      <!-- todo: use real rate plan instead of id -->
      <td>{{ simCard.ratePlanId }}</td>
      <td>{{ simCard.dataUsage }}</td>
      <td>{{ simCard.status }}</td>
      <td>
        <button @click="() => updateSimCard()">
          <span>Change ratePlan</span>
        </button>
      </td>
    </tr>
</template>

<script setup lang="ts">
  import { simCardApi, type SimCard } from '~/entities/SimCard';

  const props = defineProps<{
    simCard: SimCard;
  }>();

  const updateSimCard = async () => {
    await simCardApi.updateSimCardRatePlan(props.simCard.id, props.simCard.ratePlanId++);
  }
</script>