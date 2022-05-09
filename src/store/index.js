import Vue from "vue";
import Vuex from "vuex";
import TodosItem from './modules/TodosItem';

// load Vuex
Vue.use(Vuex);


// Create Store
export default new Vuex.Store({
    modules: {
        TodosItem 
    }
});