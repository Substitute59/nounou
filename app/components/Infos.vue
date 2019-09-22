<template>
    <LayoutDefault page="Informations">
        <GridLayout ~mainContent columns="*" rows="*">
            <Label class="message" :text="msg"/>
        </GridLayout>
    </LayoutDefault>
</template>

<script>
    export default {
        name: 'Infos',
        data() {
            return {
                msg: 'Infos'
            }
        }
    }
</script>

<style scoped>
    
</style>
