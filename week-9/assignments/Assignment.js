const table = document.getElementById(`table-body`);  
const loadData = path => new Promise(resolve =>
     {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) =>
     {
      if (target.readyState == 4 && target.status == 200)
       {
        resolve(target.response);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});
const isFiltered = (name, nameTerm) => !name.toLowerCase().includes(nameTerm.toLowerCase());
const renderTable = (source, nameTerm) => {
    const htmlString = JSON.parse(source).reduce((previous, next) => 
    {
        const fullName = `${next.first_name} ${next.last_name}`;
        if (nameTerm && isFiltered(fullName, nameTerm)) return previous;
         return previous + `<tr>
            <td>${next.id}</td>
            <td>${fullName}</td>
            <td>${next.email}</td>
            <td>${next.gender}</td>
            <td>${next.ip_address}</td>
        </tr>`;
    }, "");
    table.innerHTML = htmlString;
}
const onSubmit = (event) => { 
    event.preventDefault();
    const nameTerm = event.target.name.value;
    loadData(`./data.json`).then((source) => renderTable(source, nameTerm));
};
const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));
};
onReset();