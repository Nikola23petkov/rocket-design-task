import {$win, $header, $body} from '../global.js'

/** 
 * Handle filters trigger
 */

$('.js-filters-trigger').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);

    $this.toggleClass('is-open');
    $('.js-filters-holder').toggleClass('is-open');
    $body.toggleClass('is-open');
});