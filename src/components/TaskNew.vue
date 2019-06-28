<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-text-field color="blue" label="Nueva Tarea" type="text" @keyup.enter="add" v-model="task"/>
        </v-flex>
        <v-flex xs12 class="text-xs-right">
            <v-btn color="blue" dark v-on:click="add">Agregar</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "TaskNew",
        data: function () {
            return {
                task: ""
            }
        },
        methods: {
            add: function () {
                if (this.task) {
                    this.$emit("newTask", this.task)
                    this.task = ""
                } else {
                    console.log("Task esta vacio")
                }
            }
        }
    }
</script>

<style scoped>

</style>