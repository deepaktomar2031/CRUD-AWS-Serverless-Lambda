const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "ap-south-1" });

const tableName = "users";

// Create or Update users
const createOrUpdate = async (data = {}) => {
  const params = {
    TableName: tableName,
    Item: data,
  };

  try {
    await db.put(params).promise();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

// Read all users
const readAllUsers = async () => {
  const params = {
    TableName: tableName,
  };
  try {
    const { Items = [] } = await db.scan(params).promise();
    console.log(Items);
    return { success: true, data: Items };
  } catch (error) {
    return { success: false, data: null };
  }
};

// Read Users by ID
const getUserById = async (value, key = "id") => {
  const params = {
    TableName: tableName,
    Key: {
      [key]: parseInt(value),
    },
  };
  try {
    const { Item = {} } = await db.get(params).promise();
    return { success: true, data: Item };
  } catch (error) {
    return { success: false, data: null };
  }
};

// Delete User by ID
const deleteUserById = async (value, key = "id") => {
  const params = {
    TableName: tableName,
    Key: {
      [key]: parseInt(value),
    },
  };

  try {
    await db.delete(params).promise();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

module.exports = { createOrUpdate, readAllUsers, getUserById, deleteUserById };
