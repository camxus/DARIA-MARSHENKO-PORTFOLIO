const intro = document.querySelector('.intro');
const video = intro.querySelector('img');
const text1 = intro.querySelector('.gotovideo');
const text3 = intro.querySelector('.toptext');
const links = intro.querySelector('.introlinks');
const line = intro.querySelector('.topline');
const text2 = intro.querySelector('h1');



const controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//     duration: 2000,
//     triggerElement: intro,
//     triggerHook: 0,
// })
//     .addTo(controller);



    
    
    //TEXT ANIMATION
    const text2Anim = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });
    
    let scene3 = new ScrollMagic.Scene({
        duration: 100,
        triggerElement: intro,
        triggerHook: 0,
    })
    // .setPin(text2)
    .setTween(text2Anim)
    .addTo(controller)


    // NAVBAR BG ANIMATION
    const navbg = document.querySelector('.bgfloat');

    const navanim = TweenMax.fromTo(navbg, 3, { height: 300 }, { height: 368 });
    
    let navscene = new ScrollMagic.Scene({
        duration: 300,
        triggerElement: text2,
        triggerHook: 0,
    })
    // .setPin(text2)
    .setTween(navanim)
    .addTo(controller)
    // .addIndicators(controller)

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}