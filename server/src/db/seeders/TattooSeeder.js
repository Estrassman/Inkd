import { Tattoo } from "../../models/index.js";

class TattooSeeder {
  static async seed() {
    const tattoosData = [
      {
        image: "https://inkd-development.s3.amazonaws.com/1701195721145",
        userId: "1",
      },
      {
        image: "https://inkd-development.s3.amazonaws.com/1701193788422",
        userId: "2",
      },
    ];

    for (const tattoo of tattoosData) {
      const currentTattoo = await Tattoo.query().findOne({ image: tattoo.image });
      if (!currentTattoo) {
        await Tattoo.query().insert(tattoo);
      }
    }
  }
}

export default TattooSeeder;
