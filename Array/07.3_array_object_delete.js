//delete post using id

const posts = [
    { id: 1, content: "Hello", likes: 5 },
    { id: 2, content: "Learning JS", likes: 12 },
    { id: 3, content: "DevConnect", likes: 30 }
];


//Delete post
const DeletePosts = (posts, postId) => {
  const newPosts=posts.filter((post)=> { return post.id !== postId})
return newPosts
};
console.log(DeletePosts(posts,2));