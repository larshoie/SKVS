function init() {

  // 'use strict';var Monthpicker=function(){function c(a,b){this.selectedMonth=this.selectedYear=this.currentYear=null;this.id=c.next_id++;c.instances[this.id]=this;this.original_input=a;this.InitOptions(b);this.InitValue();this.Init();this.RefreshInputs()}c.Get=function(a){if("undefined"===typeof a.parentElement.dataset.mp)throw"Unable to retrieve the Monthpicker of element "+a;return c.instances[a.parentElement.dataset.mp]};c.prototype.InitValue=function(){var a=new Date;this.currentYear=a.getFullYear();
  // var b=!1;this.original_input.value.match("[0-9]{1,2}/[0-9]{4}")&&(b=this.original_input.value.split("/"),this.selectedMonth=parseInt(b[0]),this.currentYear=this.selectedYear=parseInt(b[1]),b=!0);this.opts.allowNull||b||(this.selectedMonth=a.getMonth(),this.selectedYear=a.getFullYear(),null!==this.bounds.min.year&&(this.selectedYear<this.bounds.min.year?(this.selectedYear=this.bounds.min.year,this.selectedMonth=this.bounds.min.month?this.bounds.min.month:1):this.selectedYear==this.bounds.min.year&&
  // this.selectedMonth<this.bounds.min.month&&(this.selectedMonth=this.bounds.min.month)),null!==this.bounds.max.year&&(this.selectedYear>this.bounds.max.year?(this.selectedYear=this.bounds.max.year,this.selectedMonth=this.bounds.max.month?this.bounds.max.month:12):this.selectedYear==this.bounds.max.year&&this.selectedMonth>this.bounds.max.month&&(this.selectedMonth=this.bounds.max.month)),this.currentYear=this.selectedYear)};c.prototype.InitOptions=function(a){this.opts=c._clone(c.defaultOpts);this.MergeOptions(a);
  // this.EvaluateOptions()};c.prototype.UpdateOptions=function(a){this.MergeOptions(a);this.EvaluateOptions();this.RefreshUI()};c.prototype.MergeOptions=function(a){if(a)for(var b in a)this.opts[b]=a[b]};c.prototype.EvaluateOptions=function(){var a={min:{year:null,month:null},max:{year:null,month:null}};if(null!==this.opts.minValue||null!==this.opts.minYear)if(null!==this.opts.minValue&&null!==this.opts.minYear){var b=this.opts.minValue.split("/"),c=parseInt(this.opts.minYear),d=parseInt(b[1]);c>d?(a.min.year=
  // c,a.min.month=1):(a.min.year=d,a.min.month=parseInt(b[0]))}else null!==this.opts.minValue?(b=this.opts.minValue.split("/"),a.min.year=parseInt(b[1]),a.min.month=parseInt(b[0])):(a.min.year=parseInt(this.opts.minYear),a.min.month=1);if(null!==this.opts.maxValue||null!==this.opts.maxYear)null!==this.opts.maxValue&&null!==this.opts.maxYear?(b=this.opts.maxValue.split("/"),c=parseInt(this.opts.maxYear),d=parseInt(b[1]),c<d?(a.max.year=c,a.max.month=12):(a.max.year=d,a.max.month=parseInt(b[0]))):null!==
  // this.opts.maxValue?(b=this.opts.maxValue.split("/"),a.max.year=parseInt(b[1]),a.max.month=parseInt(b[0])):(a.max.year=parseInt(this.opts.maxYear),a.max.month=12);this.bounds=a};c.prototype.RefreshInputs=function(){this.selectedYear&&this.selectedMonth?(this.original_input.value=(10>this.selectedMonth?"0"+this.selectedMonth:this.selectedMonth.toString())+"/"+this.selectedYear,this.input.innerHTML=this.opts.monthLabels[this.selectedMonth-1]+" "+this.selectedYear):this.input.innerHTML='<span class="placeholder">'+
  // this.original_input.placeholder+"</span>"};c.prototype.RefreshUI=function(){this.UpdateCalendarView();null!==this.currentYear&&(this.year_input.innerHTML=this.currentYear.toString());this.UpdateYearSwitches()};c.prototype.InitIU=function(){this.parent=document.createElement("div");this.parent.classList.add("monthpicker");this.parent.tabIndex=-1;var a=getComputedStyle(this.original_input,null);this.parent.style.width=a.getPropertyValue("width");"auto"===this.parent.style.width&&(this.parent.style.width=
  // 0===this.original_input.offsetWidth?"100px":this.original_input.offsetWidth+"px");this.original_input.parentElement.insertBefore(this.parent,this.original_input);this.parent.appendChild(this.original_input);this.original_input.style.display="none";this.input=document.createElement("div");this.input.classList.add("monthpicker_input");this.input.style.height=a.getPropertyValue("height");"auto"===this.input.style.height&&(this.input.style.height=0===this.original_input.offsetHeight?"20px":this.original_input.offsetHeight+
  // "px");this.input.style.padding=a.getPropertyValue("padding");this.input.style.border=a.getPropertyValue("border");this.parent.appendChild(this.input);this.selector=document.createElement("div");this.selector.classList.add("monthpicker_selector");this.selector.style.display="none";for(var a="<table><tr><td><span class='yearSwitch down'>&lt;</span></td><td><div class='yearValue'>"+this.currentYear+"</div> </td><td><span class='yearSwitch up'>&gt;</span> </td></tr> ",b=0;4>b;b++)var c=3*b,d=this.opts.monthLabels.slice(c,
  // c+3),a=a+("<tr><td class='month month"+(c+1)+"' data-m='"+(c+1)+"'>"+d[0]+"</td><td class='month month"+(c+2)+"' data-m='"+(c+2)+"'>"+d[1]+"</td><td class='month month"+(c+3)+"' data-m='"+(c+3)+"'>"+d[2]+"</td></tr>");this.selector.innerHTML=a+"</table>";this.parent.appendChild(this.selector)};c.prototype.Init=function(){this.InitIU();this.year_input=this.selector.querySelector(".yearValue");this.parent.dataset.mp=this.id.toString();this.parent.addEventListener("focus",function(){c.instances[this.dataset.mp].Show()},
  // !0);this.parent.addEventListener("blur",function(){c.instances[this.dataset.mp].Hide()},!0);this.parent.querySelector(".yearSwitch.down").addEventListener("click",function(){c.instances[this.closest(".monthpicker").dataset.mp].PrevYear()});this.parent.querySelector(".yearSwitch.up").addEventListener("click",function(){c.instances[this.closest(".monthpicker").dataset.mp].NextYear()});for(var a=this.parent.querySelectorAll(".monthpicker_selector>table tr:not(:first-child) td.month"),b=0;b<a.length;b++)a[b].addEventListener("click",
  // function(){this.classList.contains("off")||c.instances[this.closest(".monthpicker").dataset.mp].SelectMonth(this.dataset.m)})};c.prototype.SelectMonth=function(a){var b=parseInt(a);if(isNaN(b))throw"Selected month is not a number : "+a;if(1>b||12<b)throw"Month is out of range (should be in [1:12], was "+a+")";this.selectedMonth=b;this.selectedYear=this.currentYear;this.RefreshUI();this.RefreshInputs();this.ReleaseFocus();if(null!==this.opts.onSelect)this.opts.onSelect()};c.prototype.UpdateCalendarView=
  // function(){for(var a=this.selector.querySelectorAll(".month"),b=0;b<a.length;b++)a[b].classList.remove("selected");null!==this.selectedYear&&this.currentYear===this.selectedYear&&a[this.selectedMonth-1].classList.add("selected");for(b=0;b<a.length;b++)a[b].classList.remove("off");if(null!==this.bounds.min.year&&this.currentYear<=this.bounds.min.year)for(b=1;b<this.bounds.min.month;b++)a[b-1].classList.add("off");if(null!==this.bounds.max.year&&this.currentYear>=this.bounds.max.year)for(b=12;b>this.bounds.max.month;b--)a[b-
  // 1].classList.add("off")};c.prototype.ReleaseFocus=function(){this.parent.blur()};c.prototype.Show=function(){this.RefreshUI();this.selector.style.display="block"};c.prototype.Hide=function(){null!==this.selectedYear&&(this.currentYear=this.selectedYear);this.selector.style.display="none"};c.prototype.ShowYear=function(a){this.currentYear=a;this.RefreshUI()};c.prototype.UpdateYearSwitches=function(){var a=this.selector.querySelector(".yearSwitch.down"),b=this.selector.querySelector(".yearSwitch.up");
  // null!==this.bounds.min.year&&this.currentYear<=this.bounds.min.year?a.classList.add("off"):a.classList.remove("off");null!==this.bounds.max.year&&this.currentYear>=this.bounds.max.year?b.classList.add("off"):b.classList.remove("off")};c.prototype.PrevYear=function(){this.ShowYear(this.currentYear-1)};c.prototype.NextYear=function(){this.ShowYear(this.currentYear+1)};c._clone=function(a){var b;if(null==a||"object"!=typeof a)return a;if(a instanceof Date)return b=new Date,b.setTime(a.getTime()),b;if(a instanceof
  // Array){b=[];for(var e=0,d=a.length;e<d;e++)b[e]=c._clone(a[e]);return b}if(a instanceof Object){b={};for(e in a)a.hasOwnProperty(e)&&(b[e]=c._clone(a[e]));return b}throw Error("Unable to copy obj! Its type isn't supported.");};c.next_id=1;c.instances=[];c.defaultOpts={minValue:null,minYear:null,maxValue:null,maxYear:null,monthLabels:"Jan Feb Mar Apr May Jun Jui Aug Sep Oct Nov Dec".split(" "),onSelect:null,onClose:null,allowNull:!0};return c}();
  // window.jQuery&&(window.jQuery.fn.Monthpicker=function(c,a){var b;if("undefined"===typeof c||"object"===typeof c)b="ctor";else if("string"===typeof c&&"option"===c)b="option";else{console.error("Error : Monthpicker - bad argument (1)");return}window.jQuery(this).each(function(e,d){switch(b){case "ctor":"INPUT"!=d.tagName||"text"!=d.getAttribute("type")&&null!==d.getAttribute("type")?console.error("Monthpicker must be called on a text input"):new Monthpicker(d,c);break;case "option":"INPUT"!=d.tagName||
  // "text"!=d.getAttribute("type")&&null!==d.getAttribute("type")?console.error("Monthpicker must be called on a text input"):Monthpicker.Get(d).UpdateOptions(a)}})});window.Element&&function(c){c.matches=c.matches||c.matchesSelector||c.webkitMatchesSelector||c.msMatchesSelector||function(a){a=(this.parentNode||this.document).querySelectorAll(a);for(var b=-1;a[++b]&&a[b]!=this;);return!!a[b]}}(window.Element.prototype);
  // window.Element&&function(c){c.closest=c.closest||function(a){for(var b=this;b.matches&&!b.matches(a);)b=b.parentNode;return b.matches?b:null}}(window.Element.prototype);
  //
  // $('#startDate').Monthpicker({
  //         onSelect: function () {
  //             $('#endDate').Monthpicker('option', { minValue: $('#startDate').val() });
  //         }
  //     });
  //     $('#endDate').Monthpicker({
  //         onSelect: function () {
  //             $('#startDate').Monthpicker('option', { maxValue: $('#endDate').val() });
  //         }
  //     });






//
  // Scroll til #
  // $('a[href^="#"]').on('click',function (e) {
  //     e.preventDefault();
  //
  //     var target = this.hash;
  //     var $target = $(target);
  //
  //     $('html, body').stop().animate({
  //         'scrollTop': $target.offset().top - 100
  //     }, 300, 'swing', function () {
  //         window.location.hash = target; // kanskje like greit å ikke oppdatere hash?
  //     });
  // });
//
//             // Markér tekst fra artikler for å dele til Twitter/Mail/FB (må ha en app key for å dele via FB)
//             // $('article').selectionSharer();
//
//   // // Vis footnotes når man hovrer over fotnote-lenke
//   // $("sup > a").notes();
//
//   // // MODALS
//   // // Åpne vindu (søk og sign-up)
//   // $(".newsletter-btn").click(function(e) {
//   //   $(".sub").fadeIn(200, freeze());
//   //   $("#navn").focus();
//   //   e.stopPropagation();
//   // });
//   // $(".search-btn").click(function(e) {
//   //   $(".big-search").fadeIn(200, freeze());
//   //   $("#search").focus();
//   //   e.stopPropagation();
//   // });
//   // // Lukk vindu ved å klikke på lenke
//   // $(".close").click(function() {
//   //   unfreeze();
//   //   $(".big-search, .sub").fadeOut(200);
//   // });
//   // // Lukk vindu ved enten esc eller enter (intill vi har en fungerende POST/ajax?)
//   // $(window).bind('keydown', function(e) {
//   //   if(e.keyCode === 27 | event.keyCode === 13 ) {
//   //     unfreeze();
//   //     $(".big-search, .sub").fadeOut(200);
//   //   }
//   // });
//   // // Lukk vindu ved klikk utenfor input
//   // $(".modal-wrap").click(function(e) {
//   //   unfreeze();
//   //   $(".big-search, .sub").fadeOut(200);
//   // });
//   // // Men ikke lukk vindu for klikk i input
//   // $("input, .date-picker").click(function(e) {
//   //   e.stopPropagation();
//   // });
//   //
//   // // Stopp scroll på body midlertidig
//   // function freeze() {
//   //   //$("body").addClass("freeze");
//   //     $('html, body').css({
//   //     'overflow': 'hidden'
//   //   });
//   // };
//   // function unfreeze() {
//   //   //$("body").removeClass("freeze");
//   //     $('html, body').css({
//   //     'overflow': 'auto',
//   //     'height': 'auto'
//   //   });
//   // };
//   //
//   //
//   //
//   // // SEARCH (DEMO)
//   // $('#search').tipuedrop({
//   //   'mode': 'json',
//   //   'contentLocation': 'js/search-demo.json'
//   // });
//   // // Scroll input when results show up
//   // $('#search').on('input', function() {
//   //   $('.search').animate({top:'-15vh'}, 10, function() {
//   //       //callback
//   //   });
//   // });
//   // // Scroll input back down on clear
//   // $("#search").keyup(function(){
//   //    if($(this).val() == "") {
//   //     // Cleared
//   //     $('.search').animate({top:'15vh'}, 10, function() {
//   //     //callback
//   //     $(".big-search").fadeOut(400);
//   //     unfreeze();
//   //     });
//   //
//   //    }
//   // });
//   //
//   //   var $search = $("#search");
//   //
//   //   $(document).on("keydown", function(e) {
//   //     if (!$search.is(":focus")) {
//   //       if(e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode == 222 || e.keyCode == 186 || e.keyCode == 219) { //ÆØÅ
//   //         $(".big-search").fadeIn(200, freeze());
//   //         $search.focus();
//   //         }
//   //       }
//   //   });
//   //
//   //
//   //
  // DATE-RANGE-SLIDER-THING



  // if ($(".irs").length == 0)){
  //       // it does not exists

        $("#date").ionRangeSlider({
          type: "double",
          //min_interval: 30,
                grid: true,
                grid_num: 10,
          force_edges: true,
          //min: +moment().subtract(10, "years").format("X"), //her har vi sikkert en fast dato i stedet? Eks. 1155694292
          min: 1155694292,
          max: +moment().format("X"),
          //from: +moment().subtract(30, "months").format("X"),
          from: 1167609600,
          prettify: function (num) {
            var m = moment(num, "X").locale("nb-no");
              return m.format("MMMM Y");
          },
          onFinish: datoData
        });

        function datoData() {

          var datoSlider = $("#date").data("ionRangeSlider");

          var from = datoSlider.result.from;
          var to = datoSlider.result.to;

          console.log("Søk fra " + from + " til " + to);

        };



  // };


//   //
//   // // ÅPNINGSTEKST INTRO FADE
//   // $(window).scroll(function(){
//   //     var logoFadeOffset = $(window).height() / 8;
//   //     var scrollVar = $(window).scrollTop() / 2;
//   //     $('.intro').css({'opacity':( logoFadeOffset - scrollVar ) / 50});
//   // });
//
//
//
//
//
//
//
//
// // inView('.page').on('enter', enterViewport);
// //
// // inView('.page').on('exit', exitViewport);
// //
// // function enterViewport() {
// //   //console.log($(this).find('video').get(0));
// //   // $(this).find('video').play();
// // }
// // function exitViewport() {
// //   //console.log($(this).find('video').get(0));
// //   // $(this).find('video').pause();
// // }
// //
// // inView.threshold(0.5);
// //
// //
//
//
//
//
//
// // inView('.page.wow').on('enter', enterSection);
// //
// // inView('.page.wow').on('exit', exitSection);
// //
// // function enterSection() {
// //   $('.wow').addClass('animated');
// // }
// // function exitSection() {
// //   $('.wow').removeClass('animated');
// // }
// //
// // inView.threshold(1);
//
//
//
//
// // inView('section').on('enter', enterFooter);
// //
// // inView('section').on('exit', exitFooter);
// //
// // function enterFooter() {
// //   $(this).addClass('animated');
// //   //$(this).find('.kolumnetittel').addClass('visible');
// // }
// // function exitFooter() {
// //   $('footer .kolumnetittel').removeClass('animated');
// // }
//
//
//
// //inView.threshold(1);
//
//
//
//
// // function onScrollInit( items, trigger ) {
// //   items.each( function() {
// //     var osElement = $(this);
// //         //osAnimationClass = osElement.attr('data-os-animation');
// //     var osTrigger = ( trigger ) ? trigger : osElement;
// //
// //
// // //         osTrigger.waypoint(function(direction) {
// // //           osElement.toggleClass('animated');
// // //           },{
// // //               triggerOnce: false,
// // //               offset: '0%'
// // //         });
// // //   });
// // // }
// //
// // //         osTrigger.waypoint(function(direction) {
// // //           if (direction === 'down') { osElement.toggleClass('animated'); }
// // //           else { osElement.toggleClass('animated'); }
// // //         }, {
// // //               triggerOnce: false,
// // //               offset: '0%'
// // //         });
// // //   });
// // // }
// //
// //             osTrigger.waypoint(function(direction) {
// //               osElement.toggleClass('animated');
// //             }, { offset: '0%' })
// //             osTrigger.waypoint(function(direction) {
// //               osElement.toggleClass('animated');
// //             }, { offset: '50%' });
// //
// //       });
// //     }
// //
// //  onScrollInit( $('.wow') );
//
//
//
//
$('.nyheter').waypoint(function(direction) {

    if (direction ==='down') {
            $('.breadcrumbs').addClass('visible');
        }
        else {
                $('.breadcrumbs').removeClass('visible');
        }
},{
  offset: '15%'
});

$('.footer').waypoint(function(direction) {

    if (direction ==='down') {
            // $('footer').toggleClass('animated');
            // $('.nyheter, .artikkel').toggleClass('animated');
            $('.breadcrumbs').removeClass('visible');
            $('.search-header').addClass('hidden');
        }
        else {
                $('.search-header').removeClass('hidden');
        }
},{
  offset: '15%'
});

//
// // // CYCLE SLIDES MULIGENS PÅ FORSIDEN
// // $('.twitter').cycle({
// //     timeout: 7000,
// //     slides: "> blockquote",
// //     pauseOnHover: true
// // });
//
//
//
// // function pageScrollShit( items, trigger ) {
// //   items.each( function() {
// //     var osElement = $(this);
// //     var osTrigger = ( trigger ) ? trigger : osElement;
// //
// //             osTrigger.waypoint(function(direction) {
// //               $('.page.wow').removeClass('animated');
// //               osElement.toggleClass('animated');
// //             }, { offset: '20%' });
// //       });
// //     }
// //
// //  pageScrollShit( $('.page.wow') );
// //
//
//
//
//
//
//
//
//
//
//
//
}; // END INIT
//
//
//
//
init();




// // SmoothState (Progressive enhancement med AJAX/PJAX)
// $(function(){
//   'use strict';
//   var options = {
//     prefetch: true,
//     cacheLength: 30,
//
//     onStart: {
//       duration: 250, // Duration of our animation
//       render: function ($container) {
//         // Add the CSS animation reversing class
//         $container.addClass('is-exiting');
//         // Restart the animation
//         smoothState.restartCSSAnimations();
//       }
//     },
//
//     onReady: {
//       duration: 0,
//       render: function ($container, $newContent) {
//         // Remove the CSS animation reversing class
//         $container.removeClass('is-exiting');
//         // Inject the new content
//         $container.html($newContent);
//       }
//     },
//
//     onAfter: function($container, $newContent) {
//       // SUPERVIKTIG
//       init(); // On ajax load, go and init that shit again
//
//     }
//
//   },
//   smoothState = $('#main').smoothState(options).data('smoothState');
// });
