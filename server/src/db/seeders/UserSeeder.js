import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const usersData = [
      {
        email: "haha@haha.com",
        password: "haha",
        name: "haha",
        location: "haha",
      },
      {
        email: "testing@test.com",
        password: "test",
        name: "haha",
        location: "haha",
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
