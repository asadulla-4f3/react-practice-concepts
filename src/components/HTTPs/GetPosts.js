import axios from "axios";
import React, { Component } from "react";

class GetPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>List of Posts</h2>
        {posts.length !== 0
          ? posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
          : null}
      </div>
    );
  }
}

export default GetPosts;
