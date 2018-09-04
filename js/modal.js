  var write = document.querySelector(".write-us-button");
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal-close");
  var formModal = document.querySelector(".write-us-popup");
  var username = document.querySelector("[name=username]");
  var email = document.querySelector("[name=e-mail]");
  var message = document.querySelector("[name=message]")
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }
  write.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  });

  formModal.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!username.value || !email.value || !message.value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
      }
    }
  });
