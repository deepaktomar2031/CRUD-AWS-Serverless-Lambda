# CRUD-AWS-Serverless-Lambda

# Get all users
## GET Request
### AWS-BASE-URL/users

# Get user by id
## GET Request
### AWS-BASE-URL/user/{id}

# Delete user by id
## DELETE Request
### AWS-BASE-URL/user/{id}

# Create User
## POST Request
### AWS-BASE-URL/user
#### body { "id": <Integer>, "name": <String> }

# Update user by id
## PUT Request
### AWS-BASE-URL/user/{id}
#### body { "name": <String> }