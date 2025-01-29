$("nav .nav-link").click( function() {

  // ambil isi href
  const tujuan = $(this).attr('href');
  // ambil element
  const elementTujuan = $(tujuan);

  // element scroll
  $('body').animate({
    scrollTop: elementTujuan.offset().too 
  }, 1200, 'easeOutBounce')

});