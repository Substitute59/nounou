<template>
    <Page>
        <ActionBar>
            <template v-if="isAddChildPage">
                <GridLayout columns="20, *, 20" width="90%">
                    <Label class="fas" fontWeight="900" @tap="goToChildren" col="0">{{'fa-chevron-left' | fonticon}}</Label>
                    <Label class="title" :text="page"  col="1"/>
                    <Label class="fas"  fontWeight="900" @tap="goToInfos" col="2">{{'fa-question-circle' | fonticon}}</Label>
                </GridLayout>
            </template>
            <template v-else>
                <GridLayout columns="20, *, 20" width="90%">
                    <Label class="fas" fontWeight="900" @tap="$refs.drawer.nativeView.showDrawer()" col="0">{{'fa-bars' | fonticon}}</Label>
                    <Label class="title" :text="page"  col="1"/>
                    <Label class="fas"  fontWeight="900" @tap="goToInfos" col="2">{{'fa-question-circle' | fonticon}}</Label>
                </GridLayout>
            </template>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#FFFFFF">
                <Label class="drawer-header" text="Accueil" @tap="goToHome"/>

                <Label class="drawer-item" text="Enfants" @tap="goToChildren"/>
                <Label class="drawer-item" text="Planning" @tap="goToPlanning"/>
                <Label class="drawer-item" text="Factures" @tap="goToInvoices"/>
            </StackLayout>

            <ScrollView ~mainContent height="100%" minHeight="100%">
                <slot/>
            </ScrollView>
        </RadSideDrawer>
    </Page>
</template>

<script >
    import Home from '../components/App.vue';
    import Children from '../components/Children/Children.vue';
    import Planning from '../components/Planning.vue';
    import Invoices from '../components/Invoices.vue';
    import Infos from '../components/Infos.vue';

    export default {
        name: 'LayoutDefault',
        props: ['page'],
        computed: {
            isAddChildPage: function () {
                return this.page === 'Ajouter un enfant';
            }
        },
        methods: {
            goToChildren() {
                this.$navigateTo(Children, { clearHistory: true })
            },
            goToHome() {
                this.$navigateTo(Home, { clearHistory: true })
            },
            goToPlanning() {
                this.$navigateTo(Planning, { clearHistory: true })
            },
            goToInvoices() {
                this.$navigateTo(Invoices, { clearHistory: true })
            },
            goToInfos() {
                this.$navigateTo(Infos, { clearHistory: true })
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
        font-size: 20;
        padding: 5;
    }

    .title {
        text-align: center;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
