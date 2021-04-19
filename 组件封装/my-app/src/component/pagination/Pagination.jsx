import React, { Component } from "react";
import axios from "axios";

function Posts({ posts, isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "40px" }}>
          <div> {post.title} </div>
          <div> {post.body} </div>
        </div>
      ))}
    </div>
  );
}

function Paginator({ totalPosts, postsPerPage, handlePageChange }) {
  const pagesNumber = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        {pages.map((page) => {
          return (
            <li
              key={page}
              style={{ width: "40px", textAlign: "center" }}
              onClick={() => {
                handlePageChange(page);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      posts: [],
      currentPage: 1,
      postsPerPage: 10,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((value) => {
        console.log(value);
        this.setState({
          posts: value.data,
          isLoading: false,
        });
      });
    }, 2000);
  }

  handlePageChange = (number) => {
    this.setState({
      currentPage: number,
    });
  };
  render() {
    const { posts, isLoading, postsPerPage, currentPage } = this.state;
    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <h1>Pagination</h1>
        <Posts isLoading={isLoading} posts={currentPosts}></Posts>
        <Paginator
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          handlePageChange={this.handlePageChange}
        ></Paginator>
      </div>
    );
  }
}
