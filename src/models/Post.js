const posts = [
    { id: 101, title: 'Post 1', content: 'Lorem ipsum...', userId: 1 },
    { id: 102, title: 'Post 2', content: 'Dolor sit amet...', userId: 1 },
    { id: 103, title: 'Post 3', content: 'Consectetur adipiscing...', userId: 2 }
  ];

exports.getPostByUserId = (userId) => {
    return posts.find(p => p.userId === userId)
}