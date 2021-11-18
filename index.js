document.querySelector('.hamburgerButtonClosed').addEventListener('click', () =>{
    openHamburger()
})

document.querySelector('.hamburgerButtonOpen').addEventListener('click', () =>{
    closeHamburger()
    closeProjectsMenu()
})

document.querySelectorAll('.hamburgerLink').forEach(link => {
    link.addEventListener('click', () => {
        closeHamburger()
    })
})

document.querySelector('.portfolioHamburgerLink').addEventListener('click', () =>{
    openProjectsMenu()
})

function openHamburger() {
    document.querySelector('.hamburgerButtonClosed').style.display = 'none';
    document.querySelector('.hamburgerButtonOpen').style.display = 'block';
    document.getElementById('hamburgerMenu').style.display='flex';
}

function closeHamburger() {
    document.querySelector('.hamburgerButtonOpen').style.display = 'none';
    document.querySelector('.hamburgerButtonClosed').style.display = 'block';
    document.getElementById('hamburgerMenu').style.display='none';
}

function openProjectsMenu() {
    document.querySelector('.portfolioHamburgerLink').style.display = 'none';
    document.querySelectorAll('.projectHamburgerLink').forEach(link => {
        link.style.display = 'block';
    })
}

function closeProjectsMenu() {
    document.querySelector('.portfolioHamburgerLink').style.display = 'block';
    document.querySelectorAll('.projectHamburgerLink').forEach(link => {
        link.style.display = 'none';
    })
}