function getinfo() {

  const nameInput = document.getElementById("username") as HTMLInputElement;
  const nameInputValue = nameInput.value;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const emailInputValue = emailInput.value;

  const ageInput = document.getElementById("age") as HTMLInputElement;
  const ageInputValue = ageInput.value;

  console.log(nameInputValue);
  console.log(emailInputValue);
  console.log(ageInputValue);

}
