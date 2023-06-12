const submit_button = document.querySelector(".btn");
var data_image = "";
var reset = document.getElementById("reset");
var url = new URL(window.location.href);
var searchParams = new URLSearchParams(url.search);
var id = searchParams.get("id");
const registers = localStorage.getItem("register")
  ? JSON.parse(localStorage.getItem("register"))
  : [];

if (id) {
  console.log(id, 'IDS');
  const user = registers.find(function (item) {
    return item.id == id;
  });
  console.log(user, "SINGLE USER");
  document.getElementById("fname").value = user.first_name;
  document.getElementById("lname").value = user.last_name;
  document.getElementById("gender").value = user.gender;
  var preview = document.getElementById("preview");
  preview.src = user.image;
  document.getElementById("country").value = user.country;
  document.getElementById("email").value = user.email;
  document.getElementById("uname").value = user.username;
  document.getElementById("password").value = user.password;
  document.getElementById("cpassword").value = user.cnfrmpassword;
  document.getElementById("date").value = user.date;
  document.getElementById("zcode").value = user.zip;
}

if (submit_button) {
  submit_button.addEventListener("click", function (ev) {
    console.log(ev);
    // const id = document.getElementById("id")?.value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value;
    const uname = document.getElementById("uname").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const date = document.getElementById("date").value;
    const zcode = document.getElementById("zcode").value;

    var currentData = localStorage.getItem("register");
    //   currentData.reset();

    if (currentData) {
      currentData = JSON.parse(currentData);
      if (id) {
        index = currentData.findIndex((e) => e.id == id);
        console.log(index, id);
      }
      if (id && index !== -1) {
        currentData[index] = {
          id: id,
          first_name: fname,
          last_name: lname,
          gender: gender,
          country: country,
          email: email,
          username: uname,
          password: password,
          cnfrmpassword: cpassword,
          date: date,
          zip: zcode,
          image: data_image ? data_image : currentData[index].image,
        };
      } else {
        currentData.push({
          id: Math.floor(Math.random() * 100 + 1),
          first_name: fname,
          last_name: lname,
          gender: gender,
          country: country,
          email: email,
          username: uname,
          password: password,
          cnfrmpassword: cpassword,
          date: date,
          zip: zcode,
          image: data_image,
        });
      }
     
    } else {
      currentData = [];
      
    }

   
    if (fname === "" && lname === "" && gender === "0" && country === "0" && email === "" && uname === "" && password === "" && cpassword === "" && date === "" && zcode === "") {
      alert("No Input Value");
    } else {
      console.log(currentData,"ttt")
      localStorage.setItem("register", JSON.stringify(currentData));
      alert("Data Submitted Successfully");
    }
  });
}

function previewImage(event) {
  var input = event.target;
  var preview = document.getElementById("preview");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      data_image = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

reset.onclick = function () {};
var register = localStorage.getItem("users");


