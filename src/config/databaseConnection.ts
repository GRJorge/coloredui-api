import mongoose from "mongoose";

export default async function connectDatabase() {
  mongoose
    .connect(process.env.DB_URL + process.env.DB_NAME!)
    .then(() => {
      console.log("Database Ok");
    })
    .catch((error) => {
      console.error(error);
    });
}
