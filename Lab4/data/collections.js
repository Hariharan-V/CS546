const dbConnection = require("./connection");


const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};
const getClose = collection => {
  

  return async () => {
   
      const db = await dbConnection();
      
    

    return db.close;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  animals: getCollectionFn("animals")
};