const { getAllUser } = require("../services/userServices");

const JSONAPISerializer = require("jsonapi-serializer").Serializer;

const UserSerializer = new JSONAPISerializer("users", {
  attributes: ["name", "email", "post"],
  keyForAttribute: "camelCase",
  included: true 
});

exports.getAllUser = (req, res) => {
  const users = getAllUser();
  const response = UserSerializer.serialize(users);
  response.meta = {totalUser: 90}
  response.links = {prev: `http://abcd/0`}
  response.posts = {
    ref: 'id',
    attributes: ['title'],
    relationshipLinks: {
      related: (user, post) => `/users/${user.id}/posts/${post.id}`
    },
    included: true // Automatically include posts if present
  },
  res.json(response);
};
