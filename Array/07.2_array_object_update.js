// find the post using id and increase its like by 1
const posts = [
    { id: 1, content: "Hello", likes: 5 },
    { id: 2, content: "Learning JS", likes: 12 },
    { id: 3, content: "DevConnect", likes: 30 }
];


const likePost = (posts, postId) => {
  const newPosts=posts.map((post)=>{
        if(post.id===postId){
            return {...post , likes : post.likes+1}
        }
        return post     // comment it to boserve outout to understand it betteeer
    
})
return newPosts
};
console.log(likePost(posts,2));
