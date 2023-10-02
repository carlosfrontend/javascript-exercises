const findTheOldest = function (persons) {

  const died = persons.some(person => isNaN(person.age) ? true : false);

  const addAge = persons.map(person => {  
    person.age = person.yearOfDeath - person.yearOfBirth;
  });

  const orderedPersons = persons.sort((personOld, personYoung) => {
    if(personYoung.yearOfDeath === undefined){
      personYoung.age = new Date().getFullYear() - personYoung.yearOfBirth;
    }
    if(died){
      return personOld.age > personYoung.age ? -1 : 1;
    }
  });
  // Carly is immortal!
  const oldest = orderedPersons[0];
  console.log(oldest)
  return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
