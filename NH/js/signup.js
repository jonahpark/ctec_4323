function formSubmission() {
    console.log("formsubmit");
    storeInfoToLocalStorage();
}

function getFirstName() {
    return $("input[name=firstName]").val();
}

function getLastName() {
    return $("input[name=lastName]").val();
}

function getEmail() {
    return $("input[name=email]").val();
}

function getUsername() {
    return $("input[name=username]").val();
}

function getPassword() {
    return $("input[name=password]").val();
}

function storeInfoToLocalStorage() {
    myStorage = window.localStorage;
    console.log(getFirstName());
    myStorage.setItem('firstName', getFirstName());
    myStorage.setItem('lastName', getLastName());
    myStorage.setItem('email', getEmail());
    myStorage.setItem('username', getUsername());
    myStorage.setItem('password', getPassword());
}
