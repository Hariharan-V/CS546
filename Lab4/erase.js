const a = require("./data/collections").animals;
const connection = require("./data/connection");
async function erase(){
	const ann = await a();
	await ann.deleteMany({});
	const db = await connection();
  	await db.serverConfig.close();

}

erase();