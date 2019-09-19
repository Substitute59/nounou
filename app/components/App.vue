<template>
    <layout-default>
        <Label class="message" :text="msg"/>
    </layout-default>
</template>

<script >
    import LayoutDefault from '../layouts/LayoutDefault.vue';

    export default {
        name: `Home`,
        components: {
            LayoutDefault
        },
        data() {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style scoped>
    
</style>
