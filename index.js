const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

// Generar contraseña
btnEl.addEventListener("click", () => {
  createPassword();
});

// Copiar contraseña y mostrar alerta 4 segundos
copyIconEl.addEventListener("click", () => {
  if (!inputEl.value) return;

  navigator.clipboard.writeText(inputEl.value);

  alertContainerEl.innerText = "Contraseña copiada";
  alertContainerEl.classList.add("active");

  setTimeout(() => {
    alertContainerEl.classList.remove("active");
  }, 4000); // 4 segundos
});

// Crear contraseña
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars[randomNum];
  }

  inputEl.value = password;
}
