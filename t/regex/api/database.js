import _0x12417a from"\u002e\u002e\u002f\u0064\u0061\u0074\u0061\u002f\u0063\u006f\u006d\u006d\u006f\u006e\u0046\u0061\u0076\u006f\u0072\u0069\u0074\u0065\u0073\u002e\u006a\u0073";const project_prefix="-xegeR-T".split("").reverse().join("");const database={"\u0067\u0065\u0074":function(_0x11068b){return window["\u006c\u006f\u0063\u0061\u006c\u0053\u0074\u006f\u0072\u0061\u0067\u0065"]["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"](project_prefix+_0x11068b);},"\u0073\u0065\u0074":function(_0x8e5234,_0x488873){window["\u006c\u006f\u0063\u0061\u006c\u0053\u0074\u006f\u0072\u0061\u0067\u0065"]["\u0073\u0065\u0074\u0049\u0074\u0065\u006d"](project_prefix+_0x8e5234,_0x488873);}};export function getDefaultCodeType(){return database["\u0067\u0065\u0074"]("\u0064\u0065\u0066\u0061\u0075\u006c\u0074\u0043\u006f\u0064\u0065\u0054\u0079\u0070\u0065");}export function setDefaultCodeType(_0x4ebddb){database["\u0073\u0065\u0074"]("epyTedoCtluafed".split("").reverse().join(""),_0x4ebddb);}export function getFavoriteList(){let _0x1216a9=undefined;try{_0x1216a9=JSON["\u0070\u0061\u0072\u0073\u0065"](database['get']("setirovaf".split("").reverse().join("")));}catch(_0x2121e2){}_0x1216a9=_0x1216a9||undefined;return _0x1216a9;}export function saveFavorites(_0x1b1820){if(_0x1b1820){database['set']("setirovaf".split("").reverse().join(""),JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x1b1820));}}export function addFavorite(_0x1a79ef){const _0x174b48=getFavoriteList()||[];_0x174b48['push'](_0x1a79ef);saveFavorites(_0x174b48);}export function deleteFavorite(_0x56ef9b){const _0x253e05=getFavoriteList()||[];const _0x546db5=_0x253e05['findIndex'](_0xc72dac=>_0xc72dac["\u0069\u0064"]==_0x56ef9b);if(_0x546db5>=(0x45f79^0x45f79)){_0x253e05["\u0073\u0070\u006c\u0069\u0063\u0065"](_0x546db5,0x2f09c^0x2f09d);saveFavorites(_0x253e05);}}export function resetCommonFavoriteList(){let _0x377884=getFavoriteList()||[];const _0x34a8dc=_0x12417a['map'](_0x31c809=>_0x31c809["\u0069\u0064"]);const _0x38b766=[];_0x38b766["\u0070\u0075\u0073\u0068"](..._0x12417a);_0x377884['forEach'](_0x3169aa=>{if(_0x34a8dc["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0x3169aa["\u0069\u0064"])===-(0x4aaa2^0x4aaa3)){_0x38b766['push'](_0x3169aa);}});saveFavorites(_0x38b766);}export function resetAllFavoriteList(){saveFavorites(_0x12417a);return _0x12417a;}export function copyCode(_0x4c6a8f){copy(_0x4c6a8f);}
