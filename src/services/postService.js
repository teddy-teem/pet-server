const { getPostByUserId } = require("../models/Post")

exports.getPostByUserId = (userId) => {
    return getPostByUserId(userId)
}