const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === `object` ) {
        for (const key in collection) {
          callback(collection[key])
        }
      } else {
        for (const element of collection) {
          callback(element);
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = [];
      if (typeof collection === `object` ) {
        for (const key in collection) {
          newArray.push(callback(collection[key]))
        }
      } else {
        for (const element of collection) {
          newArray.push(callback(element))
        }
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1)
      }

      for (const element of collection) {
        acc = callback(acc, element)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (typeof collection === `object` ) {
        for (const key in collection) {
          if (predicate(collection[key]) === true) {
            return collection[key];
          }
        }
      } else {
        for (const element of collection) {
          if (predicate(element) === true) {
            return element
          }
        }
      }
    },

    filter: function(collection, predicate) {
      let results = [];
      if (typeof collection === `object` ) {
        for (const key in collection) {
          if (predicate(collection[key]) === true) {
            results.push(collection[key]);
          }
        }
      } else {
        for (const element of collection) {
          if (predicate(element) === true) {
            results.push(element)
          }
        }
      }
      return results
    },

      size: function(collection) {
          let results = [];
          if (typeof collection === `object` ) {
              for (const key in collection) {
                  results.push(collection[key]);
              }
          } else {
              results = collection
          }
          return results.length
      },


    //  Array Functions

      first: function(array, n) {
        if (!n) {
            return array[0]
        } else {
            array.splice(n);
            return array
        }
      },

      last: function(array, n) {
          if (!n) {
              return array.slice(-1)[0]
          } else {
              return array.slice(-n);
          }
      },

      compact: function(array) {
        const result = [];
          for (const element in array) {
              if (!!array[element] === true) {
                  result.push(array[element])
              }
          }
        return result
      },

      sortBy: function(array, callback) {
          const newArray = [];
          for (const element in array) {
              newArray.push(array[element])
          }
          newArray.sort(function(a, b){return callback(a) - callback(b)})
          return newArray
      },

      flatten: function(array, shallow) {
        const flat = [];
          if (shallow === true) {
              for (const element in array) {
              }
          }
        return flat
      },

      uniq: function(array, isSorted, callback) {
          if (isSorted === true) {
              for (const element in array) {
                  if (array[element] === array[element - 1]) {
                      array.splice(element, 1)
                  }
              }
          }

          if (callback) {
              array.sort(function (a, b) {
                  return callback(a) - callback(b)
              });

              for (const element in array) {
                  if (callback(array[element]) === callback(array[element - 1])) {
                      array.splice(element, 1)
                  }
              }
              return array
          }
      },

    // Object Functions

    keys: function(object) {
        const keys = []
        for (const key in object) {
            keys.push(key)
        }
        return keys
    },

    values: function(object) {
      const values = [];
      for (const key in object) {
          values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const list = [];
      for (const key in object) {
        if (typeof object[key] === "function")
          list.push(key)
      }
      return list.sort()
    },


  }
})()

fi.libraryMethod()
