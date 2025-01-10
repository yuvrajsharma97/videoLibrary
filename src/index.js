import dotenv from "dotenv";
import connectDatabase from "./db/index.js";

dotenv.config({
    path: "./.env",
});

connectDatabase();


/*
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
    });

    app.listen( process.env.PORT, () => {
        console.log("App server is running on port", process.env.PORT);
    });

  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

*/