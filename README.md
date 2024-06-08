# CRUD-AWS-Serverless-Lambda

# Get all users
## GET Request
### <AWS-URL>/users

# Get user by id
## GET Request
### <AWS-URL>/user/{id}

# Delete user by id
## DELETE Request
### <AWS-URL>/user/{id}

# Create User
## POST Request
### <AWS-URL>/user
#### body { "id": <Integer>, "name": <String> }

# Update user by id
## PUT Request
### <AWS-URL>/user/{id}
#### body { "name": <String> }