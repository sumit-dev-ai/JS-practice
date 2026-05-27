//find post where likes are more than 10 and show its content
const posts = [
    { id: 1, content: "Hello", likes: 5 },
    { id: 2, content: "Learning JS", likes: 12 },
    { id: 3, content: "DevConnect", likes: 30 }
];

const findMostLikedPosts = (posts) => {
    let newArr = []
    for (let i = 0; i < posts.length; i++) {
        
        if (posts[i]?.likes > 10) {
            newArr.push(posts[i].content)
        }
    }
    return newArr
}

console.log(findMostLikedPosts(posts));
