/**
 *  Accordion
 */

$('.js-accordion .accordion__trigger').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const $this = $(this);

    $this.closest('.js-accordion').toggleClass('is-active');
});
