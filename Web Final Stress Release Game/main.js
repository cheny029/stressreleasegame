
var urls = ['https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif',
            'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif']

var keyCount = 0;

$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;


  console.log('keypress:' + key + " keyCount: " + keyCount);
  //Look up js "case"
  switch(key){
    case 'a':
      img = 'http://66.media.tumblr.com/tumblr_ljmldzb9ii1qg0dcvo1_r2_500.gif';
      keyCount++;
      break;
    case 'b':
      img = 'https://steamuserimages-a.akamaihd.net/ugc/942832810037773995/57490018F1B024CC09706D3106251C92A4E5B5F0/';
      keyCount++;
      break;
    case 'c':
      img = 'http://66.media.tumblr.com/tumblr_mdgokqqjbP1rcbrvio1_400.gif';
      keyCount++;
      break;
    case 'd':
      img = 'https://cdn2.scratch.mit.edu/get_image/gallery/484881_200x130.png';
      keyCount++;
      break;
    case 'e':
      img = 'https://66.media.tumblr.com/22a09e751c29806f1d775438aafaa495/tumblr_mxmjry5vXF1s6dehzo1_500.gif';
      keyCount++;
      break;
    case 'f':
      img = 'http://66.media.tumblr.com/tumblr_m8n4f83g0c1qea4bho1_500.gif';
      keyCount++;
      break;
    case 'g':
      img = 'https://i.giphy.com/media/EogYCe8XJOgbS/source.gif';
      keyCount++;
      break;
    case 'h':
      img = 'https://66.media.tumblr.com/139f44e1765b325e31e616605558d9ac/tumblr_ndogan2N7A1rc0cy9o1_500.gif';
      keyCount++;
      break;
    case 'i':
      img = 'https://data.whicdn.com/images/242499276/original.gif';
      keyCount++;
      break;
    case 'j':
      img = 'https://media.giphy.com/media/xmTLS69PcP9fO/giphy.gif';
      keyCount++;
      break;
    case 'k':
      img = 'https://66.media.tumblr.com/fdc394b4f66d33ddada1e3aedae61252/tumblr_papijx9XR91sznvawo1_250.gif';
      keyCount++;
      break;
    case 'l':
      img = 'https://thumbs.gfycat.com/LazyBareHuemul-max-1mb.gif';
      keyCount++;
      break;
    case 'm':
      img = 'https://data.whicdn.com/images/80894308/original.gif';
      keyCount++;
      break;
    case 'n':
      img = 'https://66.media.tumblr.com/b6ed3df019d18f0b56a92e1a60c4bbf9/tumblr_n1a3ncsU2q1rfjowdo1_500.gif';
      keyCount++;
      break;
    case 'o':
      img = 'https://media.giphy.com/media/NgoHHZMp27iCY/giphy.gif';
      keyCount++;
      break;
    case 'p':
      img = 'https://data.whicdn.com/images/286687755/original.gif';
      keyCount++;
      break;
    case 'q':
      img = 'http://66.media.tumblr.com/tumblr_ljgt0n3d7E1qii50go1_r1_400.gif';
      keyCount++;
      break;
    case 'r':
      img = 'https://media2.giphy.com/media/fkOJ4fcBkvz1e/giphy.gif';
      keyCount++;
      break;
    case 's':
      img = 'http://66.media.tumblr.com/9ea917dd47a9fd2ad0a3638179d6cfc6/tumblr_mkuqqsTeWn1r67h3uo1_500.gif';
      keyCount++;
      break;
    case 't':
      img = 'https://archive-media-1.nyafuu.org/vp/image/1472/15/1472157126251.gif';
      keyCount++;
      break;
    case 'u':
      img = 'https://media.giphy.com/media/FasLs2XEO5G2A/giphy.gif';
      keyCount++;
      break;
    case 'v':
      img = 'http://66.media.tumblr.com/tumblr_ljq2wx34r81qii50go1_400.gif';
      keyCount++;
      break;
    case 'w':
      img = 'https://slytherinto.weebly.com/uploads/5/1/9/6/5196199/8973149_orig.gif';
      keyCount++;
      break;
    case 'x':
      img = 'https://archive-media-1.nyafuu.org/vp/image/1477/70/1477701281095.gif';
      keyCount++;
      break;
    case 'y':
      img = 'https://sbstartbutton.files.wordpress.com/2015/06/tumblr_inline_mmr8iumpax1qz4rgp.gif';
      keyCount++;
      break;
    case 'z':
      img = 'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif';
      keyCount++;
      break;
    default:
      img = 'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif';
      keyCount++;
  }
  // if ( key == 'a' ) {
  //   img = 'http://66.media.tumblr.com/tumblr_ljmldzb9ii1qg0dcvo1_r2_500.gif';
  // } else if ( key == 'b' ) {
  //   img = 'https://steamuserimages-a.akamaihd.net/ugc/942832810037773995/57490018F1B024CC09706D3106251C92A4E5B5F0/';
  // } else if ( key == 'c' ) {
  //   img = 'http://66.media.tumblr.com/tumblr_mdgokqqjbP1rcbrvio1_400.gif';
  // }  else if ( key == 'd' ) {
  //   img = 'https://cdn2.scratch.mit.edu/get_image/gallery/484881_200x130.png';
  // } else if ( key == 'e' ) {
  //   img = 'https://66.media.tumblr.com/22a09e751c29806f1d775438aafaa495/tumblr_mxmjry5vXF1s6dehzo1_500.gif';
  // } else if ( key == 'f' ) {
  //   img = 'http://66.media.tumblr.com/tumblr_m8n4f83g0c1qea4bho1_500.gif';
  // } else if ( key == 'g' ) {
  //   img = 'https://i.giphy.com/media/EogYCe8XJOgbS/source.gif';
  // } else if ( key == 'h' ) {
  //   img = 'https://66.media.tumblr.com/139f44e1765b325e31e616605558d9ac/tumblr_ndogan2N7A1rc0cy9o1_500.gif';
  // } else if ( key == 'i' ) {
  //   img = 'https://data.whicdn.com/images/242499276/original.gif';
  // } else if ( key == 'j' ) {
  //   img = 'https://media.giphy.com/media/xmTLS69PcP9fO/giphy.gif';
  // } else if ( key == 'k' ) {
  //   img = 'https://66.media.tumblr.com/fdc394b4f66d33ddada1e3aedae61252/tumblr_papijx9XR91sznvawo1_250.gif';
  // } else if ( key == 'l' ) {
  //   img = 'https://thumbs.gfycat.com/LazyBareHuemul-max-1mb.gif';
  // } else if ( key == 'm' ) {
  //   img = 'https://data.whicdn.com/images/80894308/original.gif';
  // } else if ( key == 'n' ) {
  //   img = 'https://66.media.tumblr.com/b6ed3df019d18f0b56a92e1a60c4bbf9/tumblr_n1a3ncsU2q1rfjowdo1_500.gif';
  // } else if ( key == 'o' ) {
  //   img = 'https://media.giphy.com/media/NgoHHZMp27iCY/giphy.gif';
  // } else if ( key == 'p' ) {
  //   img = 'https://data.whicdn.com/images/286687755/original.gif';
  // } else if ( key == 'q' ) {
  //   img = 'http://66.media.tumblr.com/tumblr_ljgt0n3d7E1qii50go1_r1_400.gif';
  // } else if ( key == 'r' ) {
  //   img = 'https://media2.giphy.com/media/fkOJ4fcBkvz1e/giphy.gif';
  // } else if ( key == 's' ) {
  //   img = 'http://66.media.tumblr.com/9ea917dd47a9fd2ad0a3638179d6cfc6/tumblr_mkuqqsTeWn1r67h3uo1_500.gif';
  // } else if ( key == 't' ) {
  //   img = 'https://archive-media-1.nyafuu.org/vp/image/1472/15/1472157126251.gif';
  // } else if ( key == 'u' ) {
  //   img = 'https://media.giphy.com/media/FasLs2XEO5G2A/giphy.gif';
  // } else if ( key == 'v' ) {
  //   img = 'http://66.media.tumblr.com/tumblr_ljq2wx34r81qii50go1_400.gif';
  // } else if ( key == 'w' ) {
  //   img = 'https://slytherinto.weebly.com/uploads/5/1/9/6/5196199/8973149_orig.gif';
  // } else if ( key == 'x' ) {
  //   img = 'https://archive-media-1.nyafuu.org/vp/image/1477/70/1477701281095.gif';
  // } else if ( key == 'y' ) {
  //   img = 'https://sbstartbutton.files.wordpress.com/2015/06/tumblr_inline_mmr8iumpax1qz4rgp.gif';
  // } else if ( key == 'z' ) {
  //   img = 'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif';
  // } else {
  //   img = 'https://thumbs.gfycat.com/WeeMarriedGoldeneye-max-1mb.gif';
  // }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;" class="newPokemons">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
  if (keyCount > 100){
    console.log('STOOOOPPPPPP');
    document.getElementById('warning').style.opacity = "1";
  }

  if (keyCount > 120){
    console.log('STOOOOPPPPPP');
    document.getElementById('warning').style.opacity = "0";
  }

  if (keyCount > 130){
    location.reload();
  }
});
