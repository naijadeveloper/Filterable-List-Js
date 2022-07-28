let filterInput = document.querySelector("#filterInput");
// Listen for keyup event of input
filterInput.addEventListener("keyup", filterNames);

function filterNames(e) {
  // Get value from input
  let filterValue = e.srcElement.value.toUpperCase().trim();
  // Get name ul
  let ul = e.srcElement.parentElement.querySelector("#names");
  // Get li(s) from ul
  let lis = ul.querySelectorAll(".collection-item");
  // loop through li(s)
  lis.forEach(li => {
    let a = li.querySelector("a");
    // textcontent of (a) matches what is in the input
    if(a.textContent.toUpperCase().indexOf(filterValue) == 0 && filterValue) {
      li.style.display = "";

      // slice the string of text in the input from the a tag and also slice the remaining text
      let typedString = a.textContent.slice(0, filterValue.length);

      let remainString = a.textContent.slice(filterValue.length, a.textContent.length);

      a.innerHTML = `<span>${typedString}</span>${remainString}`
    } else if(filterValue == "") {
      li.style.display = "block";

      let firstLetter = a.textContent.slice(0,1);
      let otherLetters = a.textContent.slice(1, a.textContent.length);

      a.innerHTML = firstLetter + otherLetters;
    } else {
      li.style.display = "none";
    }
  });
}