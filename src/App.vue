<template>
  <div id="app">
    <task-container />
  </div>
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
