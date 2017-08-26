# React-series-backend
Backend for React series


```
git clone
npm install
node index.js
```

### Get all todos

> Method: GET

`endpoint: /`

> Returns array[objects]
```
[
    {
        "id": "9a1f82ab-7670-449f-b136-1833600bbd5b",
        "title": "Buy milk",
        "done": false
    },
    {
        "id": "adec299a-a0a1-4ddc-acf6-b9aa4c4f9f1c",
        "title": "Buy milk",
        "done": false
    }
]
```

### Create new todo

> Method: POST

`endpoint: /`

> Headers

`Content-type: application/json`

> Body 

```
{
    title: Todo tile,
    done: false
}
```

> Returns object

```
{
    "id": "e120050b-4193-4d98-8a58-2081115f92eb",
    "title": "Buy milk",
    "done": false
}
```
   

### Mark todo as done

> Method: PATCH

`endpoint: /`

> Headers

`Content-type: application/json`

> Body
```
{
    id: todo id
}
```

> Returns object
```
{
    "id": "e120050b-4193-4d98-8a58-2081115f92eb",
    "title": "Buy milk",
    "done": true
}
```
    
### Delete todo

> Method: DELETE

`endpoint: /`

> Headers

`Content-type: application/json`

> Body
```
{
    id: todo id
}
```
> Returns boolean
`true|false`


### Clear completed todos

> Method: GET

`endpoint: /clear`

> Returns array[objects]

```
[
    {
        "id": "9a1f82ab-7670-449f-b136-1833600bbd5b",
        "title": "Buy milk",
        "done": false
    },
    {
        "id": "adec299a-a0a1-4ddc-acf6-b9aa4c4f9f1c",
        "title": "Buy milk",
        "done": false
    }
]
```
