$(document).ready(function() {
    $("nav a").click(function(e) {
        // ambil isi href
        const tujuan = $(this).attr('href');
        const elementTujuan = $(tujuan);
        
          $('html, body').animate({
              scrollTop: elementTujuan.offset().top - 50
          }, 1500, 'easeInOutExpo');

        e.preventDefault();
    });
});
