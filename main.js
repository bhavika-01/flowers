if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
   
  }
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
  });