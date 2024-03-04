import { Tattoo } from "../../models/index.js";

class TattooSeeder {
  static async seed() {
    const tattoosData = [
      {
        image: "https://inkd-development.s3.amazonaws.com/1701195721145",
        id: "1",
        userId: "1",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/poisontattoo1.jpeg",
        id: "2",
        userId: "1",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/poisontattoo2.jpeg",
        id: "3",
        userId: "1",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/poison3.jpeg",
        id: "4",
        userId: "1",
      },
      {
        image: "https://inkd-development.s3.amazonaws.com/1701193788422",
        id: "5",
        userId: "2",
      },
      {
        image: "https://inkd-development.s3.amazonaws.com/1701193788422",
        id: "6",
        userId: "2",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/christattoo1.jpeg",
        id: "7",
        userId: "2",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/christattoo2.jpeg",
        id: "8",
        userId: "2",
      },
      {
        image: "https://inkdbucket.s3.amazonaws.com/christattoo3.jpeg",
        id: "9",
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
