

// Timeout verir
// setTimeout(() => {
//     console.log("Hello");
// }, 2000)


// setInterval(()=> {
//     console.log("Verilen saniye kadar her periyotta çalışır ( Durdurmazsanız sonsuza kadar)");
// },2000)

// const sayHello = (cb) => {
//     cb();
// };

// sayHello(()=> {
//     console.log("Hello");
// });

import fetch from 'node-fetch';

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//         .then((users) => {
//             console.log("Users Yüklendi!", users);
//             fetch("https://jsonplaceholder.typicode.com/posts/1")
//                 .then((data) => data.json())
//                     .then((post) => {
//                         console.log("Post 1 Yüklendi!", post);

//                         fetch("https://jsonplaceholder.typicode.com/posts/2")
//                             .then((data) => data.json())
//                                 .then((post2) => console.log("Post 2 Yüklendi!", post2));
//                     });
//         });



//* ASYNC-AWAIT
// import fetch from "node-fetch";

// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users"))
//     .json();
    

//  const post1 = await (
//    await fetch("https://jsonplaceholder.typicode.com/posts/1")
//  ).json();
 
//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//     console.log("users", users);
//     console.log("post 1", post1);
//      console.log("post 2", post2);
// }
// getData();




//*  AXIOS Kütüphanesi

// import axios from "axios";

// async function getData() {
//   const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

//   const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//   const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//   console.log("users", users);
//   console.log("post 1", post1);
//   console.log("post 2", post2);
// }
// getData();



//* PROMISES
import axios from "axios";

const getUsers = () => {
  return new Promise(async (resolve,reject) => {

    const {data} = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
  });
}

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`);

    resolve(data);
  });
}


    // (async () => {
    //   try{
    //     const users = await getUsers();
    //     const post = await getPost(1);
        
    //     console.log(users);
    //     console.log(post);
    //   }catch(e) {
    //     console.log(e);
    //   }
    // })();

    Promise.all([getUsers, getPost(1)])
      .then(console.log)
        .catch(console.log);