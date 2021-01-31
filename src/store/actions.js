import Vue from 'vue';

export const LoadData = ({commit}) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if (data){
            const currencies = data.currencies;
            const funds = data.funds;
            const currencyPortfolio = data.currencyPortfolio;

            const portfolio = {
                currencyPortfolio,
                funds
            };
            commit('SET_CURRENCIES', currencies);
            commit('SET_PORTFOLIO', portfolio);
        }
    })
};