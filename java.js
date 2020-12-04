const abouts = document.querySelectorAll('.fade-in');
const pro = document.querySelectorAll('.fade-in1');
const contact = document.querySelectorAll('.fade-in2');

const appearoptions = {
    thread: 0,
    rootMargin: "0px 0px -350px 0px"  
};

const appearsOnscroll = new IntersectionObserver(
    function(
        entries,
        appearsOnscroll)
        {entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearsOnscroll.unobserve(entry.target);
            }
        })
        },
appearoptions);
abouts.forEach(abouts => {
    appearsOnscroll.observe(abouts);
})
const appearoptions1 = {
    thread: 0,
    rootMargin: "0px 0px -200px 0px"  
};

const appearsOnscroll1 = new IntersectionObserver(
    function(
        entries,
        appearsOnscroll1)
        {entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearsOnscroll1.unobserve(entry.target);
            }
        })

        },
appearoptions1);

pro.forEach(pro => {
    appearsOnscroll1.observe(pro);
});

contact.forEach(contact => {
    appearsOnscroll1.observe(contact);
});


$(document).ready(function(){
    
  
    $(window).scroll(function(){
        $('.ups').css("opacity", 1 - 
            $(window).scrollTop()/150)
    })
})
$(document).ready(function(){


$(window).scroll(function(){
    $('.moreMore').css("opacity", 1 - 
        $(window).scrollTop()/50)
})
})