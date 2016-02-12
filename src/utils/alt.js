import Alt from 'alt'
//if (process.env.NODE_ENV !== 'production') {
  // https://github.com/goatslacker/alt-devtool
  import chromeDebug from 'alt/utils/chromeDebug'
//}

var alt = new Alt();
if (process.env.NODE_ENV !== 'production') {
  chromeDebug(alt);
}

export default alt;
