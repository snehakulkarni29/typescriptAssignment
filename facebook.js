// defining a class
var facebookData = /** @class */ (function () {
    function facebookData(result) {
        var _this = this;
        this.result = result;
        this.getId = function () {
            return _this.result.id;
        };
        this.getName = function () {
            return _this.result.name;
        };
        this.getaddress = function () {
            return _this.result.address;
        };
        this.getbirthday = function () {
            return _this.result.birthday;
        };
        this.geteducation = function () {
            return _this.result.education;
        };
        this.getemail = function () {
            return _this.result.email;
        };
        this.getabout = function () {
            return _this.result.about;
        };
        this.result = result;
        console.log(this.result);
    } // end constructor
    return facebookData;
}()); // end class 
