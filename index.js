document.getElementById('hamburgerButton').addEventListener('click', () =>{
    if(document.getElementById('hamburgerMenu').getAttribute('class') === 'hamburgerMenu2' ){
        openHamburger()
    } else  {
        closeHamburger()
    }
})

document.querySelectorAll('.hamburgerLink').forEach(link => {
    link.addEventListener('click', () => {
        closeHamburger()
    })
})

document.getElementById('hamburgerMenu').addEventListener('click', () => {
    closeHamburger()
})

function openHamburger() {
    document.getElementById('hamburgerMenu').setAttribute('class', 'hamburgerMenu1')
    document.getElementById('hamburgerButton').setAttribute('class', 'hamburgerButtonOpen')
    document.getElementById('mobileNav').setAttribute('class', 'mobileNavOpen')
}

function closeHamburger () {
    document.getElementById('hamburgerMenu').setAttribute('class','hamburgerMenu2')
    document.getElementById('hamburgerButton').setAttribute('class','hamburgerButtonClosed')
    document.getElementById('mobileNav').setAttribute('class','mobileNav')
}