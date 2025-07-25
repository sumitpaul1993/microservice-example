# microservice-example

# user-service
register, login and login user details

## 1. Register:  http://localhost:3000/auth/register (POST)
### Body
```
{
    "email": "test@yopmai.com",
    "name": "test",
    "password": "124"
}
```

## 2. Login:  http://localhost:3000/auth/login (POST)
### Body
```
{
    "email": "test@yopmai.com",
    "password": "124"
}
```

## 3. Who Am I:  http://localhost:3000/auth/whoami (GET)



# product-service
product management

## 1. Create Product:  http://localhost:3001/product (POST)
### Body
```
{
    "name": "test",
    "description": "desc"
}
```

## 1. Get All Product:  http://localhost:3001/product (GET)