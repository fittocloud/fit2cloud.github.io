/*
 * 菜单.js
 * ~~~~~~~~~~
 *
 * This script makes the Sphinx 菜单 collapsible.
 *
 * .sphinx菜单 contains .sphinx菜单wrapper.  This script adds
 * in .sphix菜单, after .sphinx菜单wrapper, the #菜单button
 * used to collapse and expand the 菜单.
 *
 * When the 菜单 is collapsed the .sphinx菜单wrapper is hidden
 * and the width of the 菜单 and the margin-left of the document
 * are decreased. When the 菜单 is expanded the opposite happens.
 * This script saves a per-browser/per-session cookie used to
 * remember the position of the 菜单 among the pages.
 * Once the browser is closed the cookie is deleted and the position
 * reset to the default (expanded).
 *
 * :copyright: Copyright 2007-2014 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */

$(function() {
  
  
  
  
  
  
  

  // global elements used by the functions.
  // the '菜单button' element is defined as global after its
  // creation, in the add_菜单_button function
  var bodywrapper = $('.bodywrapper');
  var 菜单 = $('.sphinx菜单');
  var 菜单wrapper = $('.sphinx菜单wrapper');

  // for some reason, the document has no 菜单; do not run into errors
  if (!菜单.length) return;

  // original margin-left of the bodywrapper and width of the 菜单
  // with the 菜单 expanded
  var bw_margin_expanded = bodywrapper.css('margin-left');
  var ssb_width_expanded = 菜单.width();

  // margin-left of the bodywrapper and width of the 菜单
  // with the 菜单 collapsed
  var bw_margin_collapsed = '.8em';
  var ssb_width_collapsed = '.8em';

  // colors used by the current theme
  var dark_color = $('.related').css('background-color');
  var light_color = $('.document').css('background-color');

  function 菜单_is_collapsed() {
    return 菜单wrapper.is(':not(:visible)');
  }

  function toggle_菜单() {
    if (菜单_is_collapsed())
      expand_菜单();
    else
      collapse_菜单();
  }

  function collapse_菜单() {
    菜单wrapper.hide();
    菜单.css('width', ssb_width_collapsed);
    bodywrapper.css('margin-left', bw_margin_collapsed);
    菜单button.css({
        'margin-left': '0',
        'height': bodywrapper.height()
    });
    菜单button.find('span').text('»');
    菜单button.attr('title', _('Expand 菜单'));
    document.cookie = '菜单=collapsed';
  }

  function expand_菜单() {
    bodywrapper.css('margin-left', bw_margin_expanded);
    菜单.css('width', ssb_width_expanded);
    菜单wrapper.show();
    菜单button.css({
        'margin-left': ssb_width_expanded-12,
        'height': bodywrapper.height()
    });
    菜单button.find('span').text('«');
    菜单button.attr('title', _('Collapse 菜单'));
    document.cookie = '菜单=expanded';
  }

  function add_菜单_button() {
    菜单wrapper.css({
        'float': 'left',
        'margin-right': '0',
        'width': ssb_width_expanded - 28
    });
    // create the button
    菜单.append(
        '<div id="菜单button"><span>&laquo;</span></div>'
    );
    var 菜单button = $('#菜单button');
    light_color = 菜单button.css('background-color');
    // find the height of the viewport to center the '<<' in the page
    var viewport_height;
    if (window.innerHeight)
 	  viewport_height = window.innerHeight;
    else
	  viewport_height = $(window).height();
    菜单button.find('span').css({
        'display': 'block',
        'margin-top': (viewport_height - 菜单.position().top - 20) / 2
    });

    菜单button.click(toggle_菜单);
    菜单button.attr('title', _('Collapse 菜单'));
    菜单button.css({
        'color': '#FFFFFF',
        'border-left': '1px solid ' + dark_color,
        'font-size': '1.2em',
        'cursor': 'pointer',
        'height': bodywrapper.height(),
        'padding-top': '1px',
        'margin-left': ssb_width_expanded - 12
    });

    菜单button.hover(
      function () {
          $(this).css('background-color', dark_color);
      },
      function () {
          $(this).css('background-color', light_color);
      }
    );
  }

  function set_position_from_cookie() {
    if (!document.cookie)
      return;
    var items = document.cookie.split(';');
    for(var k=0; k<items.length; k++) {
      var key_val = items[k].split('=');
      var key = key_val[0].replace(/ /, "");  // strip leading spaces
      if (key == '菜单') {
        var value = key_val[1];
        if ((value == 'collapsed') && (!菜单_is_collapsed()))
          collapse_菜单();
        else if ((value == 'expanded') && (菜单_is_collapsed()))
          expand_菜单();
      }
    }
  }

  add_菜单_button();
  var 菜单button = $('#菜单button');
  set_position_from_cookie();
});