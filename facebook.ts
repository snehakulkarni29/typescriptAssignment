// defining a class
class facebookData {
    constructor(public result :any) {
        this.result=result;
        console.log(this.result);

    }// end constructor
    getId = () => {
        return this.result.id
    }
    getName = () => {
        return this.result.name
    }
    getaddress = () => {
        return this.result.address
    }
    getbirthday = () => {
        return this.result.birthday
    }
    geteducation = () => {
        return this.result.education
    }
    getemail = () => {
        return this.result.email
    }
    getabout = () => {
        return this.result.about
    }    


}// end class 
