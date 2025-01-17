import dotenv from "dotenv";
import connectDatabase from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

connectDatabase()
    .then(() => {
        console.log("Database connected");

        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });

        app.listen( process.env.PORT || 8000, () => {
            console.log("App server is running on port", process.env.PORT);
    })})
    .catch((error) => {
        console.log("Mongo db connection failed: ", error);
        process.exit(1);
    });


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