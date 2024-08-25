$(document).ready(function(){//시작

    //메인비주얼 모바일 스와이퍼 시작
    var swiper = new Swiper(".m_main_slide",{
        centeredSlides: true,
        loop: true,
        effect:'fade',
        speed:800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); //메인비주얼 스와이퍼 끝

        //모바일 메뉴 열고 닫기
  $(".ham").click(function () {
    // $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
      right: "0"
    });
  });

  $(".mgnb_close").click(function () {
    // $(".dim").fadeOut();
    $(".mgnb_wrap").animate({
      right: "-100vw"
    });
  });//모바일 메뉴 열고 닫기 끝


  //스티커 에니메이션 시작
  gsap.fromTo(".leftright", {
    rotate: -8,
  }, {
    rotate: 8,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });

  gsap.fromTo(".middle", {
    rotate: 5,
  }, {
    rotate: -5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });

  gsap.fromTo(".rightleft", {
    rotate: 8,
  }, {
    rotate: -8,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
   //스티커 에니메이션 끝


  //카드 스와이퍼 효과
   var swiper = new Swiper(".cardSwiper", {
    effect: "cards",
    grabCursor: true,
  });
      

    AOS.init();
});//끝