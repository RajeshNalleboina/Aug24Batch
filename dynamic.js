// // XMLHttpRequest(AJAX call)
// function getJson(file, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET", file, true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status == "200") {
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send();
// }
// // calling the function
// getJson("data.json", function (text) {
//   var d = JSON.parse(text);
//   console.log(d);
// });

// Get the json data by usig Fetch API Method
fetch("data.json")
  .then((rajesh) => {
    return rajesh.json();
  })
  .then((data) => {
    console.log("fetch API");
    suryaData(data.tdata);
    trainersDetails(data.trainers);
  });
// implementing the code

var main = document.getElementById("main");
console.log(main);
// create h1 tag to display the name cardView
var cardViewName = document.createElement("h1");
// write the text in h1 tag
cardViewName.textContent = "Card View";
// add child to the parent
main.appendChild(cardViewName);

// create card1 child1
var section = document.createElement("section");
section.setAttribute("class", "card");
var image = document.createElement("img");
image.src = "download.png";
image.alt = "Profile Image";

// add child1 to the section
section.appendChild(image);
// function creation
function suryaData(surya) {
  // console.log(surya.e);
  let name = document.createElement("h2");
  name.textContent = surya.name;
  // add child2 to the section
  section.appendChild(name);

  // Phone Number
  let phoneNo = document.createElement("h2");
  phoneNo.textContent = surya.phone;
  // add child2 to the section
  section.appendChild(phoneNo);

  // email
  let emailId = document.createElement("h2");
  emailId.textContent = surya.email;
  // add child2 to the section
  section.appendChild(emailId);
}
// end function

// function for getting trainer array data
var section1 = document.createElement("section");
function trainersDetails(trainer) {
  for (i in trainer) {
    var image = document.createElement("img");
    image.src = "download.png";
    image.alt = trainer[i].name + "image";
    section1.appendChild(image);

    let name = document.createElement("h2");
    name.textContent = trainer[i].name;
    section1.appendChild(name);

    // Phone Number
    let phoneNo = document.createElement("h2");
    phoneNo.textContent = trainer[i].phone;
    section1.appendChild(phoneNo);

    // email
    let emailId = document.createElement("h2");
    emailId.textContent = trainer[i].email;
    section1.appendChild(emailId);
  }
  // end for loop
}

main.appendChild(section);
main.appendChild(section1);
