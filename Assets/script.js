// scroll event on group recommend group
const recommendGroup = document.querySelector('.recommend_group');
window.addEventListener('scroll' , ()=>{
    if(window.scrollY >= 500){
        recommendGroup.style.display = "block";
    }else{
        recommendGroup.style.display = "none";
    }
});

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

// follow following switch button 

const followBtns = document.querySelectorAll('.follow-button')

followBtns.forEach(btns =>{
    btns.addEventListener('click' , ()=>{
        if(btns.textContent.trim() == 'Follow'){
            btns.textContent = 'Following' ;
            btns.style.background = '#000';
            btns.style.color = '#fff';
        }else {
            btns.textContent= 'Follow';
            btns.style.background = '#edeef0';
            btns.style.color = '#000';
        }
    });
});