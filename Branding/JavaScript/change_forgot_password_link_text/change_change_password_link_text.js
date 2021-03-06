/**
 * JQuery is the javascript library used in many places across canvas.  
 *
 * This script describes how you would change the "I forgot my password" text on the Canvas
 * Login page.    
 *
 * When implementing this script, replace <replacement> with the text you want to appear.
 * For example, you may want to have that text be "Help me find my password" rather than "I forgot my password".  
 *
 *
 *
 **/
$(document).ready(function(){
  if(window.location.pathname.search('login')){
    $('#login_forgot_password').text('<replacement_here>');
  }
});
