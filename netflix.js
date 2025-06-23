// Check if there are any <h1> elements in the document
var h1Elements = document.getElementsByTagName("h1");
if (h1Elements.length > 0) {
  // If there are <h1> elements, change the innerHTML of the first one
  h1Elements[0].innerHTML = "This is changed";
} else {
  console.log("No <h1> elements found in the document.");
}

// Check if an element with id "dom" exists in the document
var domElement = document.getElementById("dom");
if (domElement) {
  // If the element exists, change its innerHTML
  domElement.innerHTML = "this is changed";
} else {
  console.log("Element with id 'dom' not found.");
}