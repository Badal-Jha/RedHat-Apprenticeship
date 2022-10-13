const patterns = [
  {
    fieldName: "fname",
    regex: /^[A-Za-z. ]{3,20}$/,
    errorMessage: "**Should not contain digits and special characters",
  },
  {
    fieldName: "lname",
    regex: /^[A-Za-z. ]{3,20}$/,
    errorMessage: "**Should not contain digits and special characters",
  },
  {
    fieldName: "cname",
    regex: /^[A-Za-z. ]{1,20}$/,
    errorMessage: "**Should not contain digits and special characters",
  },
  {
    fieldName: "email",
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    errorMessage: "**Email-id is invalid",
  },
  {
    fieldName: "mNumb",
    regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    errorMessage: "**phone number is invalid",
  },
];
let isCorrect = [
  { fieldName: "fname", value: false },
  { fieldName: "lname", value: false },
  { fieldName: "cname", value: false },
  { fieldName: "mNumb", value: false },
  { fieldName: "email", value: false },
  { fieldName: "clg-names", value: true },
  { fieldName: "radio", value: false },
  { fieldName: "dob", value: false },
];

function formData() {}

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
    let dropDownHtml =
      "<option value='select college'>Please Select Your College / University</option>";
    colleges.forEach((college) => {
      dropDownHtml += `<option value="${college.name}">${college.name}</option>`;
    });
    collegeDropdown.innerHTML = dropDownHtml;

    // var ddl = document.getElementById("cardtype");
    collegeDropdown.onchange = () => {
      // console.log(collegeDropdown.options[collegeDropdown.selectedIndex].value)
      var selectedValue =
        collegeDropdown.options[collegeDropdown.selectedIndex].value;

      if (!(selectedValue == "select college")) {
        isCorrect.forEach((ele) => {
          if (ele.fieldName == "clg-names") ele.value = true;
        });
      }
    };
  })
  .catch((error) => {
    error.message;
  });

const inputs = document.querySelectorAll(
  "input[type='text'],input[type='email']"
);
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const pattern = patterns.filter(
      (pattern) => pattern.fieldName == e.target.id
    );
    validate(
      e.target.value,
      pattern[0].regex,
      pattern[0].errorMessage,
      pattern[0].fieldName
    );
  });
});
function buttonEnabled() {
  let flag = true;
  isCorrect.forEach((ele) => {
    if (ele.value == false) flag = false;
  });

  if (flag) {
    document.getElementById("send").disabled = false;
  } else document.getElementById("send").disabled = true;
}

function resetForm() {
  document.getElementById("send").disabled = true;
  form.reset();
  isCorrect.map((field) => {
    field.value = false;
  });
}

function validate(field, regex, errorMessage, id) {
  if (regex.test(field)) {
    document.getElementById(`${id}Error`).innerHTML = "";
    isCorrect.map((field) => {
      if (field.fieldName == id) {
        field.value = true;
      }
    });
    buttonEnabled();
  } else {
    document.getElementById(`${id}Error`).innerHTML = errorMessage;
    isCorrect.map((field) => {
      if (field.fieldName == id) {
        field.value = false;
      }
    });
  }
}

const radioInputs = document.querySelectorAll("input[type='radio']");
radioInputs.forEach((radioInput) => {
  radioInput.addEventListener("click", (e) => {
    if (e.target.id == "male" || e.target.id == "femelle")
      isCorrect.forEach((ele) => {
        if (ele.fieldName == "radio") ele.value = true;
      });
    console.log(isCorrect);
  });
});
const dob = document.getElementById("dob");
dob.onchange = () => {
  if (dob.value) {
    isCorrect.forEach((ele) => {
      if (ele.fieldName == "dob") ele.value = true;
    });
  }
};

var modal = document.getElementById("preview");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
var nameReview = document.getElementById("nameReview");
var lnameReview = document.getElementById("lnameReview");
var emailReview = document.getElementById("emailReview");
var countryReview = document.getElementById("countryReview");
var collegeReview = document.getElementById("collegeReview");
var dobReview = document.getElementById("dobReview");
var htmlReview = document.getElementById("htmlReview");
var cssReview = document.getElementById("cssReview");
var jsReview = document.getElementById("jsReview");
// const skillBarInputs = document.querySelectorAll(".skill-input-controls");

btn.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "block";
  submittedData();
};
//submitted Data
function submittedData() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  nameReview.innerText = fname + " " + lname;
  emailReview.innerText = document.getElementById("email").value;
  countryReview.innerText = document.getElementById("cname").value;
  collegeReview.innerText =
    document.getElementById("clg-names").options[
      document.getElementById("clg-names").selectedIndex
    ].value;
  dobReview.innerText = document.getElementById("dob").value;
  htmlReview.innerText = `HTML- ${
    document.getElementById("htmlOutput").value
  }%`;
  cssReview.innerText = `CSS- ${document.getElementById("cssOutput").value}%`;
  jsReview.innerText = `JS- ${document.getElementById("jsOutput").value}%`;
}

span.onclick = function () {
  modal.style.display = "none";
  resetForm();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetForm();
  }
};
