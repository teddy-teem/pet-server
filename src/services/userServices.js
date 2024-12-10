const { getAllUser } = require("../models/Users");
const { getPostByUserId } = require("./postService");

exports.getAllUser = (req, res) => {
    const allUser = getAllUser().map(user => {
        const post =  getPostByUserId(user.id);
        return {...user, post}
    });

    console.log(allUser)

    return allUser   
}