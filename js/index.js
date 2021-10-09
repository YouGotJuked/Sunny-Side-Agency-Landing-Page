const mobile_menu = function(event){
    const mobile_menu_btn = document.querySelector("#mobile-menu-btn");
    const mobile_menu = document.querySelector("#menu-nav");

    let open = false;
    mobile_menu_btn.addEventListener("click", function(event){
        if(open == false){
            mobile_menu.classList.add("open-mobile");
            open = true;
        }
        else{
            mobile_menu.classList.remove("open-mobile");
            open = false;
        }
        
    });

}

const header_animation = function(event){
    const header = document.querySelector(".header");

    if(window.pageYOffset > 250){
        header.classList.add("header-scrolled");
    }
    else{
        header.classList.remove("header-scrolled");
    }
}

mobile_menu();

window.onscroll = function(){
    header_animation();
}
