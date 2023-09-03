require("dotenv").config()
const pgp = require("pg-promise")();
const db = pgp(process.env.URL);


// Post daily menu in database

const storeInputData = async (data) => {
    const serializedData = JSON.stringify(data);
    const query = "INSERT INTO input_data (data) VALUES ($1) RETURNING id";
    
    try {
        const result = await db.one(query, [serializedData]);
        return result.id;
    } catch (error) {
        console.error("Error storing input data",error);
        throw error;
    }

};

const postReview = async (name, rating, comment) => {
    await db.none(`
        INSERT INTO reviews (name, rating, comment)
        VALUES ($1, $2, $3)
    `, [name, rating, comment]);
};

const deletePreviousMenuData = async (menuId) => {
    const deleteQuery = "DELETE FROM input_data WHERE id = $1";

    try {
        await db.none(deleteQuery, [menuId]);
        console.log("Previous menu data deleted");
    } catch (error) {
        console.error("Error deleting previous menu data:", error);
        throw error;
    }
};

const getTodayMenuData = async () => {
    const selectQuery = "SELECT data FROM input_data";
  
    try {
      const result = await db.oneOrNone(selectQuery);
      if (result && result.data) {
        return result.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error retrieving menu data:", error);
      throw error;
    }
}

module.exports = { storeInputData, postReview, deletePreviousMenuData, getTodayMenuData };