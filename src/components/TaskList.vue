<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h4 class="ma-3">Lista de tareas</h4>
        </v-flex>
        <v-flex xs12>
            <v-list dense>
                <task-list-item v-for="(task,index) in tasks" :key="index" :task="task" :id="index"></task-list-item>
            </v-list>
        </v-flex>
    </v-layout>
</template>

<script>
    import TaskListItem from './TaskListItem'

    export default {
        name: "TaskList",
        props: {
            tasks: Array
        },
        components: {
            TaskListItem
        }
    }
</script>

<style scoped>

</style>