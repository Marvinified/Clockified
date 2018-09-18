import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display : grid;
  grid-template-columns : repeat(5, 1fr);
  width : fit-content;
  text-align : center;
  font-size : 24px;
`;

export class CountDown extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hour: 0
  };

  parseTime = time => {
    if (time < 10) return `0${time}`;
    return time;
  };

  componentDidMount() {
    const { endTime } = this.props;
    setInterval(() => {
      const now = new Date();
      const remaining = endTime - now;
      // alert(remaining.toString());
      const hour = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor(remaining % (1000 * 60 * 60) / 1000 / 60);
      const seconds = Math.floor(remaining % (1000 * 60 * 60) / 1000 % 60);

      // const seconds = remaining.getSeconds();
      this.setState({
        hour,
        seconds,
        minutes
      });
    }, 1000);
  }
  render() {
    const { seconds, minutes, hour } = this.state;
    const {...rest} = this.props;
    return (
      <Wrapper {...rest}>
        <span>{this.parseTime(hour)}</span>
        <span> : </span>
        <span>{this.parseTime(minutes)}</span>
        <span> : </span>
        <span>{this.parseTime(seconds)}</span>
      </Wrapper>
    );
  }
}
