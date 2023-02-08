const tabs=document.querySelectorAll('.tab')
const panels=document.querySelectorAll('.panel')

//tabs menu eventlistener

tabs.forEach((tab)=>{
    tab.addEventListener("click",onTabClick)
})

function onTabClick(e){

    //deactivate all tabs
    tabs.forEach((tab)=>{
        tab.children[0].classList.remove('border-red-500','border-b-4','md:border-b-0')
    })

    //hide all panels
    panels.forEach((panel)=>{
        panel.classList.add('hidden')
    })

    //activate a new tab and panel based on the target
    e.target.classList.add('border-red-500','border-b-4')
    const classString=e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

//hamburger menu button
const btn=document.getElementById('menu-btn')
const mobileMenu=document.getElementById('menu')
const logo=document.getElementById('logo')

btn.addEventListener('click',navToggle);

function navToggle(){
    // alert(123);
    // btn.classList.add('open')
    // btn.classList.remove('open')
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')

    if(menu.classList.conatains('flex')){
        logo.setAttribute('src','./images/logo-bookmark-footer.svg')
    }
    else{
        logo.setAttribute('src','./images/logo-bookmark.svg')
    }
}

