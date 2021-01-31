const state = {
    funds: 4000,
    currencies: []
};

const mutations = {
    'BUY_CURRENCY'(state, {currencyId, currentPrice, LotSize}){
        const record = state.currencies.find(element => element.id = currencyId);
        if(record){
            record.LotSize += LotSize;
        }else{
            state.currencies.push({
                id: currencyId,
                LotSize: LotSize,
            });
        }
        state.funds -= currentPrice * LotSize;
    },
    'SELL_CURRENCY'(state,{currencyId, currentPrice, LotSize}){
        const record = state.currencies.find(element => element.id = currencyId);
        if(record.LotSize > LotSize){
            record.LotSize-= LotSize;
        }else{
            state.currencies.splice(state.currencies.indexOf(record), 1);
        }
        state.funds += currentPrice * LotSize;
    },
    "SET_PORTFOLIO"(state, portfolio){
        state.funds = portfolio.funds;
        state.currencies = portfolio.currencyPortfolio ? portfolio.currencyPortfolio : [];

    }
};


const actions = {
    sellCurrency({commit}, order){
        commit('SELL_CURRENCY', order);
    }
};

const getters = {
    currencyPortfolio (state, getters){
        return state.currencies.map(currency => {
            const record = getters.currencies.find(element => element.id == currency.id);
            return{ 
                id: currency.id,
                LotSize: currency.LotSize,
                name: record.name,
                currentPrice: record.currentPrice
            }
        });
    },
    funds(state){
        return state.funds;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}