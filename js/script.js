function clickQco() {
  const cols = document.querySelectorAll(".parte");
  const cols2 = document.querySelectorAll(".a");

  cols.forEach((col) => {
    col.classList.add("none");
  });

  cols2.forEach((col2) => {
    col2.classList.remove("none");
  });
}

function clickBar() {
  const cols = document.querySelectorAll(".parte");
  const cols2 = document.querySelectorAll(".b");

  cols.forEach((col) => {
    col.classList.add("none");
  });

  cols2.forEach((col2) => {
    col2.classList.remove("none");
  });
}

function clickSham() {
  const cols = document.querySelectorAll(".parte");
  const cols2 = document.querySelectorAll(".c");

  cols.forEach((col) => {
    col.classList.add("none");
  });

  cols2.forEach((col2) => {
    col2.classList.remove("none");
  });
}
function clickAll() {
  const cols = document.querySelectorAll(".parte");

  cols.forEach((col) => {
    col.classList.remove("none");
  });
}
