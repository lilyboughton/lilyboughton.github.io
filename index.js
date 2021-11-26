document.querySelector('.hamburgerButtonClosed').addEventListener('click', () =>{
    openHamburger()
})

document.querySelector('.hamburgerButtonOpen').addEventListener('click', () =>{
    closeHamburger()
    closeProjectsMenuMobile()
})

document.querySelectorAll('.hamburgerLink').forEach(link => {
    link.addEventListener('click', () => {
        closeHamburger()
    })
})

document.querySelector('.portfolioHamburgerLink').addEventListener('click', () =>{
    openProjectsMenuMobile()
})

document.querySelector('.portfolioLinkDesktop').addEventListener('click', () => {
    openProjectsMenuDesktop()
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

function openProjectsMenuMobile() {
    document.querySelector('.portfolioHamburgerLink').style.display = 'none';
    document.querySelectorAll('.projectHamburgerLink').forEach(link => {
        link.style.display = 'block';
    })
}

function closeProjectsMenuMobile() {
    document.querySelector('.portfolioHamburgerLink').style.display = 'block';
    document.querySelectorAll('.projectHamburgerLink').forEach(link => {
        link.style.display = 'none';
    })
}

function openProjectsMenuDesktop() {
    document.querySelector('.portfolioLinkDesktop').style.display = 'none';
    document.querySelector('.navDropdown').style.display = 'block';
}

function closeProjectsMenuDesktop() {
    document.querySelector('.portfolioLinkDesktop').style.display = 'block';
    document.querySelector('.navDropdown').style.display = 'none';
}