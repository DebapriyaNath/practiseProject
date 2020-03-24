//Creating object userObjectA and copying to another object userObjectB
let userObjectA = {
    name : "Debapriya",
    email : "debapriya@xyz.com",
    contact: 1234567890,
    address: "4, ABC Street"
};

let userObjectB = {...userObjectA};
console.log("Value of userObjectB: ")
console.log(userObjectB)


//Modify the  userObjectA address with new address using the spread operator
userObjectA = {
    ...userObjectA,
    address: "4D, SD Road"
};
console.log("Value of userObjectA after modifying address property: ")
console.log(userObjectA)


//Compare userObjectA  and userObjectB is equal
console.log("Compairing userObjectA with userObjectB: ")
console.log(JSON.stringify(userObjectA) === JSON.stringify(userObjectB))


//Add new property  address object to  userObjectA , and assign new properties with value country, city, zip 
let address = {
    country: "India",
    city: "Kolkata",
    zip: 700046
};

userObjectA = {
    ...userObjectA,
    ...address
}
console.log("Value of userObjectA after adding address object: ")
console.log(userObjectA)


//Marge userObjectA and  userObjectB object to users array using the spread operator
const merge = (...objects) => ({...objects});
let user = merge(userObjectA, userObjectB);
console.log("Value of user array:")
console.log(user)


//Update  the users’ array of object  with new userObjectC using the spread operator
let userObjectC = {
    name : "Oishee",
    email : "oishee@xyz.com",
    contact: 9874563210,
    address: "4/1, DF Street"
};
user = merge(userObjectA, userObjectB, userObjectC);
console.log("Value of user array after adding userObjectC:")
console.log(user)



//Create a parent class and assign some class properties with value, and create child class from the parent class, print the parent class properties value into child class     - using super
class Birds {
    constructor(name, wings){
        this._name = name;
        this._wings = wings;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get wings(){
        return this._wings;
    }
    set wings(newWings){
        this._wings = newWings;
    }
    descriptionP(){
        console.log("Parent class contains name, wings")
    }
}

class Detail extends Birds {
    constructor(name, wings, color){
        super(name, wings);
        this._color = color;
    }
    get color(){
        return this._color;
    }
    set color(newColor){
        this._color = newColor;
    }
    descriptionC(){
        console.log("Child class contains only color")
    }
}

const pigeon = new Detail("Pigeon", 2, "White");

console.log("Name: ",pigeon.name);
console.log("Details:-")
console.log("-----------")
console.log("Wings:",pigeon.wings, "& Color:", pigeon.color);
pigeon.descriptionP();
pigeon.descriptionC();



//Create a product object with name, price, attribute, in attribute object assign another object with array of colors assign some value and also add size array, now using destructuring assign both colors and size into a separate  variable, and print
const product = {
    name: 'SHIRT',
    price: 500,
    attribute: {
        primaries: [
            {
                color: [
                    'Red', 
                    'White', 
                    'Blue', 
                    'Grey'
                ],
                size: [
                    'XL', 
                    'XXL'
                ]
            }
        ]
    }
};

const {
    attribute: {
        primaries: [
            {
                color
            }
        ]
    }
} = product;

const {
    attribute: {
        primaries: [
            {
                size
            }
        ]
    }
} = product;

console.log("Product details:-")
console.log("-----------------------")
console.log("Name: ", product.name)
console.log("Price: ", product.price)
console.log("Colors available:")
console.log("~~~~~~~~~~~~~~~~~~~~~~~")
for(x in color){
    console.log(color[x]);
}
console.log("Sizes available:")
console.log("~~~~~~~~~~~~~~~~~")
for(x in size){
    console.log(size[x]);
}