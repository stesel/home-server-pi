export function userAuthentication() {
    const password = prompt("Enter password:", "");

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password }),
    };

    return fetch("/users/authenticate", requestOptions)
        .then(response => response.ok);
}
