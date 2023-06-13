const addBtn = document.querySelector(".add-btn");
const addForm = document.querySelector(".add-form");
const modal = document.querySelector(".modal");
const addContact = document.querySelector("#add-contact");
const closeModalBtn = document.querySelector("#close-modal");
const nameInput = document.querySelector("#name-input");
const surnameInput = document.querySelector("#surname-input");
const phoneInput = document.querySelector("#phone-input");
const imagineInput = document.querySelector("#imagine-input");
const editCancel = document.querySelector("#edit-cancel");
const editSubmit = document.querySelector(".edit-submit");
const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");

// const modal2 = document.querySelector(".modal2");
// const modal2Header = document.querySelector(".modal2-header");
// const close2Modal = document.querySelector("#close2-modal");
// const add2Form = document.querySelector(".add2-form");
// const name2Input = document.querySelector("#name2-input");
// const surname2Input = document.querySelector("#surname2-input");
// const phone2Input = document.querySelector("#phone2-input");
// const imagine2Input = document.querySelector("#imagine2-input");
// const edit2Cancel = document.querySelector("#edit2-cancel");
// const edit2Submit = document.querySelector(".edit2-submit");

// console.log(
//   modal2,
//   modal2Header,
//   close2Modal,
//   add2Form,
//   name2Input,
//   surname2Input,
//   phone2Input,
//   imagine2Input,
//   edit2Cancel,
//   edit2Submit
// );

// console.log(container);
// console.log(addBtn, addForm);
// console.log(
//   addContact,
//   closeModalBtn,
//   nameInput,
//   surnameInput,
//   phoneInput,
//   imagineInput,
//   editCancel,
//   editSubmit
// );

addBtn.addEventListener("click", (e) => {
  addContact.style.visibility = "visible";

  render();
});
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
render();

function render() {
  container1.innerHTML = "";
  contacts.forEach((item) => {
    container1.innerHTML += `<div class="contact-item">
                <span>${item.name}</span>
                <span>${item.surname}</span>
                <span>${item.phone}</span>
                <img class="test" src="${item.imagine}"/>
                <div class="div5-1"><button id="${item.id}" class="edit-btn">
      Edit
    </button>
    <button id="${item.id}" class="delete-btn">
      Delete
    </button></div>

              
            </div>
            `;
  });
}

// nameInput.addEventListener("input", (e) => {
//   console.log(nameInput.value);
// });
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !nameInput.value.trim() ||
    !surnameInput.value.trim() ||
    !phoneInput.value.trim() ||
    !imagineInput.value.trim()
  ) {
    return;
  }

  const contact = {
    id: Date.now(),
    name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneInput.value,
    imagine: imagineInput.value,
  };
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  //   console.log(contacts);
  //   nameInput.addEventListener("input", (e) => {
  //     console.log(nameInput.value);
  //   });
  nameInput.value = "";
  surnameInput.value = "";
  phoneInput.value = "";
  imagineInput.value = "";
  render();
});

//!Close
// //? обработчик события для закрытия модалки(Х)
closeModalBtn.addEventListener("click", () => {
  addContact.style.visibility = "hidden";
});
// //? обработчик события для закрытия модалки(cancel)
editCancel.addEventListener("click", () => {
  addContact.style.visibility = "hidden";
});

// //! Save
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    editSubmit.id == e.target.id;
  }
});

editSubmit.addEventListener("click", (e) => {
  if (
    !nameInput.value.trim() ||
    !surnameInput.value.trim() ||
    !phoneInput.value.trim() ||
    !imagineInput.value.trim()
  ) {
    return;
  }
  contacts = contacts.map((item) => {
    if (item.id == editSubmit.id) {
      item.name = nameInput.value;
      item.surname = surnameInput.value;
      item.phone = phoneInput.value;
      item.imagine = imagineInput.value;
    }
    return item;
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  render();

  editCancel.click();
  //   modal.style.visibility = "hidden";
});

//! Delete
//? обработчик события для удаления
//? так как кнопки удаления изначально нет в HTML мы вешаем обработчик события на document
document.addEventListener("click", (e) => {
  //? выполняем удаление только если элемент содержит класс delete-btn
  if (e.target.classList.contains("delete-btn")) {
    // console.log(e.target.id);
    //? оставляем в массиве все элементы кроме того на который мы нажали
    todos = todos.filter((item) => item.id != e.target.id);
    //? сохраняем в локалСтораже актуальные данные
    localStorage.setItem("todos", JSON.stringify(todos));
    //? отображаем на странице
    render();
  }
});

//! edit
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    add2Contact.style.visibility = "visible";

    const todoToEdit = contacts.find((item) => item.id == e.target.id);
    console.log(todoToEdit);
    name2Input.value = todoToEdit.name;
    surname2Input.value = todoToEdit.surname;
    phone2Input.value = todoToEdit.phone;
    imagine2Input.value = todoToEdit.imagine;

    edit2Submit.id = e.target.id;
  }
});

//!Close
//? обработчик события для закрытия модалки(Х)
// close2Modal.addEventListener("click", () => {
//   add2Contact.style.visibility = "hidden";
// });
//? обработчик события для закрытия модалки(cancel)
// edit2Cancel.addEventListener("click", () => {
//   add2Contact.style.visibility = "hidden";
// });

//! Save
//? обработчик события для сохранения изменений(save)
editSubmit.addEventListener("click", (e) => {
  //? проверка на пустоту инпута
  if (!editInput.value.trim()) {
    return;
  }
  //? перебираем todos и меняя title у нужного элемнета на то что написали в инпуте
  todos = todos.map((item) => {
    if (item.id == e.target.id) {
      item.title = editInput.value;
    }
    return item;
  });
  //? сохраняем в локалСтораже актуальные данные
  localStorage.setItem("todos", JSON.stringify(todos));
  //? отображаем на странице
  render();
  //? скрываем модалку
  editCancel.click();
});

const modal2 = document.querySelector(".modal2");
const add2Contact = document.querySelector("#add2-contact");
const modal2Header = document.querySelector(".modal2-header");
const close2Modal = document.querySelector("#close2-modal");
const add2Form = document.querySelector(".add2-form");
const name2Input = document.querySelector("#name2-input");
const surname2Input = document.querySelector("#surname2-input");
const phone2Input = document.querySelector("#phone2-input");
const imagine2Input = document.querySelector("#imagine2-input");
const edit2Cancel = document.querySelector("#edit2-cancel");
const edit2Submit = document.querySelector(".edit2-submit");
