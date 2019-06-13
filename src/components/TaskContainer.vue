<template>
    <div>
    <h3>Gestion de Tareas</h3>
    <task-new></task-new>
    </div>
</template>

<script>
    import TaskNew from './TaskNew'
    export default {
        name: "TaskContainer",
        components: {
            TaskNew
        }
    }
</script>

<style scoped>

</style>