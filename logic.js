//preloader
const preLoader = document.getElementById('pre-loader')
function PageLoaded() {
    setTimeout(function () {
        preLoader.style.opacity = '0';
        preLoader.style.transition = '1.5s ease-in-out';
        setTimeout(function () {
            preLoader.style.display = 'none';
        }, 1500)
    }, 1500)
}


let SerchInput = document.querySelector('#header-search-input');
function mouseEnter(){
    SerchInput.classList.add('whiteSearch');
}
function mouseLeave(){
    SerchInput.classList.remove('whiteSearch')
}
// function searchInoutClick(){
//     SerchInput.classList.toggle('whiteSearch')
// }

// text-slider
// let count = 0;
// const headerArr = ['SPLIT', 'WINDOW', 'CASSETTE', 'TOWER', 'DUCTABLE', 'VRV'];
// (function(){
//     const textFromJs = document.getElementById('textFromJs');
//     setInterval(()=>{
//         textFromJs.textContent = `${headerArr[count]}`
//         count++
//         if(count > 5){
//             count = 0
//         }
//     }, 2000)

// }())



// ac boxes
// const acCacltBox = document.querySelectorAll('.ac-calct-box');
// acCacltBox.forEach((e, i) => {
//     let airHeading = e.querySelector('.ac-calct-heading');
//     airHeading.addEventListener('click', () => {
//         acCacltBox.forEach((e2) => {
//             if (e !== e2) {
//                 e2.classList.remove('active')
//             }
//         })
//         e.classList.toggle('active')
//     })
// })


// headers active menu 
let navItem = document.querySelectorAll('.nav-item');
navItem.forEach((e) => {

    e.addEventListener('click', (clickItem) => {
        navItem.forEach((perItem) => {
            perItem.classList.remove('active')
        })
        clickItem.path[1].classList.add('active');
    })
})

// upper-header-toggle
const mobileToggle = document.getElementById('mobile-header-bar'),
    headerToggleRight = document.getElementById('header-right-box-toggle');
mobileToggle.addEventListener('click', () => {
    headerToggleRight.classList.toggle('active');
})


