interface totu{
name: String;
age: Number;
hobbies: Array<String>;
}

const totu:totu = {
name: "totu",
age: 15,
hobbies: ["reading", "programming"],
}


const hello = async(name: String) => {
await console.log(name);

     
}

hello('a');

