<template>
    <div>
        <h4>Lista de tareas</h4>
        <ul>
            <task-list-item v-for="(task,index) in tasks" :key="index" :task="task" :id="index" @delete-task="deleteTask"></task-list-item>
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
        },
        methods:{
            deleteTask(id){
                this.$emit('delete-task-from-list',id)
            }
        }
    }
</script>

<style scoped>

</style>