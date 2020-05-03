import React, { Component } from "react";
import axios from "axios";

// https://www.reddit.com/r/space.json
//space in state is subreddit  it's reddit thing
//we can call the API directly in ComponentWillMount....but that will not be modular code
//to make code more modular we call a function in ComponentWillMount and pass API as argument

//www.jsoneditoronline.org
//best json formatter

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      subreddit: "space",
    };
  }

  componentWillMount() {
    this.getReddit();
  }

  getReddit = () => {
    axios
      .get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
      .then((res) => {
        const posts = res.data.data.children.map((obj) => obj.data);
        this.setState({ posts });
      });
  };

  render() {
    return (
      <>
        <h1>{`/r/${this.state.subreddit}`}</h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
export default ApiCall;
