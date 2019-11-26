const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object'){
        for (const key in collection){
          callback(collection[key])
        }
      } else {
        for (const element of collection){
          callback(element)
        }
      }
      return collection;
    },


    map: function(collection, callback) {
      if (typeof collection != "object") {
        let newArray = []        
        collection.forEach(element => {
            newArray.push(callback(element))
        })
        return newArray
    } else {
        // if it's an object:
        let newArray = [];
        for (const key in collection) {
            newArray.push(callback(collection[key]))
        }
        return newArray;
    }
    },	   

    reduce: function(collection, callback, acc) {
      let newArray = [...collection];
      let accumulator
      if (acc) {
        accumulator = acc
      } else {
        accumulator = collection[0]
        newArray.shift();
      }


      newArray.forEach(memo => {
        accumulator = callback(accumulator, memo)
      })
      return accumulator;
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
  },


  compact: function(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      if (array[i]){
        newArray.push(array[i])
      }
    }
    return newArray;
  },

  filter: function(collection, predicate){
    let newArray = [];
    collection.forEach(element => {
      if (predicate(element) === true){
        newArray.push(element)
      }
    })
    return newArray;
  },

  sortBy: function(collection, callback) {
    const newArr = [...collection]
    return newArr.sort(function(x, y) {
      return callback(x) - callback(y)
    })
  },

  flatten: function(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  },

  unpack: function(arr1, arr2){
    arr2.forEach(element => {
      arr1.push(element)
    })
    return arr1;
  },

  functions: function(object){
    const functionsArr = [];
    for (const key in object) {
      if (typeof object[key] === 'function'){
        functionsArr.push(key)
      }
    }
    return functionsArr;
  }	  
}
})()

fi.libraryMethod()
