<template>
    <LayoutDefault page="Planning">
        <GridLayout ~mainContent columns="*" rows="*">
            <Label class="message" :text="msg"/>
        </GridLayout>
    </LayoutDefault>
</template>

<script>
    export default {
        name: 'Planning',
        data() {
            return {
                msg: 'Planning'
            }
        }
    }
</script>

<style scoped>
    
</style>
