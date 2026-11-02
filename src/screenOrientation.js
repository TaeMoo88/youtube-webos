document.addEventListener('screenOrientationChange', function (event) {
  console.log('handleScreenOrientationChange', event.screenOrientation);
  window.webOSSystem.setWindowOrientation(event.screenOrientation);
});

window.onresize = function () {
  console.log(
    'width x height : ' + window.innerWidth + ' x ' + window.innerHeight
  );
};
