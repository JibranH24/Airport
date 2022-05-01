"use strict"

class Traveller{
    name;
    passportNumber;
    bags = []
    constructor(name, passportNumber){
        this.name=name
        this.passportNumber=passportNumber
    }
    addBag(Bag){
        this.bags.push(Bag)
    }
}

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
             return "Bag is too heavy"
         }
        return "bag is ok" 
     }
} 

class Passenger extends Traveller{
     seatNo;
    constructor(name, passportNumber,seatNo){
        super(name,passportNumber,seatNo)       
        this.seatNo = seatNo; 
        this.type="passenger"
    }
    callAttendant(){
        console.log("Help! I need help!")
    }

}

class Airport{
    airportName;
    //planes = []
    constructor(airportName){
        this.airportName=airportName;
    }
}
class Plane{
    planeType;
    onThePlane=[]
    //parked;
    constructor(planeType){
        this.planeType=planeType;
        //this.parked= parked
    }
    boarding(person){
        if(person.type=="passenger"){  // both of these are ways of saying if the instance is a specific class type
            this.onThePlane.push(person)
        }
        else if(person instanceof CrewMember){
            this.onThePlane.push(person)
        }
        else {console.log("Access denied")}
    }
    // isParked(Plane){
    //     parkedPlane = Airport.planes.indexOf(Plane)
    //     if(parked){
    //         Airport.planes.push(Plane)
    //     }else {Airport.planes.splice(parkedPlane,1)}
    // }

}
class CrewMember extends Traveller{
    
    job;
    staffNo;
    constructor(name,passportNumber,job,staffNo){
        super(name,passportNumber)
        
        this.job=job
        this.staffNo=staffNo
    }
    shutDoors(){
        console.log("Shutting doors, please return to your seats")
    }
}
let harry = new Passenger("Harry",12345, 35)
harry.callAttendant()
let pilot = new CrewMember("pilot",9878787,"pilots",4378827)
// let harrysBigBag= new Bag(60)
// let harrysSmallBag = new Bag(15)
// harry.addBag(harrysBigBag);
// harry.addBag(harrysSmallBag);
//console.log(harrysBigBag.isOverLimit())

let ryanAir = new Plane("ryanAir")
ryanAir.boarding(harry)
ryanAir.boarding(pilot)
console.log(harry)
console.log(ryanAir)

class Runway{
    static planesOnRunway = []
    static maxNumOfPlanesOnRunway= 7
    runwayName;
    constructor(runwayName){
        this.runwayName = runwayName
    }
    static addPlane(Plane){
        if(this.planesOnRunway.length> this.maxNumOfPlanesOnRunway){
            throw new TypeError("No more space on runway")
        }
        this.planesOnRunway.push(Plane)
    }
}

// let runway1 = new Runway("Runway1");
// let runway2 = new Runway("Runway2");

// Runway.addPlane(ryanAir)
// console.log(Runway.planesOnRunway)






// const airportCycle = {Bag , Passenger, Plane, Airport, CrewMember}
module.exports= {Bag , Passenger, Plane, Airport, CrewMember}
