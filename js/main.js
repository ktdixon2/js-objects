console.log("object.js");

const cupcake = {
    color : ["pink", "white", "brown"],
    flavor : "chocolate",
    Size : "mini",
    calories : 0,
    icing : true,
    eatCupcake: () => {
        console.log("yum");
    }
}


console.log("cupcake", cupcake);

console.log("What color are you", cupcake.color);

cupcake.color.forEach(color => {
    console.log("what is color", color);
    console.log(`the color again is ${color} and that is beautiful`);
    console.log(`and this is the long way to get " + color +"`);
    console.log(`the color again is ${color} and that sucks`);
})



const car = {
    make : "ford",
    model : "mustange",
    year : "1972",
    color : "red",
    motor : "350 small block"
}

console.log("car", car);

const animals = ["Tina", "Oskar", "Roxy", "Jezzie"]; 

console.log("animals", animals);

//lightening stuff//

const familyMembers = ["marg, homer, lisa, bart"];

const marg = {
    familyMembers: "mom",
    hair : "tall"
}

const homer = {
    familyMembers: "dad",
    hair : false
}

const lisa = {
    familyMembers: "daughter",
    hair : "pineapple"
}

const bart = {
    familyMembers: "son",
    hair : "attached to skull"
}

console.log("familyMembers", familyMembers);

//lightening 2 (dont do this lol) //

let familyMembers3 = {
    name: "cory",
    GenderMale: true,
    legs: 2
}

familyMembers3.name = ["shelly", "dogs name", "another dogs name"];
familyMembers3.male = [false, true, true];
familyMembers3.legs = [2, 4, 4]; 

for (key in familyMembers3){
    console.log(key + ": " + familyMembers3[key]);
}

//lightening 3 example//

const family = {
    members: [
        {
            name: "tom",
            age: 20
        }, 
        {
            name: "rob",
            age: 34
        }, 
    ]
}

console.log("family", family);

//example 4 (much better than mine)//

const myFamily = [
    {
        name: "sam",
        age: 24
    },
    {   
        name: "helen",
        age: 56
    }    

]
console.log("myFamily", myFamily);

//lightening excercise w/ dot notation//

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`wardrobe height is ${wardrobe.height}`)
console.log(`wardrobe maker is ${wardrobe.manufacturer}`)
console.log(`wardrobe contents ${wardrobe.contents}`)
console.log(`wardrobe depth is ${wardrobe.depth}`)
console.log(`wardrobe width is ${wardrobe.width}`)

wardrobe.material = "cedar"

console.log(wardrobe);

//Lightning excercise w notation//

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The dimensions of the Empire State Building are ${empireStateBuilding.stories} stories, ${empireStateBuilding.height} feet high, and ${empireStateBuilding.squareFeet} Sq Ft`)

const address = empireStateBuilding["address"]


const constructionDate = empireStateBuilding["constructionDate"]


const cost = empireStateBuilding["cost"]


const owner = empireStateBuilding["owner"]


const architect = empireStateBuilding["architect"]


console.log(`The building is located at ${address}, built in ${constructionDate}, at a cost of ${cost}. It was designed by ${architect}, and is owned by ${owner}`)

//targeting arrays//

const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

    console.log("currentAnimals", kennel.currentAnimals);
    console.log(kennel.currentAnimals[4]);

    //lightning exercise targeting arrays//

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
    console.log(`part-time instructors are ${nashvilleSoftwareSchool.instructors.partTime}, and the full-time instructors are ${nashvilleSoftwareSchool.instructors.fullTime}`)

    console.log(`${nashvilleSoftwareSchool.instructors.fullTime[4]} and ${nashvilleSoftwareSchool.instructors.partTime[0]}`);

    //accessing property values//

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)