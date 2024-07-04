 //라이트박스 팝업

        
        //윈도우 팝업
        $('.window').click(function(e){
            e.preventDefault();
            //window.open("파일명","팝업이름","옵션설정")
            //옵션 : left , top , width ,height , status ,toolbar , location, menubar ...
            window.open("samplepopup.html","popup01","width=800px, height=560px , left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
        });


        //레이어팝업 
        $('.layer').click(function(e){
            e.preventDefault();
            $("#layer").slideDown();

        })
        $('#layer .close').click(function(e){
            e.preventDefault();
            $("#layer").slideUp();
        })

        //탭 메뉴

        let $tab_list = $('.tap_menu')
        
        $tab_list.find('ul ul').hide();
        $tab_list.find('li.active>ul').show();

        function tabMenu(e){
            e.preventDefault();
            let $this = $(this)
            $this.next('ul').show().parent('li').addClass('active')
            .siblings('li').removeClass('active').find('>ul').hide();
        }

        $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu)

        //배너
        //슬릭 라이브러리 이용
        //html 마크업 셋팅 -> css 연동 --> 제이쿼리 연동 --> 제이쿼리 호출
        //슬라이드
        $('.ban').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed :3000,
            dots: true
        });
        // collum 6 부분
        $('.gallery_img').slick({
            arrows:false,
            fade:true,
            pauseOnHover:true,
            infinite:true,
            autoplay:true,
            autoplaySpeed:3000,
            speed:300,
            slidesToShow:1
        });

        $(".play").click(function(){
            $('.gallery_img').slick("slickPlay");
        });
        $(".pause").click(function(){
            $('.gallery_img').slick("slickPause");
        });
        $(".prev").click(function(){
            $('.gallery_img').slick("slickPrev");
        });
        $(".next").click(function(){
            $('.gallery_img').slick("slickNext");
        });
        //버튼을 클릭하면 전체 메뉴를 보이게 해주세요 
        //메뉴 슬라이드
        $(".tit .btn").click(function(e){
            e.preventDefault();
            // $("#cont_nav").css("display","block");
            // $("#cont_nav").show();
            // $("#cont_nav").fadeIn();
            // $("#cont_nav").slideDown();
            $("#cont_nav").slideToggle(200);
            $(this).toggleClass('on');
        });
