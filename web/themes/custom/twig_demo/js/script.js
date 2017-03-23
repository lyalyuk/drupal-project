(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.twigDemo = {
    attach: function (context, settings) {
      console.log('Hello! I am script JS');
    }
  };
})(jQuery, Drupal);
