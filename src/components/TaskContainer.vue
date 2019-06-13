<template>
    <div>
        <h3>Gestion de Tareas</h3>
        <task-new v-on:newTask="addTask"/>
        <task-list/>
    </div>
</template>

<script>
    import TaskNew from './TaskNew'
    import TaskList from './TaskList'

    export default {
        name: "TaskContainer",
        data: function () {
            return {
                tasks: []
            }
        },
        components: {
            TaskNew, TaskList
        },
        methods: {
            addTask: function (task) {
                this.tasks.push(task)
            }
        }
    }
</script>

<style scoped>

</style>