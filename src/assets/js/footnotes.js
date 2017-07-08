(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
      module.exports = function( root, jQuery ) {
          if ( jQuery === undefined ) {
              if ( typeof window !== 'undefined' ) {
                  jQuery = require('jquery');
              }
              else {
                  jQuery = require('jquery')(root);
              }
          }
          factory(jQuery);
          return jQuery;
      };
  } else {
      factory(jQuery);
  }
}(function ($) {
    $.fn.notes = function (options) {
      options = options || {}
      var field = options.field || 'desc'
      var spans = this.filter('span')

      $('body').append('<div class="footnote" style="display: none;"></div>')
      this.hover(function (e) {
        var description = $(this).attr(field)
        var tooltip = $('.footnote')


        tooltip
          .text(description)
          .stop()
          .fadeIn({
            duration:100,
            queue: false
          })
      }, function () {
        $('.footnote').stop()
        $('.footnote').fadeOut({
          duration: 100
        })
      })
    }
}));
