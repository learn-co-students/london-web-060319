// form input read
const form = document.querySelector("form");

form.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const userCred = {
    userName: event.target[0].value,
    password: event.target[1].value
  };
  console.log(userCred);
}

const p = document.querySelector("p");

p.addEventListener("click", pClickHandler);

function pClickHandler({ target }) {
  console.log(target);
}
