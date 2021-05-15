import React, { Component } from "react";
import axios from "axios";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

import "./Fibonacci.css";

class Fibonacci extends Component {
  timeInteval;
  constructor(props) {
    super(props);
    this.state = {
      seenIndexes: [],
      values: [],
      index: "",
    };
  }

  componentDidMount = () => {
    this.fetchLatestValues();
    this.timeInteval = setInterval(()=> {
      this.fetchLatestValues();
    }, 10000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timeInteval);
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values");
    this.setState({ seenIndexes: seenIndexes.data });
  };

  fetchValues = async () => {
    const responseValues = await axios.get("/api/values/current");
    if (responseValues.data) {
      let values = [];
      Object.keys(responseValues.data).forEach((item) => {
        values.push({ key: item, value: responseValues.data[item] });
      });
      this.setState({ values: values });
    }
  };

  fetchLatestValues = () => {
    this.fetchValues();
    this.fetchIndexes();
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
      <div className="fibonacci">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>Enter your index:</label>
            <input
              value={this.state.index}
              onChange={(event) => this.setState({ index: event.target.value })}
            />
            <button>Submit</button>
          </form>
          <button onClick={() => this.fetchLatestValues()}>Refresh</button>
        </div>

        <div className="results">
          <FlippingCard>
            <FlippingCardBack>
              This data comes from a Postgres DB
            </FlippingCardBack>
            <FlippingCardFront>
              <h3>Indexes I have seen:</h3>
              {this.state.seenIndexes.map(({ number }) => number).join(", ")}
            </FlippingCardFront>
          </FlippingCard>
          <FlippingCard>
            <FlippingCardBack>This data comes from a Redis DB</FlippingCardBack>
            <FlippingCardFront>
              <h3>Calculated Values:</h3>
              {this.state.values.map((item) => {
                return (
                  !isNaN(item.value) && <div key={item.key}>
                  For index {item.key} I calculated {item.value}
                </div>
                );
              })}
            </FlippingCardFront>
          </FlippingCard>
        </div>
      </div>
    );
  }
}

export default Fibonacci;
