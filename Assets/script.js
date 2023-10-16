// blog show menu icon
let showMenus = document.querySelectorAll(".showMenu");
let menuContainers  = document.querySelectorAll(".menuContainer");

showMenus.forEach((showMenu, index) => {
    showMenu.addEventListener('click', () => {
        if (menuContainers[index].style.display === 'block') {
            menuContainers[index].style.display = 'none';
        } else {
            menuContainers[index].style.display = 'block';
        }
    });
});


// 