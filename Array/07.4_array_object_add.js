const posts = [
    { id: 1, content: "Hello", likes: 5 },
    { id: 2, content: "Learning JS", likes: 12 },
    { id: 3, content: "DevConnect", likes: 30 }
];



//Add New Post
const newPost = {
  id: 3,
  content: "Learning Arrays",
  likes: 0
};

const addPost = (posts, newPost) => {
    
    return  [...posts , newPost]
   
};
console.log(addPost(posts,newPost))