let config = {
    type: 'carousel',
    perView: 4,
    peek : { before: 0, after: -191},
    breakpoints: {
        767: {
            perView:2,
        },
        992: {
            perView:3,
        },
    }
};
new Glide('._features_slider', config).mount();
