    "use strict";
    
    // ## Array Cardio Day 2
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
        
        const isAdult = people.some(function(person) {
            const currentYear = (new Date()).getFullYear();
            if (currentYear - person.year >= 19) {
              return true;
            } 
        });

        console.log(isAdult);
      
        //Con función flecha
        const isAdultArrow = people.some(person => ((new Date()).
        getFullYear())- person.year >= 19);

        console.log(isAdultArrow);

      //El método some() verifica si ALGÚN elemento de un array cumple con la condición dada en la función.

      // Array.prototype.every() // is everyone 19 or older?

      const allAdults = people.every(person => ((new Date()).
      getFullYear())- person.year >= 19);

      console.log(allAdults);

      //El método every() verifica si TODOS los elementos de un array cumplen con la condición dada en la función.


      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      
      const comment = comments.find(function(comment) {
        if (comment.id === 823423) {
          return true;
        }
      });

      console.log(comment);

      //Con función flecha

      const commentArrow = comments.find(comment=> 
        comment.id === 823423); 
      
      console.log(commentArrow);

      // Array.prototype.findIndex()
      // Find the comment with this ID 
      // delete the comment with the ID of 823423
      ////Para borrar algo de un array primero tienes que saber dónde está y como pista tenemos el id

      const index = comments.findIndex(comment=> 
        comment.id === 823423); 
      console.log(index); // Esto imprime posición 1 del array

      //comments.splice(index, 1); 
      //Splice elimina la propiedad. Comprobar poniendo console.table(comments) en la consola

      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];

      //Slice devuelve una copia de una parte del array dentro de un nuevo array 
      //empezando por inicio hasta fin (fin no incluido). 
      //El array original no se modificará.