<template>
    <button class="btn btn-default" v-text="title"></button>
</template>

<script>
    export default{
        name: 'IButton',
        props: {
            title: String
        }
    }
</script>

<style>
</style>
