(function() {
    var burger = $('.navbar-toggle');
    var menu = $('.navbar-menu');
    burger.click(function() {
        burger.toggleClass('is-active');
        menu.toggleClass('is-active');
    });
})();