<template>
    <div>
        <h4>Lista de tareas</h4>
        <ul>
            <task-list-item v-for="(task,index) in tasks" :key="index" :task="task" :id="index"></task-list-item>
        </ul>
    </div>
</template>

<script>
    import TaskListItem from './TaskListItem'

    export default {
        name: "TaskList",
        props: {
            tasks: Array
        },
        components:{
            TaskListItem
        }
    }
</script>

<style scoped>

</style>