// CONSTRUCTOR FUNCTION
// more info: https://www.w3schools.com/js/js_object_constructors.asp

// create an object constructor

// Create an object constructor 
function MyData(name, age, email, phone, city, country){
    this.name = name,
    this.age = age,
    this.email = email,
    this.phone = phone,
    this.city = city,
    this.country = country,
    this.getFullData = function(){
         return `Name=${this.name}, Age=${this.age}, City=${this.city}, Country=${this.country}, Phone=${this.phone}, Email=${this.email}`
    }
}
// Instantiate an object
let me = new MyData("Leone", 22, "adleonel3633@gmail.com", "+51999999999", "Lima", "Peru");
console.log(me);
console.log(me.getFullData());
