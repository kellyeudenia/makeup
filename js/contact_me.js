var form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'email',
        document.querySelector('input[name="surname"]').value
    )
    formData.append(
        'email',
        document.querySelector('input[name="email"]').value
    )

    fetch("https://getform.io/f/6b6549ce-aa5e-4f03-bdb3-6f9740414cf9", {
            method: "POST",
            body: formData,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}