const PAGES_URL_PREFIX = "https://github.com/har-game/har-game.github.io/";
const PAGES_LIST_URL = PAGES_URL_PREFIX + "pages.list";

function httpGet( targetUrl ) {
  if( window.XMLHttpRequest ) {
    xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
  } else {
    xmlhttp = new ActiveXObject( "Microsoft.XMLHTTP" ); // code for IE6, IE5
  }
  
  xmlhttp.onreadystatechange = function() {
    if( xmlhttp.readyState === 4 && xmlhttp.status === 200 )
      return xmlhttp.responseText;
  }
  
  xmlhttp.open( "GET", targetUrl, false );
  xmlhttp.send();    
}

const URL_LIST = httpGet( PAGES_LIST_URL );
if( URL_LIST === null || URL_LIST === undefined )
  throw new Error( "" );

const NAV_TAG = document.getElementById( "nav" );
const LINES = URL_LIST.replaceAll( "\r","" ).split( "\n" );
const NUM_LINES = LINES.length;
//( let i = 0; i < NUM_LINES; ++i )
//  NAV_TAG.
