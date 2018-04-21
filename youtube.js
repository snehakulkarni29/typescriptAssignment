// defining a class
var youtubeData = /** @class */ (function () {
    function youtubeData(result) {
        var _this = this;
        this.result = result;
        this.getTitle = function () {
            return _this.result.title;
        };
        this.getAddress = function () {
            return _this.result.address;
        };
        this.getType = function () {
            return _this.result.type;
        };
        this.getviewcount = function () {
            return _this.result.view;
        };
        this.result = result;
        console.log(this.result);
    } // end constructor
    return youtubeData;
}()); // end class 
