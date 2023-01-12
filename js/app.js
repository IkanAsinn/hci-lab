$(document).ready(function () {
    const prevBtn = $('#prev');
    const nextBtn = $('#next');
    const imageBanner = $('.images');

    prevBtn.click(function () {
        const currentImage = $('.slide.active');
        const width = currentImage.width();
        const prev = currentImage.prev();
        prevBtn.prop('disabled', true);
        nextBtn.prop('disabled', true);
        if (prev.length) {
            imageBanner.animate({ 'margin-left': '+=' + width }, 1000);
            currentImage.removeClass('active');
            prev.addClass('active');
        } else {
            const lastImage = $('.slide').last();
            const lastImageWidth = lastImage.width();
            imageBanner.animate({ 'margin-left': '-=' + lastImageWidth }, 1000);
            currentImage.removeClass('active');
            lastImage.addClass('active');
        }
        setTimeout(function () {
            prevBtn.prop('disabled', false);
            nextBtn.prop('disabled', false);
        }, 1000);

        clearInterval(interval);
        interval = setInterval(intervalFunction, 4000);

    });

    nextBtn.click(function () {
        nextBtn.prop('disabled', true);
        prevBtn.prop('disabled', true);
        const currentImage = $('.slide.active');
        const width = currentImage.width();
        const next = currentImage.next();
        if (next.length) {
            imageBanner.animate({ 'margin-left': '-=' + width }, 1000);
            currentImage.removeClass('active');
            next.addClass('active');
        } else {
            imageBanner.animate({ 'margin-left': 0 }, 1000);
            currentImage.removeClass('active');
            $('.slide').first().addClass('active');
        }

        setTimeout(function () {
            nextBtn.prop('disabled', false);
            prevBtn.prop('disabled', false);
        }, 1000);

        clearInterval(interval);
        interval = setInterval(intervalFunction, 4000);
    });

    let interval = setInterval(intervalFunction, 4000);
});

function intervalFunction() {
    const imageBanner = $('.images');
    const currentImage = $('.slide.active');
    const width = currentImage.width();
    const next = currentImage.next();
    if (next.length) {
        imageBanner.animate({ 'margin-left': '-=' + width }, 1000);
        currentImage.removeClass('active');
        next.addClass('active');
    } else {
        imageBanner.animate({ 'margin-left': 0 }, 1000);
        currentImage.removeClass('active');
        $('.slide').first().addClass('active');
    }
}