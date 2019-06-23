<template>
    <li>{{task}}</li>
</template>

<script>
    export default {
        name: "TaskListItem",
        prop: {
            task: String,
            id: Number
        }
    }
</script>

<style scoped>

</style>