/* ========================================================================
 * jquery.password.js 
 *
 * Given a password field, this plugin wraps it in a Bootstrap-friendly
 * "input-group" container, creates a text version and a button which allows
 * user to switch between the two.
 *
 * @author Lukas White <hello@lukaswhite.com>
 * ======================================================================== */
(function (factory) {
if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module depending on jQuery.
  define(['jquery'], factory);
} else {
  // No AMD. Register plugin with global jQuery object.
  factory(jQuery);
}
}(function ($) {
  'use strict';

  // PASSWORD PUBLIC CLASS DEFINITION
  // ==============================

  var Password = function (element, options) {
    
    this.$element  = $(element)
    var $passwordField = this.$element

    this.$element.wrap('<div class="input-group password-group"></div>')
    
    this.options   = $.extend({}, Password.DEFAULTS, options)    
    
    var opts = this.options
    
    var $textField = $('<input>').attr('type', 'text').attr('class', $passwordField.attr('class')).attr('placeholder', $passwordField.attr('placeholder')).attr('style', 'display:none;').insertAfter($passwordField)
    
    var $btn = $('<button>').attr('type', 'button').attr('class', opts.buttonClass).attr('tabindex', -1).append('<i class="'+opts.iconClass+' '+opts.showIconClass+'"></i> '+'<span>'+opts.showText+'</span>')
    $('<span>').attr('class', 'input-group-btn').insertAfter($textField).append($btn)

    $passwordField.bind('keyup keydown', function(){        
      $textField.val($(this).val())
    })
    $textField.bind('keyup keydown', function(){        
      $passwordField.val($(this).val())
      // Trigger the change event on the password field
      $passwordField.trigger('change')      
    })    

    $btn.bind('click', function(){
      if ($btn.hasClass('active')) {
        $btn.parent().parent().find('input[type="password"]').show().focus()
        $btn.parent().parent().find('input[type="text"]').hide()
        $btn.removeClass('active').find('span').html(opts.showText).parent().find('i').removeClass(opts.hideIconClass).addClass(opts.showIconClass)
      } else {
        $btn.parent().parent().find('input[type="text"]').show().focus()
        $btn.parent().parent().find('input[type="password"]').hide()
        $btn.addClass('active').find('span').html(opts.hideText).parent().find('i').removeClass(opts.showIconClass).addClass(opts.hideIconClass)
      }
      return false  
    })
  }

  Password.DEFAULTS = {    
    buttonClass : 'toggle-password btn btn-default btn-lg',
    showText : 'Show Password',
    hideText : 'Hide Password',
    iconClass : 'fa',
    showIconClass : 'fa-eye',
    hideIconClass : 'fa-eye-slash',
    hideByDefault : true
  }

  // PASSWORD PLUGIN DEFINITION
  // ========================

  var old = $.fn.password

  $.fn.password = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('password')
      var options = typeof option == 'object' && option

      if (!data) $this.data('password', (data = new Password(this, options)))
    })
  }

  $.fn.password.Constructor = Password

  // PASSWORD NO CONFLICT
  // ==================

  $.fn.password.noConflict = function () {
    $.fn.password = old
    return this
  }

}));
