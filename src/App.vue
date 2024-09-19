<script>
import { defineComponent } from 'vue'
import MenuHome from './components/MenuHome.vue'
import MainPage from './pages/MainPage.vue'

export default defineComponent({
  components: {
    MenuHome,
    MainPage
  }
})
</script>

<template>
  <header>
    <MenuHome />
  </header>
  <main>
    <MainPage />
  </main>
</template>

<style scoped>
template {
  display: flex;
}
</style>
