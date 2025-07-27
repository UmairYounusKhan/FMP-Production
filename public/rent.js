// var firebaseConfig = {
//     apiKey: "AIzaSyDz9TDA2zKSPIRUfjBir1MhdAAqbceehzs",
//     authDomain: "fmp-client-website-827ba.firebaseapp.com",
//     databaseURL: "https://fmp-client-website-827ba-default-rtdb.firebaseio.com",
//     projectId: "fmp-client-website-827ba",
//     storageBucket: "fmp-client-website-827ba.appspot.com",
//     messagingSenderId: "850949060966",
//     appId: "1:850949060966:web:709b52de0af171522ef0a7",
//     measurementId: "G-WBWWQQP4WJ"
// };

// // Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);

// function submitrent() {
//     var Sfname = document.getElementById("Sfname");
//     var Slname = document.getElementById("Slname");
//     var Semail = document.getElementById("Semail");
//     var Snumber = document.getElementById("Snumber");
//     var car = document.getElementById("Scar");
//     var picdate = document.getElementById("Spickdate");
//     var dropdate = document.getElementById("Sdropdate");
//     var driver = document.getElementById("Sdriver");
//     var hours = document.getElementById("Shours");
//     var Scomment = document.getElementById("Smessage");
//     var Sremember = document.getElementById("Sremember");
//     var iid = Date.now().toString(29);

//     // && car.value  && driver.value && hours.value

//     if (Sfname.value && Slname.value && Semail.value && Snumber.value && picdate.value && dropdate.value  && Scomment.value && Sremember.checked&& car.value  && driver.value && hours.value) {
//         var obbj = {
//             key: iid,
//             firstname: Sfname.value,
//             lastname: Slname.value,
//             email: Semail.value,
//             number: Snumber.value,
//             car: car.value,
//             pickupdate: picdate.value,
//             droppdate: dropdate.value,
//             driver: driver.value,
//             hours: hours.value,
//             comment: Scomment.value,
//             remember: Sremember.checked
//         };
//         console.log(obbj);

//         // firebase.database().ref("userRentcar/" + iid).set(obbj)
//         // .then(function() {

//     } 
//     else {
//         alert("Please fill out all fields.");
//     }
// }
// 
// 
// 

var firebaseConfig = {
    apiKey: "AIzaSyDz9TDA2zKSPIRUfjBir1MhdAAqbceehzs",
    authDomain: "fmp-client-website-827ba.firebaseapp.com",
    databaseURL: "https://fmp-client-website-827ba-default-rtdb.firebaseio.com",
    projectId: "fmp-client-website-827ba",
    storageBucket: "fmp-client-website-827ba.appspot.com",
    messagingSenderId: "850949060966",
    appId: "1:850949060966:web:709b52de0af171522ef0a7",
    measurementId: "G-WBWWQQP4WJ"
};

var app = firebase.initializeApp(firebaseConfig);

function submitrent() {
    var Sfname = document.getElementById("Sfname");
    var Slname = document.getElementById("Slname");
    var Semail = document.getElementById("Semail");
    var Snumber = document.getElementById("Snumber");
    var car = document.getElementById("Scar");
    var picdate = document.getElementById("Spickdate");
    var dropdate = document.getElementById("Sdropdate");
    var driver = document.getElementById("Sdriver");
    var hours = document.getElementById("Shours");
    var Scomment = document.getElementById("Smessage");
    var Sremember = document.getElementById("Sremember");
    var iid = Date.now().toString(29);

    if ((Sfname.value != '') && (Slname.value != '') && (Semail.value != '') && (Snumber.value != '') && (picdate.value != '') && (dropdate.value != '') && Scomment.value && (car.value != 'Not Selected') && (driver.value != 'Not Selected') && (hours.value != 'Not Selected')) {
        var obbj = {
            key: iid,
            firstname: Sfname.value,
            lastname: Slname.value,
            email: Semail.value,
            number: Snumber.value,
            car: car.value,
            pickupdate: picdate.value,
            droppdate: dropdate.value,
            driver: driver.value,
            hours: hours.value,
            comment: Scomment.value,
            remember: Sremember.checked
        };
        console.log(obbj);
        firebase.database().ref("userRentcar/" + iid).set(obbj);
    } else {
        alert("Please fill out all fields.");
    }
}
