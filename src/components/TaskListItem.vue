<template>

    <v-list-tile >
        <v-list-tile-content class="pl-3">
            <v-list-tile-title> {{task}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-btn color="red" flat icon @click="deleteTask">
                <v-icon>cancel</v-icon>
            </v-btn>
        </v-list-tile-action>

    </v-list-tile>
</template>

<script>
    export default {
        name: "TaskListItem",
        props: {
            task: String,
            id: Number
        },
        methods: {
            deleteTask() {
                if (confirm('Borrar tarea?')) {
                    this.$bus.$emit("delete-task", this.id)
                }
            }
        }
    }
</script>

<style scoped>

</style>