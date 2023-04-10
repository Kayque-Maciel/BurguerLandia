//-----------INÍCIO NAV BAR----------//
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s")
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent()
        }

        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init()

//----------FIM NAV BAR---------//

//---------INÍCIO SLIDER--------//
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" +count).checked = true;
}
//-----------FIM SLIDER----------//