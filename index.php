<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tampere Social Dancing</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:image" content="https://i.ibb.co/Rp1YXn8/collage-1-900x425.png"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="http://www.tamperesocialdancing.fi"/>
  <meta property="og:title" content="Tampere Social Dancing"/>
  <meta property="og:description" content="Tampere based social dancing promoters with fun and accessible classes."/>
  <link rel="icon" type="image/svg+xml"
	  href="https://gist.githubusercontent.com/fjdrodrigues/53da4d1fc55d2399b68df87dbdf34b33/raw/235e284e6d83b364ad745edd193f24251a9daeb1/tamperesocialdancing_nobackground.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body></body>
<?php

include_angular_app();
function include_angular_app() {
        echo "<app-root></app-root>";
        echo "<script src=\"polyfills.js\" type=\"module\"></script>";
        echo "<script src=\"runtime.js\" type=\"module\"></script>";
        echo "<script src=\"main.js\" type=\"module\"></script>";
}
?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LPDFF3S0ME"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LPDFF3S0ME');
</script>
</html>