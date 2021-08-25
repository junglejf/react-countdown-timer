import React from 'react';
import PropTypes from "prop-types";
const ON = 1;
const PAUSE = 2;
const ONtoOFF = 3;
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: { minute: 0, second: 0 } };
  }
  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  }
  handleTimeInput = (e) => {
    const { target: {value, className} }= e ;
    this.setState((prevState) => {
      let newValue = parseInt(value, 10) < 0 ? 0 : parseInt(value, 10);
      if (className === 'second' && newValue > 59) newValue = 59;
      if (className === 'minute' && newValue > 999) newValue = 999;
      const newTime = {...prevState.time, ...{[className]: newValue}}
      return ({time: newTime});
    });
  }

  totalTime = ({ time: { minute, second } }) => {
    return ( minute * 60 + second);
  }
  setTime = ({ time: { minute, second } }) => {
    let min = minute;
    let sec = second;
    if(!sec && min) {
      min -= 1;
      sec = 60;
    }
    return(
      (min || sec) ? {time:{minute: min, second: sec - 1}}
      : this.onClear());
  }
  onStart = (e) => {
    e.preventDefault();
    const { handleMode, ligado } = this.props;
    if(ligado !== ON){
      handleMode(ON);
      this.myInterval = setInterval(() => {
          this.setState((prevState)=>({...prevState, ...this.setTime(prevState)}))
        }, 1000)
    }
  }

  onPause = (e) => {
    e.preventDefault();
    const { handleMode } = this.props;
    handleMode(PAUSE);
    clearInterval(this.myInterval);
  }
  
  onClear = () => {
    const { handleMode } = this.props;
    handleMode(ONtoOFF);
    clearInterval(this.myInterval);
    this.setState({ time: {minute:0, second:0} });
  }
  
  timeOver = () => (<label className='acabou'>ACABOU O TEMPO !!!</label>);

  formatValue = (value) => {
    const n = (value < 10 ? `0${value}` : value);
    console.log(value);
    return n;
  };
  render() {
    const { time: { minute, second }} = this.state;
    const { ligado } = this.props;
    return(
        <form className='clock'>
          <div className='clockInput'>
            <input className='minute' maxlength="4" placeholder={ this.formatValue(minute) } type="number" value={this.formatValue(minute)} min={"0"} max={"9999"} onChange = {this.handleTimeInput}></input>
            <input className='second' maxlength="2" placeholder={ this.formatValue(second) } type="number" value={this.formatValue(second)} min={"0"} max={"59"}step={10} onChange ={this.handleTimeInput}></input>
          </div>  
          <div className='clockButtons'>
            <button className='startBtn' type="reset" onClick={this.onStart}></button>
            <button className='stopBtn' type="reset" onClick={this.onPause} ></button>
            <button className='clearBtn' type="reset" onClick={this.onClear} ></button>
          </div>
          {!minute && !second && ligado===ONtoOFF && this.timeOver()}
        </form>
    );
  }
}

Countdown.propTypes = {
  ligado: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  handleMode: PropTypes.func.isRequired,
};


export default Countdown;