// ==UserScript==
// @name         Infinite Chrome Music Lab Tempo
// @namespace    http://github.com/TheAceburn/InfiniteChromeMusicLabTempo/releases/tag/tag
// @version      1.0
// @description  removes the tempo limits on the chrome music lab song maker although it breaks the slider
// @author       cynder using CHATGPT????!!!?!!?! :scream::scream:
// @match        https://musiclab.chromeexperiments.com/Song-Maker/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get all input elements with class "input-number" and name "tempo"
    var inputs = document.querySelectorAll('input.input-number[name="tempo"]');

    // Loop through each input element
    inputs.forEach(function(input) {
        // Update min attribute to -Infinity
        input.setAttribute('min', '-Infinity');
        // Update max attribute to Infinity
        input.setAttribute('max', 'Infinity');
    });
})();
