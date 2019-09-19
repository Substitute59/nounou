<template>
  <layout-default>
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="form" row="0" col="0">
        <StackLayout class="input-field">
          <Label text="First Name" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.firstname" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
          <Label text="Last Name" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.lastname" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
          <Label text="Age" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.age" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <GridLayout rows="auto, auto" columns="*, *">
          <Button text="Save" @tap="save" class="btn btn-primary" row="0" col="0" />
          <Button text="Load" @tap="load" class="btn btn-primary" row="0" col="1"  />
          <Button text="Clear" @tap="clear" class="btn btn-primary" row="1" col="0" colSpan="2"  />
        </GridLayout>
      </StackLayout>
      <ListView for="child in children" class="list-group" row="1" col="0">
        <v-template>
          <StackLayout class="list-group-item" :key="child.id">
            <Label v-bind:text="child.firstname + ' ' + child.lastname + ' ' + child.age + ' ans'" />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </layout-default>
</template>

<script>
  import LayoutDefault from '../layouts/LayoutDefault.vue';
  import { mapState } from 'vuex'

  export default {
    name: 'Enfants',
    components: {
      LayoutDefault
    },
    data() {
      return {
        input: {
          firstname: "",
          lastname: "",
          age: ""
        }
      }
    },
    computed: {
      ...mapState({
        children: state => state.childrenStore.data
      })
    },
    methods: {
      save() {
        this.$store.dispatch('childrenStore/insert', this.input);
      },
      load() {
        this.$store.dispatch('childrenStore/query');
      },
      clear() {
        this.input.firstname = "";
        this.input.lastname = "";
        this.input.age = "";
      }
    },
    mounted() {
      this.$store.dispatch('childrenStore/init');
    }
  };
</script>

<style scoped>
  .list-group-item {
    font-size: 20;
    color: #333333;
  }
</style>