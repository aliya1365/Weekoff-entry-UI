const days = [
  "Monday","Tuesday","Wednesday",
  "Thursday","Friday","Saturday","Sunday"
];

function createTable(tableId){
  const tbody = document.getElementById(tableId);

  days.forEach(day=>{
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${day}</td>
      <td><input type="checkbox" class="all"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    `;

    tbody.appendChild(row);
  });
}

// create both tables
createTable("table1");
createTable("table2");

// Row wise select all
document.addEventListener("change", function(e){

  if(e.target.classList.contains("all")){
    let row = e.target.closest("tr");
    let checkboxes = row.querySelectorAll("input");

    checkboxes.forEach((cb,index)=>{
      if(index>0){
        cb.checked = e.target.checked;
      }
    });
  }

});

// Save
function save(){
  alert("Saved Successfully");
}

// Clear specific table
function clearTable(tableId){
  let table = document.getElementById(tableId);
  let inputs = table.querySelectorAll("input");
  inputs.forEach(cb=> cb.checked = false);
}