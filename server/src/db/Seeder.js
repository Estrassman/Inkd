/* eslint-disable no-console */
import { connection } from "../boot.js";
import UserSeeder from "./seeders/UserSeeder.js";
import TattooSeeder from "./seeders/TattooSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding users...");
    await UserSeeder.seed();

    console.log("seeding tattoos...");
    await TattooSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
