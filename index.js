const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object'){
        //If collection is a JavaScript object, callback's arguments will be (value, key, collection).
        //then, return original collection
        const keys = Object.keys(collection)
        const values = Object.values(collection)
        for (let i = 0; i < collection.length; i++){
          callback(values[i], keys[i], collection)
          return collection;
        }
      } else {
        for(let i = 0; i < collection.length; i++){
          //Each invocation of callback is called with three arguments: (element, index, collection). 
          //then, return original collection
          callback(collection[i], i, collection)
          return collection;
        }
      }
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },

    keys: function(object) {
      const keys = [];
      for (const key in object){
        keys.push(key)
      }
      return keys;
    },

    values: function(object) {
      const values = [];
      for (const key in object){
        values.push(object[key])
      }
      return values;
    },

    size: function(collection){
      let count = 0;
      if (typeof collection === 'object'){
        for(const key in collection){
          count += 1
        }
      } else {
        for(let i = 0; i < collection.length; i++){
          count += 1
        }
      }
      return count;
  },

  find: function(collection, predicate){
    for(let i = 0; i < collection.length; i++){
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  },

  first: function(array, n = 1){
    let elements = [];
    for(let i = 0; i <= n - 1; i++){
      elements.push(array[i])
    }
    if(elements.length === 1){
      return elements[0];
    } else {
      return elements;
    }
  },

  last: function(array, n){
    //return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
   if(n){
     return array.slice(array.length - n, array.length);
   } else {
     return array[array.length - 1];
   }
  },

  uniq: function(array, isSorted = false, callback){
  let unique = [];
   if (!callback){
     for (let i = 0; i < array.length; i++){
       if (!unique.includes(array[i])){
         unique.push(array[i])
       }
     }
   } else {
     for(let i = 0; i < array.length; i++){
       let fnResult = callback(array[i]);
       if (!unique.includes(fnResult)) {
         unique.push(fnResult)
       }
     }
   }
   return unique; 
  }


  }

})()

fi.libraryMethod()
