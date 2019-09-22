<template>
    <LayoutDefault page="Enfants">
        <GridLayout rows="*, auto" columns="*" height="100%">
            <ListView for="child in children" class="list-group" row="0" col="0">
                <v-template>
                    <StackLayout class="list-group-item" :key="child.id">
                        <GridLayout columns="*, auto">
                            <Label class="label" v-bind:text="child.firstname + ' ' + child.lastname + ' ' + child.age + ' ans'" col="0"/>
                            <WrapLayout col="1">
                                <Label class="icons fas" fontWeight="900" @tap="show" col="0">{{'fa-eye' | fonticon}}</Label>
                                <Label class="icons fas" fontWeight="900" @tap="edit" col="0">{{'fa-edit' | fonticon}}</Label>
                                <Label class="icons fas" fontWeight="900" @tap="remove(child.id)" col="0">{{'fa-trash' | fonticon}}</Label>
                            </WrapLayout>
                        </GridLayout>
                    </StackLayout>
                </v-template>
            </ListView>
            <StackLayout class="btn-plus" row="1" col="0">
                <Label class="fas" fontWeight="900" @tap="goToAddChild">{{'fa-plus-circle' | fonticon}}</Label>
            </StackLayout>
        </GridLayout>
    </LayoutDefault>
</template>

<script>
    import AddChild from './AddChild.vue';
    import { mapState } from 'vuex'

    export default {
        name: 'Children',
        computed: {
            ...mapState({
                children: state => state.childrenStore.data
            })
        },
        methods: {
            goToAddChild() {
                this.$navigateTo(AddChild, { clearHistory: true });
            },
            show() {
                console.warn(`Voir le détail de l'enfant`);
            },
            edit() {
                console.warn(`Modifier l'enfant`);
            },
            remove(id) {
                this.$store.dispatch('childrenStore/delete', id);
            }
        },
        mounted() {
            this.$store.dispatch('childrenStore/query');
        }
    };
</script>

<style scoped>
    .list-group-item {
        padding: 5;
    }

    .label,
    .icons {
        font-size: 18;
        color: #333333;
    }

    .icons {
        margin-left: 15;
    }

    .btn-plus {
        font-size: 40;
        color: #53ba82;
        text-align: right;
        padding: 10;
    }
</style>