const Model = require("./Model");

class Tattoo extends Model {
  static get tableName() {
    return "tattoos";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["image"],
      properties: {
        userId: { type: "string" },
        name: { type: "string" },
        user: { type: "string" },
        image: { type: "string" },
        description: { type: "string" },
      },
    };
  }
  static get relationMappings() {
    const { User } = require("./index.js");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "tattoo.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Tattoo;
