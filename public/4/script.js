$('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        animateOut: 'fadeOut'
    })


    $("a.owl-prev").click(function() {
        $("div.owl-prev").click();
    })
    $("a.owl-next").click(function() {
        $("div.owl-next").click();
    })