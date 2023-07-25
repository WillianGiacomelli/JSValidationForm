const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");
const spans = document.getElementsByTagName("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //verificar se o nome está vazio
  if (nameInput.value === "" || nameInput.value.length <= 3) {
    nameInput.style.border = "2px solid #e63636";
    spans[0].classList.remove("hide");
    spans[0].textContent =
      'O campo "Nome" é obrigatório e deve ter mais de 3 letras!';

    setTimeout(() => {
      spans[0].textContent = "";
    }, 5000);
    return;
  }

  //verifica se o e-mail está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    emailInput.style.border = "2px solid #e63636";
    spans[1].classList.remove("hide");
    spans[1].textContent =
      'O campo "E-mail" é obrigatório e deve ser do formato email@example.com!';

    setTimeout(() => {
      spans[1].textContent = "";
    }, 5000);
    return;
  }

  if (!validatePassword(passwordInput.value, 8)) {
    passwordInput.style.border = "2px solid #e63636";
    spans[2].classList.remove("hide");
    spans[2].textContent = " A senha precisa conter no mínimo 8 digitos";
    setTimeout(() => {
      spans[2].textContent = "";
    }, 5000);
    return;
  }

  //verificar se a situação foi selecionada
  if (jobSelect.value === "") {
    jobSelect.style.border = "2px solid #e63636";
    spans[3].classList.remove("hide");
    spans[3].textContent = " Por favor, selecione a sua situação";
    setTimeout(() => {
      spans[3].textContent = "";
    }, 5000);
    return;
  }

  //verifica que a mensagem está preenchida
  if (messageTextarea.value === "") {
    messageTextarea.style.border = "2px solid #e63636";
    spans[4].classList.remove("hide");
    spans[4].textContent = " Por favor, preencha a mensagem";
    setTimeout(() => {
      spans[4].textContent = "";
    }, 5000);
    return;
  }
  //se todos os campos estiverem corretamente preenchidos
  form.submit();
  alert("Form enviado");
});

//função para validar email
function isEmailValid(email) {
  //regex para validar email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

//função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //senha é valida
    return true;
  }
  //senha invalida
  return false;
}
