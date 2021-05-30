// Selectors
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");
const header = document.querySelector("header");

/*
Create and insert search bar
*/
function showHeader() {
  header.insertAdjacentHTML(
    "beforeend",
    `<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`
  );
}

/*
Create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  studentList.innerHTML = "";
  console.log(list);

  for (let i = 0; i < list.length; i++) {
    // assigning to info to variables for readability
    let firstName = list[i].name.first;
    let lastName = list[i].name.last;
    let picture = list[i].picture.large;
    let email = list[i].email;
    let register = list[i].registered.date;
    // inserting html
    if (i >= startIndex && i < endIndex) {
      studentList.insertAdjacentHTML(
        "beforeend",
        `  
       <li class="student-item cf">
       <div class="student-details">
         <img class="avatar" src="${picture}" alt="Profile Picture">
         <h3>${firstName} ${lastName}</h3>
         <span class="email">${email}</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined ${register}</span>
       </div>
     </li>`
      );
    }
  }
}

/*
Create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  linkList.innerHTML = `<li>
  <button type="button" class="active">1</button>
</li>`;
  for (let i = 2; i < list.length / 9 + 1; i++) {
    linkList.insertAdjacentHTML(
      "beforeend",
      ` <li>
    <button type="button">${i}</button>
  </li>`
    );
  }
}

// removes/adds active class
// displays corresponding list to button #
linkList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let buttons = document.querySelectorAll("button[type='button']");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList = "";
      e.target.classList = "active";
    }
    showPage(data, e.target.innerHTML);
  }
});

// Call functions
showHeader();
showPage(data, 1);
addPagination(data);
