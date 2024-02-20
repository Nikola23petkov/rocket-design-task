export const $win = $(window);
export const $doc = $(document);
export const $body = $('body');
export const $header = $('.js-header');


$win.on('load resize', function() {
    headerHeight();
    make100vhVar();
});

function headerHeight() {
    const $headerHeight = $header.outerHeight();

    $body.css('--header-height', $headerHeight + 'px');
};

function make100vhVar() {
    let vh = $win.outerHeight();
    $body.css('--win-height', vh + 'px');
};