(function () {

    /**
     * 
     * @param {string} str 
     * @returns Arrays<string>
     */
    function toAscii(str) {
        return Array.from(str)
            .map(c => c.charCodeAt(0))
    }

    if (!Reflect.has(String.prototype, "toRadixOf")) {
        Object.defineProperty(String.prototype, "toRadixOf", {
            value: function toRadixOf(base) {
                return toAscii(this).map(c => c.toString(base));
            },
            enumerable: true
        })

    }

    if (typeof define == "function" && define.amd) {
        define([], String.prototype.toRadixOf)
    }
    else if (typeof module == "object" && module.exports) {
        module.exports = String.prototype.toRadixOf;
    }

})()
