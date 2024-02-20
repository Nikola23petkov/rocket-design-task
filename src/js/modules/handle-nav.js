import {$win, $header, $body} from '../global.js'

/** 
 * Handle nav trigger
 */

$('.js-nav-trigger').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);

    $this.toggleClass('is-open');
    $('.js-nav-holder').toggleClass('is-open');
    $body.toggleClass('is-open');
});

