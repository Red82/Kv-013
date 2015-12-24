/* global toastr:false, moment:false, faker:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('Trello', Trello)
        .constant('faker', faker);
})();
