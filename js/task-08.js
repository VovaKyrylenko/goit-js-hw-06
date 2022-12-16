const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert("Всі поля мають бути заповнені!");
  } else {
    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  }
});
