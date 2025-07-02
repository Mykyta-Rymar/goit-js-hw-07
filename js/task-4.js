const form = document.querySelector(".login-form");

const inputE = document.querySelector('[name="email"]');
const inputP = document.querySelector('[name="password"]');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email;
  const password = event.target.elements.password;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    form.reset();
    return;
  } else {
    const data = {
      emailA: emailValue,
      passwordA: passwordValue,
    };
    console.log(data);
  }
  form.reset();
}
