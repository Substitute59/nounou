import Vue from 'vue';
import Vuex from 'vuex';

const Sqlite = require("nativescript-sqlite");

Vue.use(Vuex);

const childrenStore = {
  namespaced: true,
  state: {
    database: null,
    data: []
  },
  mutations: {
    init(state, data) {
      state.database = data.database;
    },
    load(state, data) {
      state.data = [];
      for (var i = 0; i < data.data.length; i++) {
        state.data.push({
          id: data.data[i][0],
          firstname: data.data[i][1],
          lastname: data.data[i][2],
          age: data.data[i][3]
        });
      }
    },
    save(state, data) {
      state.data.push({
        id: data.data.id,
        firstname: data.data.firstname,
        lastname: data.data.lastname,
        age: data.data.age
      });
    },
  },
  actions: {
    init(context) {
      (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS children (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, age TEXT)").then(id => {
          context.commit("init", {
            database: db
          });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },
    insert(context, data) {
      context.state.database.execSQL("INSERT INTO children (firstname, lastname, age) VALUES (?, ?, ?)", [data.firstname, data.lastname, data.age]).then(id => {
        context.commit("save", {
          data: data
        });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    query(context) {
      context.state.database.all("SELECT id, firstname, lastname, age FROM children", []).then(result => {
        context.commit("load", {
          data: result
        });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    }
  }
};

export default childrenStore;
