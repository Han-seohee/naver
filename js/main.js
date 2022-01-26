$('.greendotBtn').click(function(){
    $('.greendotLayer').show();
    $('.greendotBtn').hide();
});

$('.wheelBtn').click(function(){
    $('.greendotLayer').hide();
    $('.greendotBtn').show();
});

startRotation();
function startRotation() {
    
    let rotateElement = document.getElementById('rotate');
    new Propeller(rotateElement , {
        angle: 270, inertia: 0.7, speed: .1,
    });
}

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