import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "poison@poison.com",
        password: "poison",
        name: "poison",
        location: "Lynn, MA",
        image: "https://inkd-development.s3.amazonaws.com/1701188268492",
      },
      {
        email: "chris@chris.com",
        password: "chris",
        name: "chris",
        location: "Lynn, MA",
        image: "https://inkd-development.s3.amazonaws.com/1701193616950",
      },
    ];

    for (const user of usersData) {
      const currentUser = await User.query().findOne({ email: user.email });
      if (!currentUser) {
        await User.query().insert(user);
      }
    }
  }
}

export default UserSeeder;
