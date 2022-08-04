// close all unclosed modules
; (function (global) {
    'use strict';
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * @function isWindow // check if an object is the window
     */
    const isWindow = (obj) = obj.self == obj;
    // For default imports 
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /**
     * @function toascci 
     * Convert Each string to it's
     * ascii equalivent.                 
     * @param {*} str 
     * @returns 
     */
    const toascci = (str) => {
        return [...str]
            .map(c => c.charCodeAt(0))
    }
    /**
     *  
     * @param {} str  // The string to convert base of the radix
     * @param {*} radix // a number to cast the string
     * @param {*} type the return type of the ansi-toradix
     * @returns {[]string || string}
     */
    exports.default = (str, radix, type) => {
        const results = toascci(str).map(c => c.toString(radix))
        switch (type) {
            case "array":
                return results
            default:
            case "string":
                return result.join('');
        }
    }

    if (typeof define == "function" && define.amd) {
        define([], exports["default"]);

    } else if (typeof module == "object" && module.exports) {

        module.exports = exports["default"];
    }
    // Don't Pollute the global namespace unless 
    //it is a browser without default imports/exports
    else if (!hasOwnProperty.call(exports, '__esModule') && isWindow(obj) ) {
        global.toRadixOf = exports["default"];
    }
})(this)