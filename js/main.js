const containerElement = document.querySelector(".container")
containerElement.innerHTML += `<table class="table"></table>`
containerElement.innerHTML += `<p class="loader"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="grey"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg> Loading...</p>`
const tableElement = containerElement.querySelector(".table")

function generateTable(users) {
    tableElement.innerHTML += `
        <tr class="tr-head">
            <th width="30px"><input type="checkbox" class="check-all"></th>
            <th>Name</th>
            <th>Email address</th>
            <th>Role</th>
            <th>Address</th>
            <th></th>
        </tr>
    `
    //mockdatadan kerakli malumotlar topilmagani uchun Permisson o'rniga Address qo'shdim
    users.forEach((user) => {
        tableElement.innerHTML += `
        <tr class="tr-body">
            <td><input type="checkbox" class="rowCheckbox"></td>
            <td class="td-image"><img class="td__image" src="${user.image}" alt="user-image"> ${user.firstName} ${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.address.state}</td>
            <td><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4C585B"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></a></td>
        </tr>
        `
    });

    tableElement.querySelector(".check-all").addEventListener("click", (event) => {
        let checkboxes = document.querySelectorAll(".rowCheckbox");
        checkboxes.forEach(checkbox => {
            checkbox.checked = event.target.checked;
        });
    });

}

fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((result) => {
        generateTable(result.users)
        document.querySelector(".loader").innerHTML = ""
    })