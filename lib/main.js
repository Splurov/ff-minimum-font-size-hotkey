var { Hotkey } = require("sdk/hotkeys");
var simplePrefs = require("sdk/simple-prefs").prefs;

var prefService = require('sdk/preferences/service');

var prefs = [
    'font.minimum-size.x-armn',
    'font.minimum-size.x-baltic',
    'font.minimum-size.x-beng',
    'font.minimum-size.x-cans',
    'font.minimum-size.x-central-euro',
    'font.minimum-size.x-cyrillic',
    'font.minimum-size.x-devanagari',
    'font.minimum-size.x-ethi',
    'font.minimum-size.x-geor',
    'font.minimum-size.x-gujr',
    'font.minimum-size.x-guru',
    'font.minimum-size.x-khmr',
    'font.minimum-size.x-knda',
    'font.minimum-size.x-mlym',
    'font.minimum-size.x-orya',
    'font.minimum-size.x-sinh',
    'font.minimum-size.x-tamil',
    'font.minimum-size.x-telu',
    'font.minimum-size.x-tibt',
    'font.minimum-size.x-unicode',
    'font.minimum-size.x-user-def',
    'font.minimum-size.x-western',
];

Hotkey({
   combo: "accel-shift-0",
   onPress: function() {
       var currentValue = prefService.get(prefs[0]);
       var fontSize = simplePrefs.minimumFontSize;
       prefs.forEach(function(v){
           if (currentValue === fontSize) {
               prefService.reset(v);
           }
           else {
               prefService.set(v, fontSize);
           }
       });
   }
});