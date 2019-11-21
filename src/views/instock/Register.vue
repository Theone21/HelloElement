<template>
    <div id="register">
        这里是登记页面
        <IButton title="登记"></IButton>
    </div>
</template>

<script>
    import IButton from '@/components/IButton.vue'
    export default {
        name: "register",
        components: {
            IButton
        },
        data(){
            return {
                
            }
        },
        created(){
            console.log("登记页面created");
        }
    }
</script>

<style>
</style>
