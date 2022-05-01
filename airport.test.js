const {Bag , Passenger, Plane, Airport, CrewMember} = require('./airport')


describe("Tests for Bag class",()=>{
    test("weight has to be lower than 20kg",()=>{
        const bag = new Bag(40);
        expect(bag.isOverLimit()).toBe("Bag is too heavy")
    })

    test("bags can have valid weight",()=>{
        const bag = new Bag(15);
        expect(bag.isOverLimit()).toBe("bag is ok")
    })
})

