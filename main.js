function validation() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("cname").value;
  var number = document.getElementById("mNumb").value;
  var fnamecheck = /^[A-Za-z. ]{3,20}$/;
  var lnamecheck = /^[A-Za-z. ]{3,20}$/;
  var countrycheck = /^[A-Za-z. ]{3,20}$/;
  var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
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
  if (lnamecheck.test(lname)) {
    document.getElementById("lnameError").innerHTML = "";
  } else {
    document.getElementById("lnameError").innerHTML =
      "**Should not contain digits and special characters";
    return false;
  }
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
