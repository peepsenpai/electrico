// ac 
let range = document.getElementById('customRange1');
let spanValue = document.getElementById('ac-js-value')
range.addEventListener('change', ()=>{
    let val = range.value;
    spanValue.innerText = val;
})

// ac boxes
const acCacltBox = document.querySelectorAll('.ac-calct-box');
acCacltBox.forEach((e,i)=>{
    let airHeading = e.querySelector('.ac-calct-heading');
    airHeading.addEventListener('click', ()=>{
        acCacltBox.forEach((e2)=>{
            if(e !== e2){
                e2.classList.remove('active')
            }
        })
        e.classList.toggle('active')
    })
})


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
mobileToggle.addEventListener('click', ()=>{
    headerToggleRight.classList.toggle('active');
})


