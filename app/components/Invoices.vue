<template>
    <LayoutDefault page="Invoices">
        <GridLayout ~mainContent columns="*" rows="*">
            <Label class="message" :text="msg"/>
        </GridLayout>
    </LayoutDefault>
</template>

<script>
    export default {
        name: 'Factures',
        data() {
            return {
                msg: 'Factures'
            }
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        padding-left: 16;
    }
</style>
