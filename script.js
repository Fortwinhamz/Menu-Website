


// function myFunction(){
//     var shakes = document.getElementById('shakes')
// }


gsap.from('.title', { duration:1, x: '100%', ease: 'bounce'})
// gsap.from('.menu-box', { duration:2, y: '-100%', stagger: .5})
gsap.from('.menu-box', { duration: 5, y: '-50%', ease: 'bounce'})



document.querySelectorAll('.js-menu-filter-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        const filterStr = btn.getAttribute('data-menu-filter');
        const containerId = btn.getAttribute('data-container-id');
        filterMenuCards(filterStr, containerId)

        gsap.from('.menu-box', { duration:5, x: '100%', ease: 'bounce'})

    })
})

function filterMenuCards(filterString, containerId){

    const container = document.getElementById(containerId)

    if(filterString === 'all'){
        container.querySelectorAll('.menu-box').forEach(function(menu){
            menu.removeAttribute('style')
        })
    } else {
        container.querySelectorAll('.menu-box').forEach(function(menu){
            if(!menu.classList.contains(filterString)){
                menu.style.display = 'none';
            } else {
                menu.removeAttribute('style')
            }
        })
    }
}
// const breakfastId = document.getElementById('breakfast')
// const lunchId = document.getElementById('.lunch')
// const shakesId = document.getElementById('shakes')

// const breakfastBtn = document.getElementById('breakfastId')
// const lunchBtn = document.getElementById('lunchId')
// const shakesBtn = document.getElementById('shakesId')

// console.log(shakesBtn)
// shakesBtn.addEventListener('click', function(){
//     document.querySelectorAll('.js-breakfast-opt').forEach(option => {
//         option.style.display = 'none'
//     })
// })





// breakfastBtn.addEventListener('click', function(){
//     shakesId.style.display= "none";
//     lunchId.style.display= "none";
// })
// breakfastBtn.addEventListener('click', function(){
//     // shakesId.style.display= "none";
//     lunchId.style.display= "none";
// })









// const butonnnId = document.getElementById('herBtn')
// const carrdId = document.getElementById('poland')

// butonnnId.addEventListener('click', function(){
//      carrdId.style.display ="none";
// })
;;;;;;;;;