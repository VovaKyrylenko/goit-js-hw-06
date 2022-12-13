const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.elements.email.value === "" || form.elements.password.value === ""
    ? alert("Всі поля мають бути заповнені!")
    : console.log({
        email: form.elements.email.value,
        password: form.elements.password.value,
      });
  form.reset();
});
