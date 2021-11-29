// let range = document.getElementById('range');
// range.addEventListener('change', ()=>{
//     let val = range.value;
//     console.log(val);
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