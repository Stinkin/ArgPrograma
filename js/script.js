
function clickParam(param) {
  const cols = document.querySelectorAll(".parte");
  const cols2 = document.querySelectorAll(param);

  cols.forEach((col) => {
    col.classList.add("none");
  });
  
  cols2.forEach((col2) => {
    col2.classList.remove("none");
  });
}