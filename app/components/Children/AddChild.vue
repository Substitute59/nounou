<template>
    <LayoutDefault page="Ajouter un enfant">
        <StackLayout class="form">
            <StackLayout class="input-field">
                <Label text="Prénom" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.firstname" />
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label text="Nom" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.lastname" />
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label text="Age" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.age" />
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label text="Contact parent" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.contact" />
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <StackLayout class="input-field">
                <Label text="Remarques" class="label font-weight-bold m-b-5" />
                <TextView class="input" v-model="input.note" />
                <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
            <GridLayout rows="auto, auto" columns="*, *">
                <Button text="Ajouter" @tap="save" class="btn btn-primary" row="0" col="0" />
                <Button text="Annuler" @tap="goToChildren" class="btn btn-primary" row="0" col="1"  />
            </GridLayout>
        </StackLayout>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../../layouts/LayoutDefault.vue';
import Children from './Children.vue';

export default {
    name: 'AddChild',
    data() {
        return {
            input: {
            firstname: '',
            lastname: '',
            age: '',
            contact: '',
            note: ''
            }
        }
    },
    methods: {
        save() {
            if (this.input.firstname == '' || this.input.lastname == '' || this.input.age == '' || this.input.contact == '' || this.input.note == '') {
            alert({
                title: "Formulaire incomplet",
                message: "Veuillez renseigner tous les champs",
                okButtonText: "Continuer"
            });
            } else {
            this.$store.dispatch('childrenStore/insert', this.input);
            this.$navigateTo(Children, { clearHistory: true })
            }
        },
        goToChildren() {
            this.$navigateTo(Children, { clearHistory: true })
        }
    }
}
</script>

<style scoped>
    .form {
        padding: 50 20;
    }
    .input-field {
        padding: 10 0;
    }
    .btn {
        margin-top: 20;
    }
</style>
