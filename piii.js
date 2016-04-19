//https://github.com/theuves/piii.js

'use strict';

var Piii = (function () {
    var plvrs = [
        '69',
        'po(rr|h)(a|inha(zinha)?|ona|ao)',
        'cara(lh|i)(o(zinho|zao)?|inho(zinho)?|ao|ada)',
        'carai(o(zinho|zao)?|nho(zinho)?|ao|ada)',
        'put(a|o|inha(zinha)?|ona|ao)',
        'b(u|o)cet(a(zona|zinha)?|inha(zinha)?|ona|ao)',
        '(c|k)(u|uh|uzinho|uzao|uzona)',
        'pint(o(zinho|zao)?|inho|ao)',
        'v(i|e)ad(o(zinho)?|inho|ao)',
        'f(o|u)d(er|emos)',
        'rol(a|o)((zinha)?|ao|inha|na)',
        'pic(a|ona|ao)',
        'piro(c|k)(a(zinha)?|o|ona)',
        'fod(a|inha|ão|er|o|es|e|emos|eis|em)'
    ];

    for (var i in plvrs) {
        plvrs[i] = plvrs[i]
            .replace(/([\w])/g, '$1+')
            .replace(/(a|ã)/g, '[$124âàáã]')
            .replace(/(c)/g, '[$1ç]')
            .replace(/(e)/g, '[$13êé]')
            .replace(/(i)/g, '[$13í]')
            .replace(/(o)/g, '[$1õôó0]')
            .replace(/(s)/g, '[$15]')
            .replace(/(t)/g, '[$17]')
            .replace(/(u)/g, '[$1ûúü]');

        plvrs[i] = '(\\b' + plvrs[i] + '\\b)';
    }

    var regex = new RegExp(plvrs.join('|'), 'gi');

    return {
        extrair: function (str) {
            return str.match(regex) || [];
        },
        substituir: function (str, sbsttt) {
            return str.replace(regex, sbsttt);
        },
        verificar: function (str) {
            return str.match(regex) ? true : false;
        }
    };
})();
