function animate() {
    const timeline = gsap.timeline({defaults: {duration: 1}})
    const timeline02 = gsap.timeline({defaults: {duration: 1}})
    const timeline03 = gsap.timeline({defaults: {duration: 1}})

    timeline.fromTo('.mainIntroText', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }).fromTo('.subIntroText', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, "-=0.5")

    timeline02.fromTo('.planos', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.horarios', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0
    }, "-=0.5").fromTo('.local', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0
    }, "-=0.5")

    timeline03.fromTo('.trimestral', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.mensal', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0
    }, "-=0.75").fromTo('.semestral', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0
    }, "-=0.75")
}

animate()