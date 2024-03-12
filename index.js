const {
  createOrUpdate,
  readAllUsers,
  getUserById,
  deleteUserById,
} = require("./src/functions.js");

// Read all users
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

// Read Users by ID
module.exports.getUserById = async (event, context, callback) => {
  const id = event.pathParameters.id;

  const { success, data } = await getUserById(id);
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

// Delete User by ID
module.exports.deleteUserById = async (event, context, callback) => {
  const id = event.pathParameters.id;

  const { success, data } = await deleteUserById(id);
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

// Create User
module.exports.createOrUpdate = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);

  const { success, data } = await createOrUpdate(requestBody);
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
