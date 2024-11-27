import app from "./app";
import connectDatabase from "./config/databaseConnection";

app.listen(process.env.PORT, () => {
  connectDatabase();
  console.log("Server Ok");
});
