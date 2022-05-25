let el, i;
let data = [
  { id: "001", nombre: "mouse", color: "negro", peso: "2" },
  { id: "002", nombre: "notebook", color: "gris", peso: "10"  },
  { id: "003", nombre: "monitor", color: "negro", peso: "15" },
  { id: "004", nombre: "impresora", color: "blanco", peso: "10"  }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#nombre").value = "";
  document.querySelector("#color").value = ""
  document.querySelector("#peso").value = ""
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.id} ${x.nombre} ${x.color} ${x.peso}`;
    panel.append(el);
  });
}

function create() {
  let id = document.querySelector("#id").value;
  let no = document.querySelector("#nombre").value;
  let co = document.querySelector("#color").value;
  let pe = document.querySelector("#peso").value;
  data = [...data, { id: id, nombre: no, color: co, peso: pe }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#id").value = data[i].id;
  document.querySelector("#nombre").value = data[i].nombre;
  document.querySelector("#color").value = data[i].color;
  document.querySelector("#peso").value = data[i].peso;
}

function update() {
  data[i].firstname = document.querySelector("#id").value;
  data[i].lastname = document.querySelector("#nombre").value;
  data[i].lastname = document.querySelector("#color").value;
  data[i].lastname = document.querySelector("#peso").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();