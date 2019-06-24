<template>
    <li><button @click="deleteTask">X</button> {{task}} </li>
</template>

<script>
    export default {
        name: "TaskListItem",
        props: {
            task: String,
            id: Number
        },
        methods:{
            deleteTask(){
                if(confirm('Borrar tarea?')){
                    this.$bus.$emit("delete-task", this.id)
                }
            }
        }
    }
</script>

<style scoped>

</style>