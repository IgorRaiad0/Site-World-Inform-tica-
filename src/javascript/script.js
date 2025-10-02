$(document).ready(function() {
    // Botão mobile
    $('#mobile_btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    const sections = $('section');
    const navItens = $('.nav_item');

$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop(); // scroll real, sem subtrações

    let activeSectionsIndex = 0;

    // sombra no header
    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    // checando em qual seção estamos
    sections.each(function (i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96; // compensando a altura do header fixo
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionsIndex = i;
            return false; // para o loop quando encontrar a seção correta
        }
    });

    // marcando o item do menu como ativo
    navItens.removeClass('active');
    navItens.eq(activeSectionsIndex).addClass('active');
});

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

     ScrollReveal().reveal('.curso', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

     ScrollReveal().reveal('.imagem', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
});



