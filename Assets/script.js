// scroll event on group recommend group
const recommendGroup = document.querySelector(".recommend_group");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    recommendGroup.style.display = "block";
  } else {
    recommendGroup.style.display = "none";
  }
});

// blog show menu icon
let showMenus = document.querySelectorAll(".showMenu");
let menuContainers = document.querySelectorAll(".menuContainer");

showMenus.forEach((showMenu, index) => {
  showMenu.addEventListener("click", () => {
    if (menuContainers[index].style.display === "block") {
      menuContainers[index].style.display = "none";
    } else {
      menuContainers[index].style.display = "block";
    }
  });
});

//  --------------follow following switch button-------------------------------

const followBtns = document.querySelectorAll(".follow-button");

followBtns.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (btns.textContent.trim() == "Follow") {
      btns.textContent = "Following";
      btns.style.background = "#000";
      btns.style.color = "#fff";
    } else {
      btns.textContent = "Follow";
      btns.style.background = "#edeef0";
      btns.style.color = "#000";
    }
  });
});

//  --------------signup and signIn form-------------------------------
const formOpenBtn = document.querySelector(".form-open-Btn");
const formCloseBtn = document.querySelector(".close-icon");
const mainFormContainer = document.querySelector(".signup-container");
const loginSection = document.querySelectorAll(".signin-open-btn");

formOpenBtn.addEventListener("click", () => {
  mainFormContainer.style.display = "block";
});

loginSection.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".forms-fill h2").textContent = "Welcome back!";
    document.querySelector(".name-input-div").style.display = "none";
    document.querySelector(".confirm-pass-div").style.display = "none";
    document.querySelector(".forgot-password").style.display = "block";
    document.querySelector(".Create-ac-btn").textContent = "Sign In";
    document.querySelector(".privacy-policy").style.display = "none";
    document.querySelector(".signup-letter").style.display = "block";
    document.querySelector(".signin-letter").style.display = "none";

    // mobile
    if (window.innerWidth <= 768) {
      document.querySelector(".forms-fill h2").textContent = "Welcome back!";
      document.querySelector(".name-input-div").style.display = "none";
      document.querySelector(".confirm-pass-div").style.display = "none";
      document.querySelector(".forgot-password").style.display = "block";
      document.querySelector(".Create-ac-btn").textContent = "Sign In";
      document.querySelector(
        ".createAndSignin-div p.signin-open-btn"
      ).style.display = "none";
      document.querySelector(
        ".createAndSignin-div p.signup-open-btn"
      ).style.display = "block";
    }
  });
});

document.querySelectorAll(".signup-open-btn").forEach((open) => {
  open.addEventListener("click", () => {
    document.querySelector(".forms-fill h2").textContent = "Create Account";
    document.querySelector(".name-input-div").style.display = "flex";
    document.querySelector(".confirm-pass-div").style.display = "block";
    document.querySelector(".forgot-password").style.display = "none";
    document.querySelector(".Create-ac-btn").textContent = "Create Account";
    document.querySelector(".privacy-policy").style.display = "block";
    document.querySelector(".signup-letter").style.display = "none";
    document.querySelector(".signin-letter").style.display = "block";

    // MOBILE
    if (window.innerWidth <= 768) {
      document.querySelector(".forms-fill h2").textContent = "Create Account ";
      document.querySelector(".name-input-div").style.display = "flex";
      document.querySelector(".confirm-pass-div").style.display = "block";
      document.querySelector(".forgot-password").style.display = "none";
      document.querySelector(".Create-ac-btn").textContent = "Create Account";
      document.querySelector(
        ".createAndSignin-div p.signin-open-btn"
      ).style.display = "block";
      document.querySelector(
        ".createAndSignin-div p.signup-open-btn"
      ).style.display = "none";
    }
  });
});

document.querySelector(".mb-joinBtn").addEventListener("click", () => {
  mainFormContainer.style.display = "block";
});
formCloseBtn.addEventListener("click", () => {
  mainFormContainer.style.display = "none";
});

//  --------------only for mobile use-------------------------------
function onMobileView() {
  let mbViewShow = document.querySelectorAll(".mb-viewer-show");
  let desktopViewShow = document.querySelectorAll(".desktop-viewer-show");
  let blogsShareBtns = document.querySelectorAll(".blog-share-btns");
  if (window.innerWidth <= 450) {
    mbViewShow.forEach((e) => {
      e.parentElement.style.display = "flex";
      e.parentElement.style.flexDirection = "column";
      e.parentElement.style.gap = "0";
      e.parentElement.style.alignItems = "start";
      e.style.fontSize = "12px";
      e.style.color = "#495057";
      e.style.fontWeight = "600";
      e.style.lineHeight = "normal";
    });
  }
}
onMobileView();
