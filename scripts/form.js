var firebaseConfig = {
    apiKey: "AIzaSyAb61S8PSnQlZylRxDN3Z45846x8QWzJa0",
    authDomain: "helloworld-ad5a4.firebaseapp.com",
    databaseURL: "https://helloworld-ad5a4.firebaseio.com",
    projectId: "helloworld-ad5a4",
    storageBucket: "helloworld-ad5a4.appspot.com",
    messagingSenderId: "160048863837",
    appId: "1:160048863837:web:86eb13bccf2221ceb60bb4"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp() {
    var display = document.getElementById("Lname");
    var email = document.getElementById("Lemail");
    var password = document.getElementById("Lpassword");
    firebase.auth.createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
            user.updateProfile({
                displayName: display,
            })
                .catch(e => alert(e.message));
        });
}
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.then()
    .catch(e => alert(e.message));
}
function signOut() {
    if (firebase.auth().currentUser) {
        auth.signOut();
        alert("Signed Out");
    }
    document.getElementById("username").innerHTML = "Not logged in";
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("username").innerHTML = user.email;
        document.getElementById("container-status-log-in").style.visibility = "visible";
    }
    else {
        document.getElementById("username").innerHTML = "Not logged in";
        document.getElementById("container-status-failed").style.visibility = "visible";
    }
});

const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});