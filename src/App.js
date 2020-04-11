import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Components/Modals/Modal";
import DataTable from "./Components/Tables/DataTable";
import { CSVLink } from "react-csv";
import BlogPost from "./Components/Forms/Blog";
import Header from "./Components/Header/Header";
class App extends Component {
  state = {
    items: [
      {
        id: 1,
        postTitle: "Best Way to use search algorithms",
        postDetails: "Best day ever this is a node moment ",
        first: "Anders",
        last: "lind",
        email: "anders",
        phone: "2342423432",
        location: "Toronto",
        hobby: "programming",
        added: "2020-03-10T15:28:38.706Z"
      }
    ]
  };

  StartMarathon(input) {
    //lets sort it

    var array = [1, 2, 3, 6, 12, 13, 17, 3];
    return Math.max.apply(Math, array);
    var largest = 0;

    //second way
    // for (var i = 0; i < array.length; i++) {
    //   if (largest < array[i]) {
    //     largest = array[i];
    //   }
    // }
    // console.log(largest);
  }
  //find the next item inarray
  // [2,4,6,8,12,14] //10
  // [9,12,15,18,24] //21
  FindDate() {
    var dates = [];

    dates.push(new Date("2019/06/25"));
    dates.push(new Date("2019/06/26"));
    dates.push(new Date("2019/06/27"));
    dates.push(new Date("2019/06/28"));

    var getDate = new Date(Math.max.apply(null, dates));
    var maximumDate = new Date(Math.max.apply(null, dates));
    var minimumDate = new Date(Math.min.apply(null, dates));
  }

  // getItems() {
  //   fetch("http://localhost:3000/crud")
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }))
  //     .catch(err => console.log(err));
  // }

  addItemToState = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  updateState = item => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = id => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <BlogPost items={this.state.items} />
        {/* <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{ float: "left", marginRight: "10px" }}
              className="btn btn-primary"
              data={this.state.items}
            >
              Download CSV
            </CSVLink>
            <ModalForm
              buttonLabel="Add Item"
              addItemToState={this.addItemToState}
            />
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default App;
