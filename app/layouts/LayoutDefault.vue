<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label class="fas" fontWeight="900" @tap="$refs.drawer.nativeView.showDrawer()" col="0">{{'fa-bars' | fonticon}}</Label>
                <Label class="title" text="Nounou"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Accueil" @tap="goToHome"/>

                <Label class="drawer-item" text="Enfants" @tap="goToChildren"/>
                <Label class="drawer-item" text="Planning" @tap="goToPlanning"/>
                <Label class="drawer-item" text="Factures" @tap="goToInvoices"/>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <slot/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script >
    import Home from '../components/App.vue';
    import Children from '../components/Children.vue';
    import Planning from '../components/Planning.vue';
    import Invoices from '../components/Invoices.vue';

    export default {
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
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: center;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
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
