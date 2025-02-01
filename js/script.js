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


// paralax

// About
$(window).on('load', function() {
    $('.kiri').addClass('pMuncul');
    $('.kanan').addClass('pMuncul');
});


$(window).scroll( function() {

    const wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : `translate(0px, ${wScroll / 4}%)`
    })
    $('.jumbotron h1.nama').css({
        'transform' : `translate(0px, ${wScroll / 2}%)`
    })
    $('.jumbotron h3').css({
        'transform' : `translate(0px, ${wScroll / 1}%)`
    })

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 200) {
        $('.portfolio img').each( function(i) {
            setTimeout(function() {
                $('.portfolio img').eq(i).addClass('muncul');
            }, 300 * (i+1))
        });

    }

});
