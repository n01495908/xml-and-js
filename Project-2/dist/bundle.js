(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    
    },{"../data/Stock":2}],2:[function(require,module,exports){
    module.exports=[[{"id":1,"market":"NASDAQ","MarketCap":"$3.82B","StockName":"Proofpoint, Inc."},
    {"id":2,"market":"NYSE","MarketCap":"$3.38B","StockName":"Cabot Corporation"},
    {"id":3,"market":"NASDAQ","MarketCap":"$16B","StockName":"Liberty Broadband Corporation"},
    {"id":4,"market":"NASDAQ","MarketCap":"$864.84M","StockName":"Windstream Holdings, Inc."},
    {"id":5,"market":"NASDAQ","MarketCap":"$315.63M","StockName":"Saban Capital Acquisition Corp."},
    {"id":6,"market":"NYSE","MarketCap":"$55.69B","StockName":"Statoil ASA"},
    {"id":7,"market":"NYSE","MarketCap":"$1.21B","StockName":"AAR Corp."},
    {"id":8,"market":"NASDAQ","MarketCap":"$1.31B","StockName":"Innoviva, Inc."},
    {"id":9,"market":"NYSE","MarketCap":"$27.14B","StockName":"Cummins Inc."},
    {"id":10,"market":"NASDAQ","MarketCap":"$731.26M","StockName":"Ituran Location and Control Ltd."},
    {"id":11,"market":"NASDAQ","MarketCap":"$3.49B","StockName":"Silgan Holdings Inc."},
    {"id":12,"market":"NASDAQ","MarketCap":"$23.72M","StockName":"VelocityShares 3x Inverse Silver ETN"},
    {"id":13,"market":"NYSE","MarketCap":"n/a","StockName":"Ashford Hospitality Trust Inc"},
    {"id":14,"market":"NYSE","MarketCap":"$33.53B","StockName":"Infosys Limited"},
    {"id":15,"market":"NASDAQ","MarketCap":"$14.79M","StockName":"Barclays Inverse US Treasury Composite ETN"},
    {"id":16,"market":"NYSE","MarketCap":"$384.22M","StockName":"Panhandle Royalty Company"},
    {"id":17,"market":"NYSE","MarketCap":"n/a","StockName":"Colony NorthStar, Inc."},
    {"id":18,"market":"NASDAQ","MarketCap":"$2.08B","StockName":"Pattern Energy Group Inc."},
    {"id":19,"market":"NASDAQ","MarketCap":"$590.4M","StockName":"TPI Composites, Inc."},
    {"id":20,"market":"NASDAQ","MarketCap":"$173.77M","StockName":"Akoustis Technologies, Inc."},
    {"id":21,"market":"NASDAQ","MarketCap":"$3.93B","StockName":"Cracker Barrel Old Country Store, Inc."},
    {"id":22,"market":"NYSE","MarketCap":"$123.81M","StockName":"Blackrock Defined Opportunity Credit Trust"},
    {"id":23,"market":"NYSE","MarketCap":"$3.77B","StockName":"Plains Group Holdings, L.P."},
    {"id":24,"market":"NYSE","MarketCap":"$487.74M","StockName":"Enzo Biochem, Inc."},
    {"id":25,"market":"NYSE","MarketCap":"n/a","StockName":"Dynex Capital, Inc."},
    {"id":26,"market":"NASDAQ","MarketCap":"$494.01M","StockName":"Pulse Biosciences, Inc"},
    {"id":27,"market":"NASDAQ","MarketCap":"$35.74B","StockName":"Intuit Inc."},
    {"id":28,"market":"NASDAQ","MarketCap":"$11.27M","StockName":"Avinger, Inc."},
    {"id":29,"market":"NYSE","MarketCap":"$5.6B","StockName":"Israel Chemicals Shs"},
    {"id":30,"market":"NASDAQ","MarketCap":"$4.58M","StockName":"Opexa Therapeutics, Inc."},
    {"id":31,"market":"NASDAQ","MarketCap":"$2.09B","StockName":"MicroStrategy Incorporated"},
    {"id":32,"market":"NASDAQ","MarketCap":"$556.3M","StockName":"First Trust NASDAQ-100 Equal Weighted Index Fund"},
    {"id":33,"market":"NYSE","MarketCap":"$126.15M","StockName":"Liberty All-Star Growth Fund, Inc."},
    {"id":34,"market":"NYSE","MarketCap":"n/a","StockName":"Hersha Hospitality Trust"},
    {"id":35,"market":"NASDAQ","MarketCap":"$9.94M","StockName":"First Trust International Multi-Asset Diversified Income Index"},
    {"id":36,"market":"NASDAQ","MarketCap":"$342.51M","StockName":"Bassett Furniture Industries, Incorporated"},
    {"id":37,"market":"NASDAQ","MarketCap":"$251.25M","StockName":"Easterly Acquisition Corp."},
    {"id":38,"market":"NYSE","MarketCap":"$98.84M","StockName":"Nuveen Municipal Income Fund, Inc."},
    {"id":39,"market":"NYSE","MarketCap":"$5.06B","StockName":"Howard Hughes Corporation (The)"},
    {"id":40,"market":"NASDAQ","MarketCap":"$206.13M","StockName":"Ardelyx, Inc."},
    {"id":41,"market":"NASDAQ","MarketCap":"$4.36M","StockName":"Global X Millennials Thematic ETF"},
    {"id":42,"market":"NYSE","MarketCap":"n/a","StockName":"Teekay Offshore Partners L.P."},
    {"id":43,"market":"NYSE","MarketCap":"$35.32B","StockName":"Constellation Brands Inc"},
    {"id":44,"market":"NASDAQ","MarketCap":"$198.09M","StockName":"Arbutus Biopharma Corporation"},
    {"id":45,"market":"NASDAQ","MarketCap":"$136.87M","StockName":"1st Constitution Bancorp (NJ)"},
    {"id":46,"market":"NYSE","MarketCap":"$3.4B","StockName":"Swift Transportation Company"},
    {"id":47,"market":"NASDAQ","MarketCap":"$267.39M","StockName":"Summit Financial Group, Inc."},
    {"id":48,"market":"NYSE","MarketCap":"n/a","StockName":"RAIT Financial Trust"},
    {"id":49,"market":"NASDAQ","MarketCap":"$45.09M","StockName":"NetSol Technologies Inc."},
    {"id":50,"market":"NYSE","MarketCap":"$401.18M","StockName":"Nuveen Mortgage Opportunity Term Fund"},
    {"id":51,"market":"NASDAQ","MarketCap":"$23.24M","StockName":"U.S. Global Investors, Inc."},
    {"id":52,"market":"NYSE","MarketCap":"$6.48B","StockName":"Jacobs Engineering Group Inc."},
    {"id":53,"market":"NYSE","MarketCap":"n/a","StockName":"Torchmark Corporation"},
    {"id":54,"market":"NASDAQ","MarketCap":"$5.5B","StockName":"Universal Display Corporation"},
    {"id":55,"market":"NASDAQ","MarketCap":"$631.55M","StockName":"Boingo Wireless, Inc."},
    {"id":56,"market":"NASDAQ","MarketCap":"$85M","StockName":"ModusLink Global Solutions, Inc"},
    {"id":57,"market":"NYSE","MarketCap":"$5.39B","StockName":"Michael Kors Holdings Limited"},
    {"id":58,"market":"NASDAQ","MarketCap":"$1.97M","StockName":"DryShips Inc."},
    {"id":59,"market":"NASDAQ","MarketCap":"$13.09M","StockName":"Future FinTech Group Inc."},
    {"id":60,"market":"NASDAQ","MarketCap":"$935.95M","StockName":"Huron Consulting Group Inc."},
    {"id":61,"market":"NYSE","MarketCap":"$42.5B","StockName":"Syngenta AG"},
    {"id":62,"market":"NASDAQ","MarketCap":"$64.15M","StockName":"LightPath Technologies, Inc."},
    {"id":63,"market":"NASDAQ","MarketCap":"$94.06M","StockName":"Westmoreland Coal Company"},
    {"id":64,"market":"NASDAQ","MarketCap":"$392.95M","StockName":"STAAR Surgical Company"},
    {"id":65,"market":"NASDAQ","MarketCap":"n/a","StockName":"PrivateBancorp, Inc."},
    {"id":66,"market":"NASDAQ","MarketCap":"$126.61M","StockName":"Auburn National Bancorporation, Inc."},
    {"id":67,"market":"NASDAQ","MarketCap":"$738.7M","StockName":"Cass Information Systems, Inc"},
    {"id":68,"market":"NYSE","MarketCap":"$311.58M","StockName":"Diversified Real Asset Income Fund"},
    {"id":69,"market":"NASDAQ","MarketCap":"$2.21B","StockName":"WebMD Health Corp"},
    {"id":70,"market":"NASDAQ","MarketCap":"n/a","StockName":"Electrum Special Acquisition Corporation"},
    {"id":71,"market":"NASDAQ","MarketCap":"$3.71M","StockName":"Atossa Genetics Inc."},
    {"id":72,"market":"NASDAQ","MarketCap":"$165.3M","StockName":"Prudential Bancorp, Inc."},
    {"id":73,"market":"NYSE","MarketCap":"$282.79M","StockName":"Genesis Healthcare, Inc."},
    {"id":74,"market":"NYSE","MarketCap":"$10.29B","StockName":"Woori Bank"},
    {"id":75,"market":"NYSE","MarketCap":"$337.67M","StockName":"Cohen & Steers Total Return Realty Fund, Inc."},
    {"id":76,"market":"NYSE","MarketCap":"n/a","StockName":"American Financial Group, Inc."},
    {"id":77,"market":"NASDAQ","MarketCap":"$257.87M","StockName":"The First Bancshares, Inc."},
    {"id":78,"market":"NYSE","MarketCap":"$3.02B","StockName":"Ormat Technologies, Inc."},
    {"id":79,"market":"NYSE","MarketCap":"$378.74M","StockName":"Model N, Inc."},
    {"id":80,"market":"NYSE","MarketCap":"n/a","StockName":"DTE Energy Company"},
    {"id":81,"market":"NYSE","MarketCap":"$56.05B","StockName":"The Charles Schwab Corporation"},
    {"id":82,"market":"NYSE","MarketCap":"$1.53B","StockName":"Four Corners Property Trust, Inc."},
    {"id":83,"market":"NASDAQ","MarketCap":"$104.39M","StockName":"First Trust Small Cap Growth AlphaDEX Fund"},
    {"id":84,"market":"NASDAQ","MarketCap":"$41.88M","StockName":"CafePress Inc."},
    {"id":85,"market":"NYSE","MarketCap":"n/a","StockName":"PartnerRe Ltd."},
    {"id":86,"market":"NASDAQ","MarketCap":"$4.24B","StockName":"PAREXEL International Corporation"},
    {"id":87,"market":"NYSE","MarketCap":"n/a","StockName":"Nustar Energy L.P."},
    {"id":88,"market":"NYSE","MarketCap":"$40.61B","StockName":"VALE S.A."},
    {"id":89,"market":"NASDAQ","MarketCap":"n/a","StockName":"Celgene Corporation"},
    {"id":90,"market":"NASDAQ","MarketCap":"$772.65M","StockName":"Kelly Services, Inc."},
    {"id":91,"market":"NYSE","MarketCap":"$901.61M","StockName":"John Hancock Tax Advantaged Dividend Income Fund"},
    {"id":92,"market":"NASDAQ","MarketCap":"$862.98M","StockName":"OraSure Technologies, Inc."},
    {"id":93,"market":"NYSE","MarketCap":"$113.08B","StockName":"AbbVie Inc."},
    {"id":94,"market":"NYSE","MarketCap":"n/a","StockName":"Equity Commonwealth"},
    {"id":95,"market":"NASDAQ","MarketCap":"$395.17M","StockName":"Farmers National Banc Corp."},
    {"id":96,"market":"NASDAQ","MarketCap":"$1.47B","StockName":"Tivity Health, Inc."},
    {"id":97,"market":"NASDAQ","MarketCap":"$69.91M","StockName":"United Bancshares, Inc."},
    {"id":98,"market":"NYSE","MarketCap":"$3.1B","StockName":"SCIENCE APPLICATIONS INTERNATIONAL CORPORATION"},
    {"id":99,"market":"NYSE","MarketCap":"n/a","StockName":"Santander Holdings USA, Inc."},
    {"id":100,"market":"NASDAQ","MarketCap":"$5.54B","StockName":"BOK Financial Corporation"},
    {"id":101,"market":"NYSE","MarketCap":"$378.74M","StockName":"Model N, Inc."},
    {"id":102,"market":"NYSE","MarketCap":"n/a","StockName":"Drive Shack Inc."},
    {"id":103,"market":"NASDAQ","MarketCap":"$3.63B","StockName":"Methanex Corporation"},
    {"id":104,"market":"NASDAQ","MarketCap":"$99.4M","StockName":"MSB Financial Corp."},
    {"id":105,"market":"NASDAQ","MarketCap":"$769.94M","StockName":"Mercer International Inc."},
    {"id":106,"market":"NASDAQ","MarketCap":"$514.79M","StockName":"Allegiance Bancshares, Inc."},
    {"id":107,"market":"NYSE","MarketCap":"$285.58M","StockName":"Wells Fargo Global Dividend Opportunity Fund"},
    {"id":108,"market":"NYSE","MarketCap":"n/a","StockName":"TCF Financial Corporation"},
    {"id":109,"market":"NASDAQ","MarketCap":"$41.02M","StockName":"Mid-Con Energy Partners, LP"},
    {"id":110,"market":"NYSE","MarketCap":"$1.15B","StockName":"Schweitzer-Mauduit International, Inc."},
    {"id":111,"market":"NASDAQ","MarketCap":"$2.71B","StockName":"Insulet Corporation"},
    {"id":112,"market":"NYSE","MarketCap":"$8.89B","StockName":"United Rentals, Inc."},
    {"id":113,"market":"NASDAQ","MarketCap":"$700.07M","StockName":"PC Connection, Inc."},
    {"id":114,"market":"NYSE","MarketCap":"$3.65B","StockName":"Extended Stay America, Inc."},
    {"id":115,"market":"NYSE","MarketCap":"$250.05M","StockName":"Nuveen AMT-Free Municipal Value Fund"},
    {"id":116,"market":"NASDAQ","MarketCap":"$64.15M","StockName":"LightPath Technologies, Inc."},
    {"id":117,"market":"NASDAQ","MarketCap":"$12.73M","StockName":"NXT-ID Inc."},
    {"id":118,"market":"NYSE","MarketCap":"n/a","StockName":"Mid-America Apartment Communities, Inc."},
    {"id":119,"market":"NASDAQ","MarketCap":"$41.23M","StockName":"Burcon NutraScience Corp"},
    {"id":120,"market":"NASDAQ","MarketCap":"n/a","StockName":"IBERIABANK Corporation"},
    {"id":121,"market":"NYSE","MarketCap":"$3.22B","StockName":"NRG Yield, Inc."},
    {"id":122,"market":"NYSE","MarketCap":"$626.7M","StockName":"Western Asset High Income Fund II Inc."},
    {"id":123,"market":"NASDAQ","MarketCap":"$106.49M","StockName":"First United Corporation"},
    {"id":124,"market":"NYSE","MarketCap":"$1.43B","StockName":"Actuant Corporation"},
    {"id":125,"market":"NASDAQ","MarketCap":"$231.47M","StockName":"Matrix Service Company"},
    {"id":126,"market":"NASDAQ","MarketCap":"$21.55M","StockName":"Heat Biologics, Inc."},
    {"id":127,"market":"NASDAQ","MarketCap":"$128.8M","StockName":"KCAP Financial, Inc."},
    {"id":128,"market":"NASDAQ","MarketCap":"$2.71B","StockName":"Insulet Corporation"},
    {"id":129,"market":"NYSE","MarketCap":"$193.59B","StockName":"Coca-Cola Company (The)"},
    {"id":130,"market":"NYSE","MarketCap":"$752.08M","StockName":"Kenon Holdings Ltd."},
    {"id":131,"market":"NASDAQ","MarketCap":"$46.06M","StockName":"180 Degree Capital Corp."},
    {"id":132,"market":"NYSE","MarketCap":"$847.88M","StockName":"Warrior Met Coal, Inc."},
    {"id":133,"market":"NYSE","MarketCap":"$17.1B","StockName":"Vulcan Materials Company"},
    {"id":134,"market":"NASDAQ","MarketCap":"$68.19B","StockName":"Adobe Systems Incorporated"},
    {"id":135,"market":"NASDAQ","MarketCap":"$72.51M","StockName":"Natural Alternatives International, Inc."},
    {"id":136,"market":"NASDAQ","MarketCap":"$25.37B","StockName":"Western Digital Corporation"},
    {"id":137,"market":"NASDAQ","MarketCap":"$317.23M","StockName":"ServiceSource International, Inc."},
    {"id":138,"market":"NYSE","MarketCap":"$69.05M","StockName":"Madison Strategic Sector Premium Fund"},
    {"id":139,"market":"NYSE","MarketCap":"$2.46B","StockName":"HubSpot, Inc."},
    {"id":140,"market":"NASDAQ","MarketCap":"$7.81B","StockName":"Old Dominion Freight Line, Inc."},
    {"id":141,"market":"NASDAQ","MarketCap":"$83.95B","StockName":"QUALCOMM Incorporated"},
    {"id":142,"market":"NASDAQ","MarketCap":"$288.2M","StockName":"Quinpario Acquisition Corp. 2"},
    {"id":143,"market":"NYSE","MarketCap":"$2.05B","StockName":"Luxoft Holding, Inc."},
    {"id":144,"market":"NYSE","MarketCap":"$8.56B","StockName":"Huntington Ingalls Industries, Inc."},
    {"id":145,"market":"NYSE","MarketCap":"$882.34M","StockName":"Fairmount Santrol Holdings Inc."},
    {"id":146,"market":"NYSE","MarketCap":"n/a","StockName":"Axis Capital Holdings Limited"},
    {"id":147,"market":"NASDAQ","MarketCap":"$16B","StockName":"Liberty Broadband Corporation"},
    {"id":148,"market":"NYSE","MarketCap":"$316.71M","StockName":"Resource Capital Corp."},
    {"id":149,"market":"NYSE","MarketCap":"$785.28M","StockName":"Pennsylvania Real Estate Investment Trust"},
    {"id":150,"market":"NYSE","MarketCap":"n/a","StockName":"Watsco, Inc."},
    {"id":151,"market":"NASDAQ","MarketCap":"$23.54M","StockName":"Dataram Corporation"},
    {"id":152,"market":"NYSE","MarketCap":"$10.85B","StockName":"Total System Services, Inc."},
    {"id":153,"market":"NASDAQ","MarketCap":"$165.3M","StockName":"Prudential Bancorp, Inc."},
    {"id":154,"market":"NASDAQ","MarketCap":"$62M","StockName":"Diversicare Healthcare Services Inc."},
    {"id":155,"market":"NASDAQ","MarketCap":"$10.91M","StockName":"Staffing 360 Solutions, Inc."},
    {"id":156,"market":"NASDAQ","MarketCap":"$274.06M","StockName":"First Trust Emerging Markets AlphaDEX Fund"},
    {"id":157,"market":"NASDAQ","MarketCap":"$11.89M","StockName":"Insignia Systems, Inc."},
    {"id":158,"market":"NASDAQ","MarketCap":"$1.59B","StockName":"HMS Holdings Corp"},
    {"id":159,"market":"NASDAQ","MarketCap":"n/a","StockName":"Gores Holdings II, Inc."},
    {"id":160,"market":"NYSE","MarketCap":"n/a","StockName":"Stifel Financial Corporation"},
    {"id":161,"market":"NASDAQ","MarketCap":"$4.47B","StockName":"First Citizens BancShares, Inc."},
    {"id":162,"market":"NASDAQ","MarketCap":"$121.38M","StockName":"Pluristem Therapeutics, Inc."},
    {"id":163,"market":"NASDAQ","MarketCap":"$48.64M","StockName":"Hebron Technology Co., Ltd."},
    {"id":164,"market":"NYSE","MarketCap":"n/a","StockName":"Allstate Corporation (The)"},
    {"id":165,"market":"NASDAQ","MarketCap":"$188.85M","StockName":"Pure Cycle Corporation"},
    {"id":166,"market":"NASDAQ","MarketCap":"$292.59M","StockName":"BSB Bancorp, Inc."},
    {"id":167,"market":"NASDAQ","MarketCap":"$443.51M","StockName":"Intellia Therapeutics, Inc."},
    {"id":168,"market":"NASDAQ","MarketCap":"$320.19M","StockName":"Pope Resources"},
    {"id":169,"market":"NYSE","MarketCap":"$319.55M","StockName":"Natural Gas Services Group, Inc."},
    {"id":170,"market":"NASDAQ","MarketCap":"$1.15B","StockName":"iShares MSCI Europe Financials Sector Index Fund"},
    {"id":171,"market":"NASDAQ","MarketCap":"$19.06M","StockName":"Horizons NASDAQ-100 Covered Call ETF"},
    {"id":172,"market":"NYSE","MarketCap":"$2.51B","StockName":"Fresh Del Monte Produce, Inc."},
    {"id":173,"market":"NYSE","MarketCap":"$458.45M","StockName":"Cato Corporation (The)"},
    {"id":174,"market":"NASDAQ","MarketCap":"$1.05B","StockName":"Vanguard Russell 2000 ETF"},
    {"id":175,"market":"NYSE","MarketCap":"$30.33B","StockName":"Fresenius Medical Care Corporation"},
    {"id":176,"market":"NYSE","MarketCap":"$6.48B","StockName":"American Campus Communities Inc"},
    {"id":177,"market":"NYSE","MarketCap":"$300.48M","StockName":"USD Partners LP"},
    {"id":178,"market":"NYSE","MarketCap":"$186.35M","StockName":"Townsquare Media, Inc."},
    {"id":179,"market":"NYSE","MarketCap":"$3.33B","StockName":"CONSOL Energy Inc."},
    {"id":180,"market":"NYSE","MarketCap":"$4.93B","StockName":"First American Corporation (The)"},
    {"id":181,"market":"NYSE","MarketCap":"$1.21B","StockName":"WildHorse Resource Development Corporation"},
    {"id":182,"market":"NASDAQ","MarketCap":"$154.26M","StockName":"Sientra, Inc."},
    {"id":183,"market":"NASDAQ","MarketCap":"$2.84B","StockName":"Dave & Buster's Entertainment, Inc."},
    {"id":184,"market":"NASDAQ","MarketCap":"$151.51M","StockName":"PowerShares FTSE International Low Beta Equal Weight Portfolio"},
    {"id":185,"market":"NASDAQ","MarketCap":"$383.58M","StockName":"Fidus Investment Corporation"},
    {"id":186,"market":"NASDAQ","MarketCap":"$104.39M","StockName":"Invuity, Inc."},
    {"id":187,"market":"NASDAQ","MarketCap":"$459.39M","StockName":"Kayne Anderson Acquisition Corp."},
    {"id":188,"market":"NYSE","MarketCap":"$9.55B","StockName":"MSCI Inc"},
    {"id":189,"market":"NASDAQ","MarketCap":"$116.58M","StockName":"SeaSpine Holdings Corporation"},
    {"id":190,"market":"NASDAQ","MarketCap":"$125.21M","StockName":"ShotSpotter, Inc."},
    {"id":191,"market":"NASDAQ","MarketCap":"$38.24M","StockName":"Oasmia Pharmaceutical AB"},
    {"id":192,"market":"NASDAQ","MarketCap":"$63.6M","StockName":"Profire Energy, Inc."},
    {"id":193,"market":"NASDAQ","MarketCap":"$2.72B","StockName":"Caesars Acquisition Company"},
    {"id":194,"market":"NASDAQ","MarketCap":"n/a","StockName":"M III Acquisition Corp."},
    {"id":195,"market":"NYSE","MarketCap":"$37.92B","StockName":"Royal Bank Scotland plc (The)"},
    {"id":196,"market":"NASDAQ","MarketCap":"$1.31B","StockName":"NIC Inc."},
    {"id":197,"market":"NASDAQ","MarketCap":"$1.36B","StockName":"WisdomTree Investments, Inc."},
    {"id":198,"market":"NASDAQ","MarketCap":"$473.38M","StockName":"First Community Bancshares, Inc."},
    {"id":199,"market":"NASDAQ","MarketCap":"$65.43M","StockName":"JM Global Holding Company"},
    {"id":200,"market":"NASDAQ","MarketCap":"$444.68M","StockName":"Malibu Boats, Inc."}]

    ]
    },{}],3:[function(require,module,exports){
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
    },{"./api/Stock.js":1}]},{},[3]);