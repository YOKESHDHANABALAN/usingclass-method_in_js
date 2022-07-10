class Uber{
    constructor(distance, rate, waitingperiod,bookingfees,tollfees_and_otherfees,timeam,timepm){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod=waitingperiod;
        this.bookingfees=bookingfees;
        this.tollfees_and_otherfees=tollfees_and_otherfees;
        this.timeam=timeam;
        this.timepm=timepm;
    }
    getRideDetails(){
        return(`Distance of the ride ${this.distance} and rate of ${this.rate} with waitingperiod ${this.waitingperiod}`);
    }
    getprice(){
        let totalprice = (this.rate * this.distance ) + (this.waitingperiod * 5) + (this.bookingfees + this.tollfees_and_otherfees);
        return totalprice;
    }
    getdiscount(){
        let discount_price = (this.getprice()) - ((this.getprice()) * 10/100);
        return discount_price;
    }
    peektime(){
        let ptimeam = ["7am","8am","9am"];
        let ptimepm = ["4pm","5pm","6pm","7pm"];
        if(ptimeam.indexOf(this.timeam)!== -1)
        {
            return this.getprice() + 20;
        }
        else if(ptimepm.indexOf(this.timepm)!== -1)
        {
            return this.getprice() + 20;
        }
        else{
            return this.getprice() + 0;
        }
    }
}
let Uber1 = new Uber (20,150,0,15,0,"7am","8pm");
//console.log(Uber1.getprice());
console.log(Uber1.getdiscount());
//console.log(Uber1.peektime());