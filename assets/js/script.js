$('.main-carousel').flickity({cellAlign:'center',contain:!0,pageDots:!1,wrapAround:!0,setGallerySize:!1,});var $dpCarousel=$('#dp-carousel').flickity();var dpFlkty=$dpCarousel.data('flickity');function dpUpdate(){var cellNumber=dpFlkty.selectedIndex+1;$("#dp-current").text(cellNumber);$("#dp-total").text(dpFlkty.cells.length)}
dpUpdate();$dpCarousel.on('select.flickity',dpUpdate);var $fCarousel=$('#f-carousel').flickity();var fFlkty=$fCarousel.data('flickity');function fUpdate(){var cellNumber=fFlkty.selectedIndex+1;$("#f-current").text(cellNumber);$("#f-total").text(fFlkty.cells.length)}
fUpdate();$fCarousel.on('select.flickity',fUpdate);var $ftlomCarousel=$('#ftlom-carousel').flickity();var ftlomFlkty=$ftlomCarousel.data('flickity');function ftlomUpdate(){var cellNumber=ftlomFlkty.selectedIndex+1;$("#ftlom-current").text(cellNumber);$("#ftlom-total").text(ftlomFlkty.cells.length)}
ftlomUpdate();$ftlomCarousel.on('select.flickity',ftlomUpdate);var $deCarousel=$('#de-carousel').flickity();var deFlkty=$deCarousel.data('flickity');function deUpdate(){var cellNumber=deFlkty.selectedIndex+1;$("#de-current").text(cellNumber);$("#de-total").text(deFlkty.cells.length)}
deUpdate();$deCarousel.on('select.flickity',deUpdate);var $ndCarousel=$('#nd-carousel').flickity();var ndFlkty=$ndCarousel.data('flickity');function ndUpdate(){var cellNumber=ndFlkty.selectedIndex+1;$("#nd-current").text(cellNumber);$("#nd-total").text(ndFlkty.cells.length)}
ndUpdate();$ndCarousel.on('select.flickity',ndUpdate);var $spCarousel=$('#sp-carousel').flickity();var spFlkty=$spCarousel.data('flickity');function spUpdate(){var cellNumber=spFlkty.selectedIndex+1;$("#sp-current").text(cellNumber);$("#sp-total").text(spFlkty.cells.length)}
spUpdate();$spCarousel.on('select.flickity',spUpdate);$(".descript-reveal").click(function(event){$(this).parent().next().toggleClass("active");$(this).parent().siblings(".main-carousel").toggleClass("active");if($(this).parent().next().hasClass("active")){$(this).children(".reveal").html("×")}else{$(this).children(".reveal").html("+")}});$(".expand").click(function(event){$(".page").toggleClass("active");$(".descript-reveal").toggleClass("active");$(".main-carousel").toggleClass("current");$(this).parent().next().removeClass("active");$(this).next().children(".reveal").html("+");$(this).parent().siblings(".main-carousel").removeClass("active");$(".work-title").toggleClass("active");$("html").toggleClass("locked");$(this).parent().parent().toggleClass("current");$(this).toggleClass("active")});$(".title a").click(function(event){if(($(window).scrollTop()+$(window).height())<$(document).height()){$([document.documentElement,document.body]).animate({scrollTop:$("#info").offset().top},450)}});$(function(){var touch='ontouchstart' in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(touch){try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(!styleSheet.rules)continue;for(var ri=styleSheet.rules.length-1;ri>=0;ri--){if(!styleSheet.rules[ri].selectorText)continue;if(styleSheet.rules[ri].selectorText.match(':hover')){styleSheet.deleteRule(ri)}}}}catch(ex){}}})