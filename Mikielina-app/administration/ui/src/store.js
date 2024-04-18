import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
// import { createStore } from "vuex";

Vue.use(Vuex)



export default new Vuex.Store({
  state: {

      user: {username:false, email:""},

      token: null,
      isLoggedin: false,
      username:"",
      articles: [],

    
  },
  // used to change state in a store by committing a mutation
  // vue mutations are similar to events they comprise of a string type and a handler
  mutations: {
    setUser(state, user) {
      state.user = user;

    },
    setToken(state, token, isLoggedin) {
      state.token = token;
      state.isLoggedin = isLoggedin;
    }, 
    loadProducts(state, articles) {
      state.articles = articles;
    }
  },
  getters: {
    activeUser: state => {
      return state.token
    },
  }

})