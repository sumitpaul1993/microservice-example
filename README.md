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

## 2. Get All Product:  http://localhost:3001/product (GET)


# cart-service
cart management

## 1. Add Product to Cart:  http://localhost:3002/cart/:productId (POST)


## 2. Remove Product from Cart:  http://localhost:3002/:productId (DELETE)