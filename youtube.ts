// defining a class
class youtubeData {
    constructor(public result :any) {
        this.result=result;
        console.log(this.result);

    }// end constructor
    getTitle = () => {
        return this.result.title
    }
    getAddress = () => {
        return this.result.address
    }
    getType = () => {
        return this.result.type
    }
    getviewcount = () => {
        return this.result.view
    }    


}// end class 
