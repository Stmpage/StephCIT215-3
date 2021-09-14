   let ele = document.body.querySelector(".box");

let animals =["dog" , "fish", "cat", "shark", "cat", "dog"]

   for(let i=0; i<animals.length; i++) {
       if (animals[i] === "dog") {
           document.write("Borf Borf" + "<br>");
       } else if (animals[i] === "cat") {
           document.write("I am a cat" + "<br>");
       } else
           document.write("I'm an animal" + "<br>");


       const shuffleArray = ["dog" , "fish", "cat", "shark", "cat", "dog"]

       shuffleArray.sort((a,b) => 0.5 - Math.random());
           // for (let i = array.length - 1; i > 0; i--) {
           //     const j = Math.floor(Math.random() * (i + 1));
           //     const temp = array[i];
           //     array[i] = array[j];
           //     array[j] = temp;
           // }
           // return array
       };
   