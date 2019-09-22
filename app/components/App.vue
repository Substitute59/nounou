<template>
    <LayoutDefault page="NOUNOU">
        <GridLayout ~mainContent columns="*" rows="*">
            <Label class="message" :text="msg"/>
        </GridLayout>
    </LayoutDefault>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 'Homepage'
            }
        },
        mounted() {
            this.$store.dispatch('childrenStore/init');
        }
    }
</script>

<style scoped>
    
</style>
