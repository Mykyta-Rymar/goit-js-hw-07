const form = document.querySelector(".login-form");

const inputE = document.querySelector('[name="email"]');
const inputP = document.querySelector('[name="password"]');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailA = event.target.elements.email;
  const passwordA = event.target.elements.password;

  const emailValue = emailA.value.trim();
  const passwordValue = passwordA.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  } else {
    form.reset();
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(data);
  }
}
