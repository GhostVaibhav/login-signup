firebase.initializeApp(firebaseConfig);
async function getUserName() {
    var user = await firebase.auth().currentUser;
    if (user)
        var email = user.email;
    else
        var email = "Not logged in";
    document.getElementById("username").innerHTML = email;
}
function signOut() {
    if (firebase.auth().currentUser) {
        auth.signOut();
        alert("Signed Out");
    }
    document.getElementById("username").innerHTML = "Not logged in";
}
$(document).ready(function () {
    
});