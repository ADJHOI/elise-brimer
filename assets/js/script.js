$('.main-carousel').flickity({
  // options
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    wrapAround: true,
    setGallerySize: false,
});

var $dpCarousel = $('#dp-carousel').flickity();
var dpFlkty = $dpCarousel.data('flickity');
function dpUpdate() {
  var cellNumber = dpFlkty.selectedIndex + 1;
  $("#dp-current").text(cellNumber);
  $("#dp-total").text(dpFlkty.cells.length);
}
dpUpdate();
$dpCarousel.on( 'select.flickity', dpUpdate );

var $fCarousel = $('#f-carousel').flickity();
var fFlkty = $fCarousel.data('flickity');
function fUpdate() {
  var cellNumber = fFlkty.selectedIndex + 1;
  $("#f-current").text(cellNumber);
  $("#f-total").text(fFlkty.cells.length);
}
fUpdate();
$fCarousel.on( 'select.flickity', fUpdate );

var $ftlomCarousel = $('#ftlom-carousel').flickity();
var ftlomFlkty = $ftlomCarousel.data('flickity');
function ftlomUpdate() {
  var cellNumber = ftlomFlkty.selectedIndex + 1;
  $("#ftlom-current").text(cellNumber);
  $("#ftlom-total").text(ftlomFlkty.cells.length);
}
ftlomUpdate();
$ftlomCarousel.on( 'select.flickity', ftlomUpdate );

var $deCarousel = $('#de-carousel').flickity();
var deFlkty = $deCarousel.data('flickity');
function deUpdate() {
  var cellNumber = deFlkty.selectedIndex + 1;
  $("#de-current").text(cellNumber);
  $("#de-total").text(deFlkty.cells.length);
}
deUpdate();
$deCarousel.on( 'select.flickity', deUpdate );

var $ndCarousel = $('#nd-carousel').flickity();
var ndFlkty = $ndCarousel.data('flickity');
function ndUpdate() {
  var cellNumber = ndFlkty.selectedIndex + 1;
  $("#nd-current").text(cellNumber);
  $("#nd-total").text(ndFlkty.cells.length);
}
ndUpdate();
$ndCarousel.on( 'select.flickity', ndUpdate );

var $spCarousel = $('#sp-carousel').flickity();
var spFlkty = $spCarousel.data('flickity');
function spUpdate() {
  var cellNumber = spFlkty.selectedIndex + 1;
  $("#sp-current").text(cellNumber);
  $("#sp-total").text(spFlkty.cells.length);
}
spUpdate();
$spCarousel.on( 'select.flickity', spUpdate );

$(".arrow-reveal").click(function(event){
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    $(this).siblings(".main-carousel").toggleClass("active");
});

$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) {
    try {
    
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });   