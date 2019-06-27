<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md4 offset-md4>
                <v-card>
                    <v-card-title>
                        <h3>Gestion de Tareas</h3>
                    </v-card-title>

                    <v-card-text>
                        <task-new v-on:newTask="addTask"/>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text>
                        <task-list :tasks="getTasks"/>
                    </v-card-text>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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