 /*******  HEADER MENU HEADER MENU *********/
$(document).ready(function(){
    $('.icon').mousedown(function(){
       $('#mainmenu').slideToggle(1000)
    })
    $('#mainmenu >li').hover(function(){
       $(this).find('ul').toggle(300)
    })

/******* SCROLL MENU *** SCROLL MENU *********/

  $('#mainmenu >a:nth-child(4)').click(function(){
    $('html,body').animate({
      scrollTop: $('#partaboutus').offset().top
    }, 2000)
  })
  $('#mainmenu >a:nth-child(5)').click(function(){
    $('html,body').animate({
      scrollTop: $('#partservice').offset().top
    }, 2000)
  })
  
  $('#mainmenu >a:nth-child(6)').click(function(){
    $('html,body').animate({
      scrollTop: $('#samplepart').offset().top
    }, 2000)
  })
  $('#mainmenu >a:nth-child(7)').click(function(){
    $('html,body').animate({
     scrollTop: $('#contactus').offset().top
    }, 2000);
  })
})
/*******  SLIDER SLIDER SLIDER SLIDER *********/
$(document).ready(function(){
 
  $('#clickdes').css({
    'background-color': 'yellow',
     'border':'none' ,
     'border-radius': '3px',
     'width':'100px',
     'height': '30px',
     'font-wight':'bolder',
     'font-size': 'large',
  });

  $('#slider >p').append(`لورم یک متن ساختگی است 

  بخشی از توضیحات شما قرار دارد `)
  
  $('#slider >div >p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد')

  var anime = $('#desbox');  
        $('#clickdes').click(function(){
            anime.slideDown(1000);
        }) 
        $('#desbox >span').click(function(){
            anime.slideUp(1000);
        })
        
/*******  ABOUTUS ABOUTUS ABOUTUS ABOUTUS *********/
  $('#aboutus-top> a').append('درباره ی ما')
  $('#aboutus-top> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد')
  $('#aboutus-top> a').css({
    'color': '#0c8181',
    'text-align': 'center',
    'font-size':'30px',
    'font-weight': '700',
    'text-decoration':'none',
  })

    $('#aboutusparent').css({
      'display' : 'flex',
      'justify-content': 'center',
      'align-items':'center',
    })

    $('#aboutusparent >div> span').css({
        'font-weight': '700',
        'font-size': 'large',  
    })
    $('#aboutusparent >div> p').css({
      'padding' : '15px',
      'text-align': 'justify',
    })
    /* TITLE & TEXT OF LITTLE BOXES */
    $('#aboutusparent >div:nth-child(1)> span').append('1 عنوان')
    $('#aboutusparent >div:nth-child(1)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')

    $('#aboutusparent >div:nth-child(2)> span').append('2 عنوان')
    $('#aboutusparent >div:nth-child(2)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')

    $('#aboutusparent >div:nth-child(3)> span').append('3 عنوان')
    $('#aboutusparent >div:nth-child(3)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')

    $('#aboutusparent >div:nth-child(4)> span').append('4 عنوان')
    $('#aboutusparent >div:nth-child(4)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')
    
    
    $('.quadbox').click(function(){
        window.open('aboutUs.html');
    })

    /*******  PARTSERVICE PARTSERVICE PARTSERVICE *********/

    $('#partservice-right >div> h4').append('<b>خدمات</b>')
    $('#partservice-right >div> h4').css({
      'text-align':'right',
      'padding-right':'30px',
      'color': '#0c8181',
      'font-size':'30px',
    })
    $('#partservice-right >div >p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.')
    $('#partservice-right >div >p').css({
      'text-align': 'justify',
      'padding':'0px 20px',
    })
    /* TITLE & TEXT OF LITTLE BOXES */
    $('#partservice-box >div:nth-child(1)> ul> li> h3').append('1 عنوان')
    $('#partservice-box >div:nth-child(1)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ')

    $('#partservice-box >div:nth-child(2)> ul> li> h3').append('2 عنوان')
    $('#partservice-box >div:nth-child(2)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ')
    
    $('#partservice-box >div:nth-child(3)> ul> li> h3').append('3 عنوان')
    $('#partservice-box >div:nth-child(3)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ')
    
    $('#partservice-box >div:nth-child(4)> ul> li> h3').append('4 عنوان')
    $('#partservice-box >div:nth-child(4)> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ')
    
    $('#partservice-box >div> ul> li> h3').css({
      'display':'inline',
    })
    $('#partservice-box >div> p').css({
      'margin':'0px',
      'padding':'1px 15px',
    })
    $('.lbox> ul> li:nth-child(2)').css({
      'color': '#0c8181',
      'font-size': '24px',
      'font-wight': '1000',
    })

    /*******  SAMPLEPART SAMPLEPART SAMPLEPART *********/
    $('#samplepart-top >h4').append('<b>نمونه کار </b>')
    $('#samplepart-top >h4').css({
      'text-align':'center',
      'color': '#0c8181',
      'font-size':'30px',
    })
    $('#samplepart-top >p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.')
    
    $('#samplepart-bottom').css({
      'margin-top' : '100px',
    })
    $('#samplepart-bottom>div >div >div').css({
      'width':'80%',
      'height': '80%',
      'background-color': '#0c8181',
      'opacity':'0.75',
      'position':'absolute',
      'margin':'10%',
      'border-radius' : '5px',
      'color':'white',
      'display':'none',
      'font-size' :'18px',
      'cursor':'pointer',
    })
    /* THE TITLE OF GREEN HOVER BOXES */
    /* BOX FROM 1 TO 4 */
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(1) > div > p:nth-child(1)').append('<b>1 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(2) > div > p:nth-child(1)').append('<b>2 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(3) > div > p:nth-child(1)').append('<b>3 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(4) > div > p:nth-child(1)').append('<b>4 عنوان</b>');
    /* BOX FROM 5 TO 8 */
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(1) > div > p:nth-child(1)').append('<b>5 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(2) > div > p:nth-child(1)').append('<b>6 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(3) > div > p:nth-child(1)').append('<b>7 عنوان</b>');
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(4) > div > p:nth-child(1)').append('<b>8 عنوان</b>');
    
    $('#samplepart-bottom>div >div> div> p:nth-child(1)').css({
      'text-align':'center',
      'padding':'15px 0px',
      'font-size':'20px'
    })
    /* THE TEXT OF GREEN HOVER BOXES */
    /* BOX FROM 1 TO 4 */
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(1) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(2) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(3) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(1) >div:nth-child(4) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    /* BOX FROM 5 TO 8 */
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(1) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(2) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(3) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div:nth-child(2) >div:nth-child(4) >div> p:nth-child(2)').append('ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .')
    $('#samplepart-bottom >div >div> div> p:nth-child(2)').css({
      'padding':'5px 20px',
    })
    $('#samplepart-bottom>div >div').mouseover(function(){
      $(this).find('div').fadeIn({
        'display':'block',
      })
    })
    $('#samplepart-bottom>div >div').mouseleave(function(){
      $(this).find('div').fadeOut({
        'display':'hide',
      })
    })

    /*******  CONTACTUS CONTACTUS CONTACTUS *********/

    $('#contactus >h1').append('تماس با ما');
    $('#contactus >h1').css({
      'text-align':'center',
      'color': '#0c8181',
      'font-size':'32px',
      'font-weight':'1000',
    })
    $('#contactus >h1').click(function(){
      window.open('contactUs.html')
    })
    $('#contactus> p').append('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.')
    /********  GO UP CLICK *********/

     $('#go-up').click(function(){
        $('html, body').animate({
          scrollTop: $('#mainmenu').offset().top
        }, 2000);
    }) ;

    /********  FOOTER FOOTER FOOTER FOOTER *********/
    $('footer >div:nth-child(2)').css({
      'width' : '100%',
      'height': '50px',
      'background-color': 'black',
      'bottom' : '0px',
      'position':'absolute',
      'padding-top': '10px',
    })
    $('footer > div> p').append('تمامی حقوق محفوظ می باشد')
    $('footer > div> p').css({
      'text-align':'center',
      'color':'rgb(202, 202, 202)',
    })
    $('footer> form> p').css({
      'text-align':'center',
      'color':'red',
    })
    $('footer> form> #sendmsg').css({
      'width':'110px',
      'display':'block',
      'margin':'0 auto',
      'padding': '5px 10px',
      'text-align':'center',
      'background-color': 'yellow',
      'border':'2px solid black',
      'border-radius' : '5px',
      'font-size': 'large',
      'font-weight': '800',
      'color':'black',
    })

  })

     /******* THIS PART VALIDATE THE FORM ********/

     function checkInput(){
      var mylname =document.getElementById('lname');
      var myemail =document.getElementById('email');
      var mymsg =document.getElementById('msg');
      let text = " !نام خود را وارد نکرده اید"
      let em = " ایمیل خود را وارد نکرده اید "
      let emer = "فرمت ایمیل قابل قبول نیست ! "
      let mesg = " پیامی ندارید ؟ "
      let emtrue = 0;
      var myvalid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      

      if(mylname && mylname.value && myemail && myemail.value && mymsg && mymsg.value && emtrue ==1 ){
          swal({
              title: "!بسیار عالی",
              text: "پیام شما با موفقیت ارسال شد",
              icon: "success",
          });
      }

      if(mylname.value==""){
      document.getElementById("lname-text").innerHTML= text;
          }else{
      document.getElementById("lname-text").innerHTML="";
      }

      if( myemail.value == "" ){
          document.getElementById("email-text").innerHTML= em;
      }else if (myemail.value.match(myvalid)){
          document.getElementById("email-text").innerHTML= "";
          emtrue =1;
          return true;
      }else{
          document.getElementById("email-text").innerHTML=emer;
          return false;
          } 
     
      if (mymsg.value ==""){
      document.getElementById("msg-text").innerHTML= mesg;
          }else{
      document.getElementById("msg-text").innerHTML="";
      }
  }



