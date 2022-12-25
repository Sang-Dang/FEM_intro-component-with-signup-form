const nonEmptyObjects = document.getElementsByClassName("non-empty");
const errorIcons = document.getElementsByClassName("erroricon");
const errormsgs = document.getElementsByClassName("errormsg");
var flag;

function isEmpty(string) {
    return (
        string == null ||
        string.match(/^ *$/) !== null ||
        string.match(/^\s*$/) !== null
    );
}

function checkNonEmpty() {
    for (var i = 0; i < nonEmptyObjects.length; i++) {
        if (isEmpty(nonEmptyObjects[i].value)) {
            if (!errorIcons[i].classList.contains("active")) {
                errorIcons[i].classList.add("active");
            }
            errormsgs[i].innerHTML =
                nonEmptyObjects[i].placeholder + " cannot be empty";
            errormsgs[i].style.display = "block";
            nonEmptyObjects[i].style.borderColor = "hsl(0, 100%, 74%)";
            flag = false;
        } else {
            errorIcons[i].classList.remove("active");
            errormsgs[i].style.display = "none";
            nonEmptyObjects[i].style.borderColor = "rgba(0, 0, 0, .2)";
        }
    }
}
function checkEmail() {
    const emailaddress = document.getElementById("email").value.toLowerCase();
    if (!isEmpty(emailaddress)) {
        if (
            !emailaddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ) {
            if (!errorIcons[2].classList.contains("active")) {
                errorIcons[2].classList.add("active");
            }
            errormsgs[2].innerHTML = "Looks like this is not an email";
            errormsgs[2].style.display = "block";
            nonEmptyObjects[2].style.borderColor = "hsl(0, 100%, 74%)";
            flag = false;
        } else {
            errorIcons[2].classList.remove("active");
            errormsgs[2].style.display = "none";
            nonEmptyObjects[2].style.borderColor = "rgba(0, 0, 0, .2)";
        }
    }
}

function submitForm() {
    flag = true;
    checkNonEmpty();
    checkEmail();
    if(flag) {
        alert("success");
    }
}
