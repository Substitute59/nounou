<template>
    <LayoutDefault>
        <Label class="message" :text="msg"/>
    </LayoutDefault>
</template>

<script >
    import LayoutDefault from '../layouts/LayoutDefault.vue';

    export default {
        name: 'Planning',
        components: {
            LayoutDefault
        },
        data() {
            return {
                msg: 'Planning'
            }
        }
    }
</script>

<style scoped>
    
</style>
