const Stock = require("../data/Stock");

const getAll = ({ id, market, MarketCap, StockName } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(Stock);

    if (id) {
      result = result.filter(item => item.id === Number(id));
    }

    if (market) {
      result = result.filter(item => item.market === market);
    }

    if (MarketCap) {
      result = result.filter(item => item.MarketCap === MarketCap);
    }

    if (StockName) {
      result = result.filter(item => item.StockName === Number(StockName));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const Stock = Stock.find(Stock => Stock.id === id);

    if (Stock) {
      resolve({ code: 200, data: Stock });
    } else {
      resolve({
        code: 404,
        data: { message: `No Stock found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};