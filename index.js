const {
  createOrUpdate,
  readAllUsers,
  getUserById,
  deleteUserById,
} = require("./src/functions.js");

module.exports.readAllUsers = async (event, context, callback) => {
  const { success, data } = await readAllUsers();

  if (success) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success, data }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
  return {
    statusCode: 500,
    body: JSON.stringify({ success: false, message: "Error" }),
  };
};
