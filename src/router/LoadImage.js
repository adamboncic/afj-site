
// Get list of files or direct file path
function getAssetFiles(view, assetName) {
  switch(view) {
    case 'About':
      return assetName
        ? require('@/assets/images/about/'+assetName)
        : require.context('@/assets/images/about');
    case 'Directing':
      return assetName
        ? require('@/assets/images/directing/gifs/'+assetName)
        : require.context('@/assets/images/directing/gifs');
    case 'Bolognese':
      return assetName
        ? require('@/assets/images/directing/bolognese/'+assetName)
        : require.context('@/assets/images/directing/bolognese')
    case 'Helium':
      return assetName
        ? require('@/assets/images/directing/helium/'+assetName)
        : require.context('@/assets/images/directing/helium')
    case 'BadJewGoodGirl':
      return assetName
        ? require('@/assets/images/directing/bjgg/'+assetName)
        : require.context('@/assets/images/directing/bjgg')
    default:
      return null;
    }
  }


export function loadImage(view) {
  var files = getAssetFiles(view)

  if (files) {
    files.keys().forEach((file) => {
      var fileName = file.substr(2)
      const img = new Image();
      img.src = getAssetFiles(view, fileName);
    });
  }
}