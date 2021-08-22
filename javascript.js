var x = window.matchMedia("(min-width:1000px)");
var b1 = document.getElementById('reviews-t');

function normalr() {
    if (!x.matches) {
        let a = document.getElementById("home-t");
        let b = document.getElementById("gallary-t");
        let c = document.getElementById("about-t");
        let d = document.getElementById("contact-t");
        a.style.color = "white";
        b.style.color = "white";
        b1.style.color = "white";
        c.style.color = "white";
        d.style.color = "white";
    }
}
function hi() {
    const mainMenu = document.getElementById("mainMenu");
    mainMenu.style.top = "-120%";
}

function show() {
    const mainMenu = document.getElementById("mainMenu");
    mainMenu.style.top = "0";
}

function effecthome() {
    if (x.matches) {
        let a = document.getElementById("home-t");
        var b1 = document.getElementById('reviews-t');
        let b = document.getElementById("gallary-t");
        let c = document.getElementById("about-t");
          let d = document.getElementById("contact-t");
          a.style.color = "black";
          b.style.color = "lightgrey";
          b1.style.color = "lightgrey";
          c.style.color = "lightgrey";
          d.style.color = "lightgrey";
          a.style.transition = "color 0.2s ease";
          b.style.transition = "color 0.2s ease";
          b1.style.transition = "color 0.2s ease";
          c.style.transition = "color 0.2s ease";
          d.style.transition = "color 0.2s ease";
        }
    }
    function normalhome() {
        if (x.matches) {
            var b1 = document.getElementById('reviews-t');
            let a = document.getElementById("home-t");
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "grey";
            b.style.color = "grey";
            b1.style.color = "grey";
            c.style.color = "grey";
            d.style.color = "grey";
          a.style.transition = "color 0.2s ease";
          b1.style.transition = "color 0.2s ease";
          b.style.transition = "color 0.2s ease";
          c.style.transition = "color 0.2s ease";
          d.style.transition = "color 0.2s ease";
        }
    }
    function effectgallary() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            var b1 = document.getElementById('reviews-t');
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "lightgrey";
            b.style.color = "black";
            b1.style.color = "lightgrey";
            c.style.color = "lightgrey";
            d.style.color = "lightgrey";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    function normalgallary() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            var b1 = document.getElementById('reviews-t');
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "grey";
            b.style.color = "grey";
            b1.style.color = "grey";
            c.style.color = "grey";
            d.style.color = "grey";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    
    function effectreviews() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            var b1 = document.getElementById('reviews-t');
            let d = document.getElementById("contact-t");
            a.style.color = "lightgrey";
            b.style.color = "lightgrey";
            b1.style.color = "black";
            c.style.color = "lightgrey";
            d.style.color = "lightgrey";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    function normalreviews() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            var b1 = document.getElementById('reviews-t');
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
          let d = document.getElementById("contact-t");
          a.style.color = "grey";
          b.style.color = "grey";
          b1.style.color = "grey";
          c.style.color = "grey";
          d.style.color = "grey";
          a.style.transition = "color 0.2s ease";
          b.style.transition = "color 0.2s ease";
          b1.style.transition = "color 0.2s ease";
          c.style.transition = "color 0.2s ease";
          d.style.transition = "color 0.2s ease";
        }
    }
    function effectaboutus() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            var b1 = document.getElementById('reviews-t');
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "lightgrey";
            b.style.color = "lightgrey";
            b1.style.color = "lightgrey";
            c.style.color = "black";
            d.style.color = "lightgrey";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    function normalaboutus() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            let b = document.getElementById("gallary-t");
            var b1 = document.getElementById('reviews-t');
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "grey";
            b.style.color = "grey";
            b1.style.color = "grey";
            c.style.color = "grey";
            d.style.color = "grey";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    function effectcontactus() {
        if (x.matches) {
            let a = document.getElementById("home-t");
            var b1 = document.getElementById('reviews-t');
            let b = document.getElementById("gallary-t");
            let c = document.getElementById("about-t");
            let d = document.getElementById("contact-t");
            a.style.color = "lightgrey";
            b.style.color = "lightgrey";
            b1.style.color = "lightgrey";
            c.style.color = "lightgrey";
            d.style.color = "black";
            a.style.transition = "color 0.2s ease";
            b.style.transition = "color 0.2s ease";
            b1.style.transition = "color 0.2s ease";
            c.style.transition = "color 0.2s ease";
            d.style.transition = "color 0.2s ease";
        }
    }
    function normalcontactus() {
        if (x.matches) {
            var b1 = document.getElementById('reviews-t');
            let a = document.getElementById("home-t");
            let b = document.getElementById("gallary-t");
          let c = document.getElementById("about-t");
          let d = document.getElementById("contact-t");
          a.style.color = "grey";
          b.style.color = "grey";
          b1.style.color = "grey";
          c.style.color = "grey";
          d.style.color = "grey";
          a.style.transition = "color 0.2s ease";
          b.style.transition = "color 0.2s ease";
          b1.style.transition = "color 0.2s ease";
          c.style.transition = "color 0.2s ease";
          d.style.transition = "color 0.2s ease";
        }
    }
    
