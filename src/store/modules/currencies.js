import currencies from '../../Data/currencies';

const state = {
    currencies: []
};

const mutations = {
    'SET_CURRENCIES'(state, currencies){
        state.currencies = currencies;
    },
    'RND_CURRENCIES' (state){

    }
};

const actions = {
    buyCurrency: ({commit}, order) => {
        commit('BUY_CURRENCY', order);
    },
    InitCurrencies: ({commit}) => {
        commit('SET_CURRENCIES', currencies);
    },
    randomizeCurrencies:({commit}) => {
        commit('RND_CURRENCIES');
    }
};

const getters = {
    currencies: state => {
        return state.currencies;
    }
};


export default{
    state,
    mutations,
    actions,
    getters,

   
};


