const { getAll } = require("./api/Stock.js");

const form = document.querySelector('form');

const renderTable = data => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const rows = source.reduce(
    (acc, { id, market, MarketCap, StockName }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${market}</td><td>${MarketCap}</td><td>${StockName}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = event => {
  event.preventDefault();

  const id = event.target.id.value;
  const market = event.target.market.value;
  const MarketCap = event.target.MarketCap.value;
  const StockName = event.target.StockName.value;

  console.log(id, market, MarketCap, StockName);

  getAll({id: id, market: market, MarketCap: MarketCap, StockName: StockName}).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

form.onsubmit = onSubmit;
form.onreset = onReset;