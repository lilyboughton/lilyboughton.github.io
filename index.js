document.getElementById('hamburgerButton').addEventListener('click', () =>{
    if(document.getElementById('hamburgerMenu').getAttribute('class') === 'hamburgerMenu2' ){
        document.getElementById('hamburgerMenu').setAttribute('class', 'hamburgerMenu1')
        document.getElementById('hamburgerButton').setAttribute('class', 'hamburgerButtonOpen')
        document.getElementById('mobileNav').setAttribute('class', 'mobileNavOpen')
    } else  {
        document.getElementById('hamburgerMenu').setAttribute('class','hamburgerMenu2')
        document.getElementById('hamburgerButton').setAttribute('class','hamburgerButtonClosed')
        document.getElementById('mobileNav').setAttribute('class','mobileNav')
    }
})

document.querySelectorAll('.hamburgerLink').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('hamburgerMenu').setAttribute('class','hamburgerMenu2')
        document.getElementById('hamburgerButton').setAttribute('class','hamburgerButtonClosed')
        document.getElementById('mobileNav').setAttribute('class','mobileNav')
    })
})

document.getElementById('hamburgerMenu').addEventListener('click', () => {
    document.getElementById('hamburgerMenu').setAttribute('class','hamburgerMenu2')
    document.getElementById('hamburgerButton').setAttribute('class','hamburgerButtonClosed')
    document.getElementById('mobileNav').setAttribute('class','mobileNav')
})