
import fetch from "node-fetch";
import axios from "axios";


async function getData(number){
   
        const users = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`).then(data => data.json())
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`).then(data => data.json())
        console.log(users)
        console.log(post)
    };
getData(1)



export default getData;