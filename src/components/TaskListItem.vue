<template>
    <li>{{task}}</li>
</template>

<script>
    export default {
        name: "TaskListItem",
        props: {
            task: String,
            id: Number
        }
    }
</script>

<style scoped>

</style>