document.querySelector('.hamburgerButtonClosed').addEventListener('click', () =>{
    openHamburger()
})

document.querySelector('.hamburgerButtonOpen').addEventListener('click', () =>{
    closeHamburger()
})

document.querySelectorAll('.hamburgerLink').forEach(link => {
    link.addEventListener('click', () => {
        closeHamburger()
    })
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