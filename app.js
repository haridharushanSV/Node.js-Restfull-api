const express =require('express');
const app =express();
const port = 3000;

//starts the server on port 3000
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

// Define a route
app.get('/api/users', (req, res)=>{
    const users =[
        {id:1,name: 'John',}
    ];
res.json(users);
})

