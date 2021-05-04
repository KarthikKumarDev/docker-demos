import React, { Component } from "react";
import axios from "axios";

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seenIndexes: [],
      values: [],
      index: "",
    };
  }

  componentDidMount = () => {
    this.fetchValues();
    this.fetchIndexes();
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values");
    this.setState({ seenIndexes: seenIndexes.data });
  };

  fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });

    this.setState({ index: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        {this.state.seenIndexes.map(({ number }) => number).join(", ")}
        <h3>Calculated Values:</h3>
        {this.state.values.map((value, index) => {
          return (
            <div key={value}>
              For index {index} I calculated {value}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Fibonacci;
