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

    fetch("https://formspree.io/f/mayvzzzw", {
            method: "POST",
            body: formData,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}