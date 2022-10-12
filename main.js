const skillBarInputs = document.querySelectorAll(".skill-input-controls");
skillBarInputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (e.target.id.toLowerCase().includes("increase")) {
      increaseStep(e.target.htmlFor);
    } else if (e.target.id.toLowerCase().includes("decrease")) {
      decreaseStep(e.target.htmlFor);
    }
  });
});
function increaseStep(rangeElementId) {
  const input = document.getElementById(rangeElementId);
  if (input.value <= 99) {
    let value = parseInt(input.value) + 5;
    input.value = value;
    input.nextElementSibling.nextElementSibling.value = value;
  }
}
function decreaseStep(rangeElementId) {
  const input = document.getElementById(rangeElementId);
  if (input.value > 0) {
    let value = parseInt(input.value) - 5;
    input.value = value;
    input.nextElementSibling.nextElementSibling.value = value;
  }
}

async function fetchCollegeDetails() {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=India"
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const colleges = await response.json();
  return colleges;
}
fetchCollegeDetails()
  .then((colleges) => {
    const collegeDropdown = document.getElementById("clg-names");
    let dropDownHtml = "<option value=''>Please Select Your College / University</option>";
    colleges.forEach((college) => {
      dropDownHtml += `<option value="${college.name}">${college.name}</option>`;
    });
    console.log(collegeDropdown);
    collegeDropdown.innerHTML=dropDownHtml;
    // console.log(collegeDropdown);
  })
  .catch((error) => {
    error.message; // 'An error has occurred: 404'
  });

function validation() {
  var fname = document.getElementById("fname").value;
  // var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("cname").value;
  var number = document.getElementById("mNumb").value;
  var fnamecheck = /^[A-Za-z. ]{3,20}$/;
  var countrycheck = /^[A-Za-z. ]{1,20}$/;
  var emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var phonecheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  //   validate first name
  if (fnamecheck.test(fname)) {
    document.getElementById("fnameError").innerHTML = "";
  } else {
    document.getElementById("fnameError").innerHTML =
      "**Should not contain digits and special characters";
    console.log(document.getElementsByClassName("fnameError").innerHTML);
    return false;
  }

  //validate last name
  // if (lnamecheck.test(lname)) {
  //   document.getElementById("lnameError").innerHTML = "";
  // } else {
  //   document.getElementById("lnameError").innerHTML =
  //     "**Should not contain digits and special characters";
  //   return false;
  // }
  //validate country
  if (countrycheck.test(country)) {
    document.getElementById("countryError").innerHTML = "";
  } else {
    document.getElementById("countryError").innerHTML =
      "**Should not contain digits and special characters";
    return false;
  }
  //validate phone
  if (phonecheck.test(number)) {
    document.getElementById("mobileError").innerHTML = "";
  } else {
    document.getElementById("mobileError").innerHTML =
      "**phone number is invalid";
    return false;
  }
  //validate email
  if (emailcheck.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "**Email-id is invalid";
    return false;
  }
  
}

// var modal = document.getElementById("preview");
// var btn = document.getElementById("submit");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }