<template>
  <e-app>
    <e-bar app depressed fixed>
      <e-spacer></e-spacer>
      <nav>
        <e-button v-for="(link, i) in navItems" small width="115" text :key="i" :color="link.active ? 'primary' : 'grey'"
          hover-color="primary" :to="'#' + link.to">
          {{ link.text }}
        </e-button>
      </nav>
      <e-drawer :model-value="false"></e-drawer>
      <e-spacer></e-spacer>

      <e-button color="grey" text small hover-color="primary">
        esp
      </e-button>
      <e-button color="primary" text small hover-color="primary">
        eng
      </e-button>
    </e-bar>

    <EMain>
      <EContainer class="e-container--fluid pa-0">
        <NuxtPage />
      </EContainer>
    </EMain>
  </e-app>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { navItems as links } from "./constants";
const sections = ref<NodeListOf<HTMLElement>>();
const navItems = ref([...links]);

const callback = (entries: any[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.value.forEach((item) => {
        if (item.to == entry.target.id) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    }
  });
};

const observer = () => new IntersectionObserver(callback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
});

onMounted(() => {
  sections.value = document.querySelectorAll("section");
  sections.value.forEach((section) => {
    observer().observe(section);
  });
});

onUnmounted(() => {
  observer().disconnect();
});

</script>
<style lang="scss" src="./default.style.scss"></style>
