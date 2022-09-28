<template>
  <router-view :key="key" />
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Demo from "@cp/Demo.vue";

const router = useRouter();
router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);
});

const route = useRoute();
const key = computed(() =>
  route.name ? String(route.name) + new Date() : String(route.path) + new Date()
);

;
</script>
