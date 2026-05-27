// In real social media apps, like is not only:
// likes + 1
// It is usually:

// If user has not liked → add like
// If user already liked → remove like
// Input:
const posts = [
  { id: 1, content: "Hello", likes: ["u1", "u2"] },
  { id: 2, content: "DevConnect", likes: ["u3"] },
  { id: 3, content: "JavaScript", likes: [] }
];

// const currentUserId = "u3";

// Goal:
// If current user likes post id: 2, remove "u3".

const toggleLike = (posts, postId, currentUserId) => {

    const newPost=posts.map(( post )=>{
        //find post
        if( post.id === postId ) {
            if (post.likes.includes(currentUserId)) {
                const newLikes= post.likes.filter((userid)=>{
                    return userid!==currentUserId
                })
                console.log(newLikes)
                
                return {...post , likes : newLikes}
            }
            // return {...post , likes: post.likes.push(currentUserId)}  //push will mutate original array
            return {...post , likes: [...post.likes, currentUserId]}
        }
        return post;
})
return newPost;
};
console.log(toggleLike(posts, 2 , "u3"))
console.log(toggleLike(posts, 3 , "u3"))




// Professional version
const toggleLikee = (posts, postId, currentUserId) => {
  return posts.map((post) => {
    if (post.id !== postId) {   // post doesnt exist
      return post;
    }

    const alreadyLiked = post.likes.includes(currentUserId);

    return {
      ...post,
      likes: alreadyLiked
        ? post.likes.filter((userId) => userId !== currentUserId)   //remove id
        : [...post.likes, currentUserId],       //add id
    };
  });
};