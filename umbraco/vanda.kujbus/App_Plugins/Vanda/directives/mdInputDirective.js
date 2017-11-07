(function () {
    'use strict';
    function mdInputDirective($compile) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attr) {
                var classes = attr.inputStyle ? 'class="' + attr.inputStyle + '"' : '';
                var type = (attr.type && attr.type !== 'textarea') ? attr.type : 'text';
                var placeholder = attr.placeholder ? attr.placeholder : 'text';
                var template;

                if (attr.type === 'textarea') {
                    template = '<textarea ' +
                        ' ng-model="ngModel"'+
                        classes +
                        ' type="text"'+
                        'rows="4"' +
                        ' placeholder="Write ' + placeholder + ' here.."></textarea>';
                } else {
                    template = '<input ' +
                        ' ng-model="ngModel"'+
                        classes +
                        ' type="' + type + '"' +
                        ' placeholder="Write ' + placeholder + ' here.."/>';
                }
                element.append($compile(template)(scope));
            }
        };
    }


    angular.module('umbraco').directive('mdInput', mdInputDirective);
    mdInputDirective.$inject = ['$compile'];

}());
