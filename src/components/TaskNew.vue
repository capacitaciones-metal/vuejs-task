<template>
    <div>
        <input type="text" v-model="task"/>
        <button v-on:click="add">Agregar</button>
    </div>
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