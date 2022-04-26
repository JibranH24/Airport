"use strict"

class Bag{
     weight;
     limit = 20
     constructor(weight){
         this.weight=weight 
         if(!weight){
            throw new Error('bag must have a weight');
         }
     } 

     isOverLimit(){
         if(this.weight> this.limit){
             console.log("Bag is too heavy")
         }
         else{return false}
     }
} 

class Passenger{
    name;
    passportNo;
    seatNo;
    bags = []
    constructor(name,passportNo,seatNo){
        this.name=name;
        this.passportNo= passportNo;
        this.seatNo = seatNo; 
    }
    addBag(Bag){
        this.bags.push(Bag)
    }

}

class Airport{
    airportName;
    planes = []
    constructor(airportName){
        this.airportName=airportName;
    }
}
class Plane{
    type;
    passesngers=[]
    parked;
    constructor(type,parked){
        this.type=type;
        this.parked= parked
    }
    boarding(Passenger){
        this.passesngers.push(Passenger)
    }
    isParked(Plane){
        parkedPlane = this.Airport.planes.indexOf(Plane)
        if(parked){
            this.Airport.planes.push(Plane)
        }else {this.Airport.planes.splice(parkedPlane,1)}
    }

}
class CrewMember{
    name;
    job;
    staffNo;
    constructor(name,job,staffNo){
        this.name=name
        this.job=job
        this.staffNo=staffNo
    }
}
let harry = new Passenger("Harry",12345, 35)
let harrysBigBag= new Bag(60)
let harrysSmallBag = new Bag(15)
harry.addBag(harrysBigBag);
harry.addBag(harrysSmallBag);
console.log(harrysBigBag.isOverLimit())