// ---------------------------------------------------------------
// ASSETS.JS — imágenes / video de cada pantalla de color
// ---------------------------------------------------------------
// Coloca tus archivos dentro de una carpeta "assets/" al lado de
// index.html y assets.js, con estos nombres (o cambia las rutas
// de abajo si prefieres otros nombres/formatos):
//
//   assets/
//     orange.jpg   -> pantalla naranja (intro, primer SPACE)
//     rose.mp4      -> pantalla rosa (video de 1 segundo, intro)
//     green.jpg     -> pantalla verde
//     purple.jpg    -> pantalla morada
//     red.jpg       -> pantalla roja
//     blue.jpg      -> pantalla azul (pantalla completa)
//     yellow.jpg    -> pantalla amarilla
//
// type: 'image' -> se muestra con <img>
// type: 'video' -> se muestra con <video> (loop automático,
//                  útil porque el clip dura solo 1 segundo)

const SCREEN_ASSETS = {
  orange: { type: 'image', src: 'assets/orange.jpg' },
  rose:   { type: 'video', src: 'assets/rose.mp4'   },
  green:  { type: 'image', src: 'assets/green.jpg'  },
  purple: { type: 'image', src: 'assets/purple.jpg' },
  red:    { type: 'image', src: 'assets/red.jpg'    },
  blue:   { type: 'image', src: 'assets/blue.jpg'   },
  yellow: { type: 'image', src: 'assets/yellow.jpg' },
};
