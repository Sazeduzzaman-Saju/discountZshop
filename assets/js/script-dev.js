$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });

  $(".available-coupon-slider").slick({
    autoplay: true,
    slidesToShow: 6,
    dots: true,
    arrows: false,
  });

  // Custom Next button
  $(".custom-next").click(function () {
    $(".available-coupon-slider").slick("slickNext");
  });

  // Custom Previous button
  $(".custom-prev").click(function () {
    $(".available-coupon-slider").slick("slickPrev");
  });


  $(".grab-slider").slick({
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });

  // Custom Next button
  $(".grab-custom-next").click(function () {
    $(".grab-slider").slick("slickNext");
  });

  // Custom Previous button
  $(".grab-custom-prev").click(function () {
    $(".grab-slider").slick("slickPrev");
  });
});

// Copy Coupon Code
$(document).ready(function () {
  $(".copy-btn").click(function () {
    // Get the text inside the span
    var couponCode = $("#coupon-code").text();

    // Create a temporary input element
    var tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(couponCode).select();

    // Copy the text inside the input element
    document.execCommand("copy");

    // Remove the temporary input element
    tempInput.remove();

    // Show an alert
    alert("Copied the code: " + couponCode);
  });
});
