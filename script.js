let selectRow = null;
const emp_codes = new Set();


function onFormSubmit() {
let formData = readFormData();
if(emp_codes.has(formData.code)) {
  alert('emp-code' + formData.code + 'exists');

}else {
  if(selectRow == null) {
    insertNewRecord(formData);
    resetForm();

  } else {
    updateRecord(formData);
    resetForm();
  }
}
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById('name').value;
  formData["code"] = document.getElementById('code').value;
  formData["city"] = document.getElementById('city').value;
  formData["date"] = document.getElementById('date').value;
  formData["dep"] = document.getElementById('dep').value;
  formData["des"] = document.getElementById('des').value;
  formData["salary"] = document.getElementById('salary').value;

  return formData;

}

function insertNewRecord(data) {
  let table = document
  .getElementById('myTable')
  .getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.lenght);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  emp_codes.add(data.code)
  cell2.innerHTML = data.code;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.city;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.dep;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.des;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.salary;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = `<a onclick="onEdit(this)">edit</a>`;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = `<a onclick="onDelete(this)">delete</a>`

}


function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('code').value = '';
  document.getElementById('city').value = '';
  document.getElementById('date').value = '';
  document.getElementById('dep').value = '';
  document.getElementById('des').value = '';
  document.getElementById('salary').value = '';
  selectRow = null;
}

function onEdit(td) {
selectRow = td.parentElement.parentElement;
document.getElementById('name').value = selectRow.cells[0].innerHTML;
document.getElementById('code').value = selectRow.cells[1].innerHTML;
document.getElementById('city').value = selectRow.cells[2].innerHTML;
document.getElementById('date').value = selectRow.cells[3].innerHTML;
document.getElementById('dep').value = selectRow.cells[4].innerHTML;
document.getElementById('des').value = selectRow.cells[5].innerHTML;
document.getElementById('salary').value = selectRow.cells[6].innerHTML;
}


function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.code;
  selectRow.cells[2].innerHTML = formData.city;
  selectRow.cells[3].innerHTML = formData.date;
  selectRow.cells[4].innerHTML = formData.dep;
  selectRow.cells[5].innerHTML = formData.des;
  selectRow.cells[6].innerHTML = formData.salary;
}


function onDelete(td) {
if(confirm('want delete?')) {
  row = td.parentElement.parentElement;
  emp_codes.delete(row.cells[1].innerHTML);
  document.getElementById('myTable').deleteRow(row.rowIndex);
  resetForm();
}
}


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');
  for(i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if(td) {
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1 ) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}