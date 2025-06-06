<template>
    <TableSimCard :sim-cards="simCards">
    </TableSimCard>
</template>

<script setup lang="ts">
    import { simCardApi } from '~/entities/SimCard';
    const simCards = await simCardApi.getSimCards();
</script>