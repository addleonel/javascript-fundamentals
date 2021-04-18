// Objects
// Javascript Objects are containers for named value
// called properties or methods

let person = {
	// Properties
	// The name:values pairs in javascript objects are called properties
	name: "Leonel",
	age: 21,
	bio: "I'm computer scientist",
	city: "London",
	country: "Ingland",
	email: "adleonel3633@gmail.com",
	// Methods
	// Methods are actions that can be performed on objects.
	createPost: function(title, content){
		let author = this.name;  // 'this' statement refers to the same object
		let post = "Author: " + author + "\n" + 
				   title.toUpperCase() + "\n" + content;
		return post;
	},
	createPhoto: function(photoUrl){
		return photoUrl;
	},
	checkWhoIAm: function(){
		return "My name is " + this.name + " and I'm " + this.age + " years old";	
	}
}

// Call Properties
console.log(person.name);
// or 
console.log(person["name"]);

// call Methods
console.log(person.createPost("Python", "This programming language is amazing"));
console.log(person.checkWhoIAm());
