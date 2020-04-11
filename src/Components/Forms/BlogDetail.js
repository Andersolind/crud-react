import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
class BlogDetail extends Component {
  render() {
    var props = this.props.children;
    var todayDate = new Date().getDate();

    return (
      <div class="card mb-4">
        <div class="card-body">
          <h2 class="card-title">Work in progress</h2>
        </div>
        <div class="card-footer text-muted">
          Posted on {todayDate} by
          <a href="#"> Snapcheckit Engineering</a>
        </div>
      </div>
    );
  }
}

export default BlogDetail;
