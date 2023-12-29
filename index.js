const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    //sections active class
    allSections.addEventListener('click', function(e){
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other button
            sectBtns.forEach(function(btn){
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //hide other sections
            sections.forEach(function(section){
                section.classList.remove('active');
            });
            
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    PageTransitions();
});
