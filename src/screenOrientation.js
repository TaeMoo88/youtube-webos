function initializeScreenOrientation() {
  const webOS = window.webOSSystem;

  // Only supported on rotatable StanbyME models
  if (!webOS || webOS.currentOrientation === undefined) return;

  const updateOrientation = (orientation) => {
    webOS.setWindowOrientation(orientation);
  };

  document.addEventListener('screenOrientationChange', (event) => {
    updateOrientation(event.screenOrientation);
  });

  // Apply the current physical orientation on startup
  updateOrientation(webOS.screenOrientation);

  // Reapply orientation when returning to the app
  document.addEventListener('focus', () => {
    updateOrientation(webOS.screenOrientation);
  });
}

initializeScreenOrientation();
