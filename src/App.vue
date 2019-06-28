<template>
  <v-app>
    <v-content class="content">
      <task-container />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TaskContainer from './components/TaskContainer'
export default {
  name: 'app',
  components: {
    TaskContainer
  }
}
</script>

<style>

</style>
