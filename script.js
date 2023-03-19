anime({
    targets: ".wheel",
    duration: 1500,
    marginLeft: "45%",
    rotate: 360,
    delay: 1000,
    easing: "easeInOutQuad"
}).finished.then(function(){
    anime({
    targets: ".wheel",
    duration: 1500,
    marginLeft: "140%",
    rotate: 720,
    delay: 1000,
    easing: "easeInOutQuad"
    })
})