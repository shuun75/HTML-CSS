$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $(".guide").toggleClass('hidden');
  $(".items").toggleClass('on-display');
});