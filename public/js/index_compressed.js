var config={apiKey:"AIzaSyCcIuaDuAx9NFJKzBj4FkuR3e320eGuS_g",authDomain:"nbadex-ff8cf.firebaseapp.com",databaseURL:"https://nbadex-ff8cf.firebaseio.com",storageBucket:"nbadex-ff8cf.appspot.com",messagingSenderId:"172457613001"};firebase.initializeApp(config);const auth=firebase.auth();var provider=new firebase.auth.GoogleAuthProvider,firstTimeSignup=!1;$(".form-signin").on("submit",function(a){a.preventDefault();const b=document.getElementById("LogInEmail").value,c=document.getElementById("LogInPassword").value,d=auth.signInWithEmailAndPassword(b,c);d.catch(function(a){var b=a.code,c=a.message;"auth/wrong-password"==b?$("#err-msg").html("Invalid password!"):"auth/invalid-email"==b?$("#err-msg").html("Invalid email"):"auth/user-not-found"==b?$("#err-msg").html("User not found!"):$("#err-msg").html(c),$("#login-error").css("visibility","visible")})}),$(".form-signup").on("submit",function(a){a.preventDefault(),firstTimeSignup=!0;const b=document.getElementById("SignUpEmail").value,c=document.getElementById("SignUpPassword").value,d=auth.createUserWithEmailAndPassword(b,c);d.catch(function(a){var b=a.code,c=a.message;"auth/email-already-in-use"==b?$("#err-msg").html("Email already in use"):"auth/invalid-email"==b?$("#err-msg").html("Invalid email"):"auth/weak-password"==b?$("#err-msg").html("Password too weak!"):$("#err-msg").html(c),$("#login-error").css("visibility","visible")})}),$("#googlebtn").click(function(){firebase.auth().signInWithPopup(provider)}),firebase.auth().onAuthStateChanged(function(a){a&&(firstTimeSignup?(currentU=firebase.auth().currentUser,currentU.updateProfile({displayName:document.getElementById("SignUpName").value}).then(function(){window.location="views/myTeam.html"})):window.location="views/myTeam.html")}),$(".alert .close").on("click",function(a){$(this).parent().hide()}),$("#close-btn").click(function(){$("#login-error").css("visibility","hidden")}),$(".hide-alert").focusin(function(){$("#login-error").css("visibility","hidden")});