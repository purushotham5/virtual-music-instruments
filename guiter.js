/* heart animation started */
function tap() {

    var a;
    let heart = document.getElementById("like");
    let unheart = document.getElementById("unlike");


    if (a === true) {
        heart.style.display = "flex";
        unheart.style.display = "none"
        return a = false;
    } else {
        heart.style.display = "none";
        unheart.style.display = "flex";
        return a = true;
    }
}
/* this is pop */

var b;

var hearts = document.getElementById("like");
var unhearts = document.getElementById("unlike");

function pop() {

    if (b == true) {
        hearts.style.display = "none"
        unhearts.style.display = "flex";
    } else {

        hearts.style.display = "flex"
        unhearts.style.display = "none";
    }
}
/* heart animation is ended */








/* to open the payments method */
function openPay() {

    var a;
    var bg = document.getElementById("everything");
    var pop = document.getElementById("pay");
    if (a == true) {
        bg.style.display = "block"
        pop.style.display = "none";
        pop.style.transition = ".5s";
        return a = false;
    } else {

        bg.style.display = "none"
        pop.style.display = "flex";
        return a = true;
    }
}

function closePay() {
    var b;

    var bgg = document.getElementById("everything");
    var popp = document.getElementById("pay");

    if (b == true) {
        bgg.style.display = "none"
        popp.style.display = "flex";
        return b = false;
    } else {

        bgg.style.display = "block"
        popp.style.display = "none";
        return b = true;
    }
}
/* payments was ended */


/* this is for first one ratting */
function Star1() {
    /*     let round1 = document.getElementById("star1");
     */
    let con1 = document.getElementById("con1");
    let con2 = document.getElementById("con2");
    let con3 = document.getElementById("con3");
    let con4 = document.getElementById("con4");
    let con5 = document.getElementById("con5");
    let con6 = document.getElementById("con6");
    var a;
    if (a == true) {
        con1.style.display = "flex";
        con2.style.display = "none";

    } else {
        con1.style.display = "none";
        con2.style.display = "flex";
        con3.style.display = "none";
        con4.style.display = "none";
        con5.style.display = "none";
        con6.style.display = "none";
    }

}

function fstar1() {
    /*     let round1 = document.getElementById("star1");
     */
    let con11 = document.getElementById("con1");
    let con21 = document.getElementById("con2");
    let con31 = document.getElementById("con2");
    let con41 = document.getElementById("con2");
    let con51 = document.getElementById("con2");
    let con61 = document.getElementById("con2");
    var b;
    if (b == true) {
        con11.style.display = "none";
        con21.style.display = "flex";
        con31.style.display = "none";
        con41.style.display = "none";
        con51.style.display = "none";
        con61.style.display = "block";
    } else {

        con11.style.display = "flex";
        con21.style.display = "none";
        con31.style.display = "none";
        con41.style.display = "none";
        con51.style.display = "none";
        con61.style.display = "none";
    }

}
/* the one ratting was ended */
function Star2() {
    let cona = document.getElementById("con1");
    let conb = document.getElementById("con2");
    let conc = document.getElementById("con3");
    let cond = document.getElementById("con4");
    let cone = document.getElementById("con5");
    let conf = document.getElementById("con6");
    var c;
    if (c == true) {
        cona.style.display = "flex";
        conb.style.display = "none";

    } else {

        cona.style.display = "none";
        conb.style.display = "none";
        conc.style.display = "flex";

    }


}

function fstar2() {
    let cona1 = document.getElementById("con1");
    let conb1 = document.getElementById("con2");
    let conc1 = document.getElementById("con3");
    let cond1 = document.getElementById("con4");
    let cone1 = document.getElementById("con5");
    let conf1 = document.getElementById("con6");
    var d;
    if (d == true) {
        cona1.style.display = "none";
        conb1.style.display = "none";
        conc1.style.display = "flex";
    } else {
        conb1.style.display = "flex"
        conc1.style.display = "none";
    }

}
/* 
/* the two ratting was ended */
/* three ratting start */
function Star3() {
    let cona3 = document.getElementById("con1");
    let conb3 = document.getElementById("con2");
    let conc3 = document.getElementById("con3");
    let cond3 = document.getElementById("con4");
    let cone3 = document.getElementById("con5");
    let conf3 = document.getElementById("con6");
    var e;
    if (e == true) { /*  */
        cona3.style.display = "flex";
        conc3.style.display = "none";
        cond3.style.display = "none";

    } else {

        cona3.style.display = "none";
        conb3.style.display = "none";
        conc3.style.display = "none";
        cond3.style.display = "flex";
    }

}

function fstar3() {
    let conaa3 = document.getElementById("con1");
    let conbb3 = document.getElementById("con2");
    let concc3 = document.getElementById("con3");
    let condd3 = document.getElementById("con4");
    let conee3 = document.getElementById("con5");
    let conff3 = document.getElementById("con6");
    var f;
    if (f == true) {
        conaa3.style.display = "none";
        condd3.style.display = "flex";
    } else {
        concc3.style.display = "flex"
        condd3.style.display = "none";
    }

}
/* three star animmation was ended */
/* this is for fourth star */
function Star4() {
    let cona4 = document.getElementById("con1");
    let conb4 = document.getElementById("con2");
    let conc4 = document.getElementById("con3");
    let cond4 = document.getElementById("con4");
    let cone4 = document.getElementById("con5");
    let conf4 = document.getElementById("con6");
    var e;
    if (e == true) { /*  */
        cona4.style.display = "flex";
        conc4.style.display = "none";
        cond4.style.display = "none";
        cone4.style.display = "none";

    } else {

        cona4.style.display = "none";
        conb4.style.display = "none";
        conc4.style.display = "none";
        cond4.style.display = "none";
        cone4.style.display = "flex";
    }

}

function fstar4() {
    let conaa4 = document.getElementById("con1");
    let conbb4 = document.getElementById("con2");
    let concc4 = document.getElementById("con3");
    let condd4 = document.getElementById("con4");
    let conee4 = document.getElementById("con5");
    let conff4 = document.getElementById("con6");
    var f;
    if (f == true) {
        conaa4.style.display = "none";
        condd4.style.display = "none";
        conee4.style.display = "flex";
    } else {
        concc4.style.display = "none";
        condd4.style.display = "flex";
        conee4.style.display = "none";
    }

}
/* fourth star is ended fourth star */
/* this is for fifth star */
function Star5() {
    let cona5 = document.getElementById("con1");
    let conb5 = document.getElementById("con2");
    let conc5 = document.getElementById("con3");
    let cond5 = document.getElementById("con4");
    let cone5 = document.getElementById("con5");
    let conf5 = document.getElementById("con6");
    var g;
    if (g == true) { /*  */
        cona5.style.display = "flex";
        conc5.style.display = "none";
        cond5.style.display = "none";
        cone5.style.display = "none";
        conf5.style.display = "none";

    } else {

        cona5.style.display = "none";
        conb5.style.display = "none";
        conc5.style.display = "none";
        cond5.style.display = "none";
        cone5.style.display = "none";
        conf5.style.display = "flex";
    }

}

function fstar5() {
    let conaa5 = document.getElementById("con1");
    let conbb5 = document.getElementById("con2");
    let concc5 = document.getElementById("con3");
    let condd5 = document.getElementById("con4");
    let conee5 = document.getElementById("con5");
    let conff5 = document.getElementById("con6");
    var f;
    if (f == true) {
        conaa5.style.display = "none";
        condd5.style.display = "none";
        conee5.style.display = "none";
        conff5.style.display = "flex";
    } else {
        concc5.style.display = "none";
        condd5.style.display = "none";
        conee5.style.display = "none";
        conee5.style.display = "flex";
        conff5.style.display = "none";
    }

}
/* this is ended  */