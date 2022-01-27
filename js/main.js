$('.greendotBtn').click(function(){
    $('.greendotLayer').show();
    $('.greendotBtn').hide();
    $('body').addClass('noneScroll');
});

$('.wheelBtn, .dimmed').click(function(){
    $('.greendotLayer').hide();
    $('.greendotBtn').show();
    $('body').removeClass('noneScroll');
});

function is_touch_device() {
    let prefixes = ' -webkit- -miz- -o- -ms- '.split('');
    let mq = function (query) {
        return window.matchMedia(query).matches;
    }
    if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

// scroll show&hide
$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() < $(".topMenu").offset().top+$(".topMenu").height()){
            $(".greendotBtn").show();
        }else{
            $(".greendotBtn").hide();
        }
    });
});


// rotate
$('#rotate').propeller({
    angle: 270, 
    inertia: 0, 
    speed: 1, 
    step: 45, 
    stepTransitionTime: 200,
    onRotate: function(){
         console.log(this.angle);
         //아이콘 각도(수정예정)
         $('.wheelItem').css('transform', 'rotate(45deg)');
    }
});

// $('.wheelLink').css('transform', 'rotate('+(angle+now)+'deg)');
// $('#rotate').mousedown(function(){
//     $('.wheelItem').css("transform", "rotate(270deg)");
// });



// startRotation();
// function startRotation() {
    
//     let rotateElement = document.getElementById('rotate');
//     new Propeller(rotateElement , {
//         angle: 270, inertia: 0.7, speed: .1,
//     });
// }