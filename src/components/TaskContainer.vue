<template>
    <div>
    <h3>Gestion de Tareas</h3>
    <task-new v-on:newTask="addTask"></task-new>
    </div>
</template>

<script>
    import TaskNew from './TaskNew'
    export default {
        name: "TaskContainer",
        data: function(){
          return {
              tasks: []
          }
        },
        components: {
            TaskNew
        },
        methods: {
            addTask: function(task){
                this.tasks.push(task)
            }
        }
    }
</script>

<style scoped>

</style>