(function () {
    var jQuery;

    if (!!require) {
        jQuery = require('jquery');
        require('imagesloaded');
    }

    if (!!window) {
        jQuery = window.jQuery;
    }

    jQuery.fn.loadTemplate = function (templatePath, cb) {
        var $this = jQuery(this),
            $phantom = jQuery('<div>')
            .appendTo('body')
            .css({
                visibility: 'hidden !important',
                zIndex: -1,
                position: 'absolute',
                top: -999999,
                left: -999999
            });

        $phantom.load(templatePath, function () {
            $phantom.imagesLoaded(function () {
                $this.html($phantom.html());
                $phantom.remove();
                setTimeout(cb, 0);
            });
        });
    };
})();
