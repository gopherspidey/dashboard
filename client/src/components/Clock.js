import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="box-grayed centered">
          <h2>{moment(this.state.date).format("ddd, MMM Do")}</h2>
          <h1>{moment(this.state.date).format("hh:mm:ss a")}</h1>
        </div>
      </div>
    );
  }
}


export default Clock;
