document.addEventListener("DOMContentLoaded",function(){
    let activeMenu = document.getElementsByClassName('menu-link');
        for(let i = 0;i<activeMenu.length;i++) {
            activeMenu[i].onclick = function() {
                for(let j = 0;j<activeMenu.length;j++) {
                    activeMenu[j].classList.remove('active')
                }
                activeMenu[i].classList.add('active')
            }
           
        }
        

        let iconMenuItem = document.getElementsByTagName('hr');
        let iconMenu =  document.querySelector('.menu-icon');
        let hideDrop = document.querySelector('.menu-drop');
        console.log(hideDrop);
        console.log(iconMenu);
   
        let listMenu = document.querySelector('.list-menu')
        for(let i = 0;i<iconMenuItem.length;i++) {
            iconMenu.onclick = function() {
                for(let j = 0;j<iconMenuItem.length;j++) {
                    iconMenuItem[j].classList.toggle('change-menu')
                }
                
                listMenu.classList.toggle('list-menu-show')
                iconMenu.classList.toggle('showMenu')
                hideDrop.classList.toggle('hideDrop')  
                
            }
        }
        window.addEventListener("scroll",function(){
        let _h = pageYOffset;
        let header = document.querySelector('.head');
        console.log(header);
        let buttonClick = document.querySelector('.button-click');
        console.log(buttonClick);
        if(_h >=40) {
            header.classList.add('change');
            buttonClick.classList.add('hide-button');
            hideDrop.style.background = '#171f3b'
        }
        else {
            header.classList.remove('change')
            buttonClick.classList.remove('hide-button');
            hideDrop.style.background = 'transparent'
        }
        })
        
       
    
})