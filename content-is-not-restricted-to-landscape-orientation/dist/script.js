javascript;
// Listen for orientation changes
window.addEventListener("orientationchange", function () {
   // Perform any additional adjustments if needed
   adjustLayout();
});

// You can also use matchMedia for more control
const portraitMediaQuery = window.matchMedia("(orientation: portrait)");

portraitMediaQuery.addEventListener("change", function (e) {
   if (e.matches) {
      console.log("Portrait mode detected");
      // Apply portrait-specific adjustments
   } else {
      console.log("Landscape mode detected");
      // Apply landscape-specific adjustments
   }
});

function adjustLayout() {
   // Custom layout adjustments beyond CSS media queries// This could include recalculating dimensions, repositioning elements, etc.
}