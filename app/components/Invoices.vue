<template>
    <LayoutDefault>
        <Label class="message" :text="msg"/>
    </LayoutDefault>
</template>

<script >
    import LayoutDefault from '../layouts/LayoutDefault.vue';

    export default {
        name: 'Invoices',
        components: {
            LayoutDefault
        },
        data() {
            return {
                msg: 'Factures'
            }
        }
    }
</script>

<style scoped>
    
</style>
