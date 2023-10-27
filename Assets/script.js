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


function onMobileView(){
    let mbViewShow = document.querySelectorAll('.mb-viewer-show');
    let desktopViewShow = document.querySelectorAll('.desktop-viewer-show');
    let blogsShareBtns = document.querySelectorAll('.blog-share-btns');
    if (window.innerWidth <= 450 ) {
        mbViewShow.forEach(e => {
            e.parentElement.style.display= 'flex';
            e.parentElement.style.flexDirection= 'column';
            e.parentElement.style.gap= '0';
            e.parentElement.style.alignItems= 'start';
            e.style.fontSize = "12px"
            e.style.color = "#495057"
            e.style.fontWeight = "600"
            e.style.lineHeight = "normal"
        });
        
    }
}
onMobileView();