const registers = localStorage.getItem("register")
  ? JSON.parse(localStorage.getItem("register"))
  : [];
const data_to_print = document.querySelector(".users-list");
var data_to_delete = document.querySelector(".delete-item");

data_to_print.innerHTML = "";

if (registers) {
  var rows = "";
  for (let index = 0; index < registers.length; index++) {
    const element = registers[index];
    console.log(element);
    rows += "<tr>";
    rows += "<td>" + element.id + "</td>";
    rows +=
      '<td><img class="img-fluid" style="height: 8rem;" src="' +
      element.image +
      '" /></td>';
    rows += "<td>" + element.first_name + "</td>";
    rows += "<td>" + element.last_name + "</td>";
    rows += "<td>" + element.gender + "</td>";
    rows += "<td>" + element.country + "</td>";
    rows += "<td>" + element.email + "</td>";
    rows += "<td>" + element.username + "</td>";
    rows += "<td>" + element.date + "</td>";
    rows += "<td>" + element.zip + "</td>";
    rows +=
      '<td><a href="./register.html?id=' +
      element.id +
      '" class="edit-icon" data-index="' +
      index +
      '"><i class="bi bi-pencil-square"></i></a><a href="#" onclick="deleteItem(' +
      index +
      ')" data-index="' +
      index +
      '"><i class="bi bi-trash-fill"></i></a></td>';
    rows += "</tr>";
  }
  data_to_print.innerHTML = rows;
}

function deleteItem(index) {
//   registers.slice(0, index);
  var new_data = registers;
//   console.log(JSON.stringify(registers.splice(index, 1)), "ASD");
    new_data.splice(index, 1);
  localStorage.setItem("register", JSON.stringify(new_data));
}
