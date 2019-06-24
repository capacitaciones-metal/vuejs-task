import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    getters: {
        getTasks(state){
            return state.tasks
        }
    },
    actions: {

    },
    mutations: {
        addTask(state, item) {
            state.tasks.push(item)
        },
        deleteTask(state, id) {
            state.tasks.splice(id,1)
        },
    },

})