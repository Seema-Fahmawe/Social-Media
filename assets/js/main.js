/* offcanva */
$('.navbar .offcanva-btn').on('click', function () {
    $(this).toggleClass('active');
})

/* owl carousel */
$(document).ready(function () {
    $('.owl-carousel.stories').owlCarousel({
        loop: false,
        margin: 7,
        nav: false,
        stagePadding: 70,
        dots: false,
        responsive: {
            0: {
                items: 2,
                stagePadding: 10,
            },
            500: {
                items: 4,
                stagePadding: 20,
            },
            700: {
                items: 6,
                stagePadding: 20,
            },
            992: {
                items: 3,
                stagePadding: 20,
            },
            1200: {
                items: 4,
            },
        }
    });
    $('.owl-carousel.liveCarousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 5
            },
            1000: {
                items: 3
            }
        }
    })
});


let navbarHeight = $('.navbar').outerHeight();
$('.sidebar').css({ 'top': navbarHeight + 'px' });
$('.mainContent').css({ 'padding-top': navbarHeight + 'px' });
$('.chat-contact').css({ 'top': navbarHeight + 'px' });


/* change padding in main-content */
$(window).on('resize', function () {
    let windowWidth = $(window).width();
    let sidebarWidth = $('.sidebar').width();
    if (windowWidth >= 1600) {
        $('.mainContent').css({ 'padding-left': sidebarWidth + 'px', 'padding-right': sidebarWidth + 'px' });
    } else if (windowWidth >= 992 && windowWidth < 1600) {
        $('.mainContent').css({ 'padding-left': sidebarWidth + 'px', 'padding-right': 0 });
        $('.mainContent .leftSide').css({ 'padding-left': 0 + 'px' });
        $('.mainContent .rightSide').css({ 'padding-right': 0 + 'px' });
    } else if (windowWidth < 992) {
        $('.mainContent').css({ 'padding-left': 0, 'padding-right': 0 });
    }
})

/* show and hide chat-contact */
$('.navbar .messageBtn').on('click', function () {
    $('.chat-contact').toggleClass('activeChat');
})

/* theme setting */
let colors = ['#ff3b30', '#4cd964', '#132977', '#ff2d55', '#c15b4e', '#fff68f', '#00cc99', '#a41051', '#8e8e93', '#D2691E', '#FFC0CB', '#5f9ea0', '#9932cc']

for (var i = 0; i < colors.length; i++) {
    $('.listColor li').eq(i).css({ 'background-color': colors[i] });
}

let btn = document.getElementById('btn1');

$('.color i').hide();
$('.listColor li ').on('click', function () {
    var active = $(this);
    active.children().show();
    $('.color i').not(active.children()).hide();
    var bg = $(this).css('background-color');
    $('body', 'html').attr({ "style": `--primary:${bg}` });
    $('body', 'html').attr({ "style": `--primary-gradient:${bg}` });

    $('.btn1').on('click', function () {
        $(this).toggleClass('btnActive');
        $('.offcanva .firstList').attr({ "style": `background-color:${bg}` });
        $('.offcanva .secondList').attr({ "style": `background-color:${bg}` });
        $('.offcanva .thirdList').attr({ "style": `background-color:${bg}` });
        $('.offcanva .list span').attr({ "style": `color:white` });
        if (btn.classList.contains('btnActive')) {
            let bg2 = $(active).css('background-color');
            $('.cardSetting span').attr({ "style": `background-color:#ff3b30` })
            $('.offcanva .firstList').attr({ "style": `background-color:${bg2}` });
            $('.offcanva .secondList').attr({ "style": `background-color:${bg2}` });
            $('.offcanva .thirdList').attr({ "style": `background-color:${bg2}` });
            $('.offcanva .list span').attr({ "style": `color:white` });

        } else if (!btn.classList.contains('btnActive')) {
            $('.cardSetting span').attr({ "style": `background-color:#eee` })
            $('.offcanva .firstList').attr({ "style": `background-color:white` });
            $('.offcanva .secondList').attr({ "style": `background-color:white` });
            $('.offcanva .thirdList').attr({ "style": `background-color:white` });
            $('.offcanva .list span').attr({ "style": `color:#888` });

        }
    });

    if (btn.classList.contains('btnActive')) {
        let bg2 = $(active).css('background-color');
        $('.cardSetting span').attr({ "style": `background-color:#ff3b30` })
        $('.offcanva .firstList').attr({ "style": `background-color:${bg2}` });
        $('.offcanva .secondList').attr({ "style": `background-color:${bg2}` });
        $('.offcanva .thirdList').attr({ "style": `background-color:${bg2}` });
        $('.offcanva .list span').attr({ "style": `color:white` });

    } else if (!btn.classList.contains('btnActive')) {
        $('.cardSetting span').attr({ "style": `background-color:#eee` })
        $('.offcanva .firstList').attr({ "style": `background-color:white` });
        $('.offcanva .secondList').attr({ "style": `background-color:white` });
        $('.offcanva .thirdList').attr({ "style": `background-color:white` });
        $('.offcanva .list span').attr({ "style": `color:#888` });
    }
});

let btn2 = document.getElementById('btn2');
$('.btn2').on('click', function () {
    $(this).toggleClass('btnActive2');
    $('.navbar').css({ 'background-color': '#293145' });
    if (btn2.classList.contains('btnActive2')) {
        $('.cardSetting2 span').attr({ "style": `background-color:#ff3b30` })
        $('.navbar').css({ 'background-color': '#293145' });
        $('.sidebar').css({ 'background-color': '#293145' });
        $('.offcanva .list span').attr({ "style": `color:#fff` });
        $('.mainContent').css({ 'background-color': '#1a2236' });

    } else if (!btn2.classList.contains('btnActive2')) {
        $('.cardSetting2 span').attr({ "style": `background-color:#eee` })
        $('.navbar').css({ 'background-color': '#fff' });
        $('.sidebar').css({ 'background-color': '#fff' });
        $('.offcanva .list span').attr({ "style": `color:#888` });
        $('.mainContent').css({ 'background-color': '#fff' });

    }
});

/*show and hide setting */
$('.settingCard').hide();
$('.navbar .secondList .setting').on('click', function () {
    $('.settingCard').toggle();
})



