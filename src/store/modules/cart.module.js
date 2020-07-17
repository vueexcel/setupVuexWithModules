// cart.module.js

const state = {
    item: 0
}

const mutations = {
    SET_ITEM(state, value) {
        state.item = value
    }
}

const actions = {
    updateItem({ commit }, payload) {
        commit('SET_ITEM', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}