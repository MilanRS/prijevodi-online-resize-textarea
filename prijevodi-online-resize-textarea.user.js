﻿// ==UserScript==
// @name         Resize textarea
// @namespace    https://www.prijevodi-online.org/
// @version      1.0
// @description  Resize textarea when posting on prijevodi-online.org
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @author       MilanRS@gmail.com
// @match        https://www.prijevodi-online.org/smf/index.php?action=post*
// @grant        none
// @updateURL    https://github.com/MilanRS/prijevodi-online-resize-textarea/raw/master/prijevodi-online-resize-textarea.user.js
// @downloadURL  https://github.com/MilanRS/prijevodi-online-resize-textarea/raw/master/prijevodi-online-resize-textarea.user.js
// ==/UserScript==

(function() {
    'use strict';

    $('.editor').css('height', '400px');
})();