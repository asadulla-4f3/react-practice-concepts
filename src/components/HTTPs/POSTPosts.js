import axios from "axios";
import React, { Component } from "react";

class POSTPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  componentDidMount() {
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", {
    //     userId: "userId1",
    //     title:
    //       "This is the title of the post request from react practice project",
    //     body: "This is the body of the post request from react practice project",
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       posts: response.data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="userId">UserId: </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default POSTPosts;
