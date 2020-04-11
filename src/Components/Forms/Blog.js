import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
class BlogPost extends Component {
  render() {
    var todayDate = new Date().getDate();
    const items = this.props.items.map(item => {
      return (
        <div key={item.id} class="card mb-4">
          <div class="card-body">
            <h2 class="card-title">{item.postTitle}</h2>
            <p>{item.first}</p>

            <Link
              href="#"
              class="btn btn-primary"
              to={`/detail/${item.postTitle}`}
            >
              Detail's Page
            </Link>
          </div>
          <div class="card-footer text-muted">
            Posted on {todayDate} by
            <a href="#"> Snapcheckit Engineering</a>
          </div>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}

export default BlogPost;
