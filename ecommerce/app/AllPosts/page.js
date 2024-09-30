
//////////////////////////////////////////// way1 using fetch /////////////////////////////////////


// export default async function Page() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();  
  
//     return (
//       <div>
//     {posts.map((post)=>(
//         <div className="post"  key={post.id}>
//         <h1>Title : {post.title}</h1> 
//         <p>Id : {post.id}</p>
//         <p>body : {post.body}</p>
//         <p> userId : {post.userId}</p>
//         <p>////////////////////////////////////////////////////////////////////</p>
//         </div>
//     ))}
//         </div>
//     );
//   }
  

//////////////////////////////////////////////////////// Way2 using axios ///////////////////////////


import axios from 'axios';

export default async function Page() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h1>Title: {post.title}</h1>
          <p>Id: {post.id}</p>
          <p>Body: {post.body}</p>
          <p>UserId: {post.userId}</p>
          <div className="separator"></div>
        </div>
      ))}
    </div>
  );
}
