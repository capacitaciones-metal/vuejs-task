<template>
    <div>
        <h3>Gestion de Tareas</h3>
        <task-new v-on:newTask="addTask"/>
        <task-list :tasks="getTasks"/>
    </div>
</template>

<script>
    import TaskNew from './TaskNew'
    import TaskList from './TaskList'
    import {mapGetters} from 'vuex'

    export default {
        name: "TaskContainer",
        created: function () {
            this.$bus.$on('delete-task', this.deleteTask)
        },
        computed: {
            ...mapGetters(['getTasks'])
        },
        components: {
            TaskNew, TaskList
        },
        methods: {
            addTask: function (task) {
                this.$store.commit("addTask", task)
            },
            deleteTask: function (id) {
                this.$store.commit("deleteTask", id)
            }
        }
    }
</script>

<style scoped>

</style>