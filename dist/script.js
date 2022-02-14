class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: '' };

  }

  render() {
    const numberStyle = {
      fontSize: '64px' };


    return (
      React.createElement("div", { className: "col-sm-12 text-center" },
      React.createElement("h2", {
        style: numberStyle },
      this.state.fizzBuzz || this.state.count), 

      React.createElement("div", { className: "btn-group" }, 
      React.createElement("button", {
        onClick: this._decrement.bind(this),
        className: "btn btn-lg btn-default" }, 
      React.createElement("i", { className: "fa fa-minus" })), 

      React.createElement("button", {
        onClick: this._increment.bind(this),
        className: "btn btn-lg btn-primary" }, 
      React.createElement("i", { className: "fa fa-plus" })))));




  }

  _fizzBuzz(num) {
    if (num % 5 === 0) {
      this.setState({ fizzBuzz: 'Buzz' });
    } else if (num % 3 === 0) {
      this.setState({ fizzBuzz: 'Fizz' });
    } else {
      this.setState({ fizzBuzz: '' });
    }
  }

  _decrement() {
    if (this.state.count > 1) {
      this.setState({ count: --this.state.count });
      this._fizzBuzz(this.state.count);
    }
  }

  _increment() {
    if (this.state.count < 100) {
      this.setState({ count: ++this.state.count });
      this._fizzBuzz(this.state.count);
    }
  }}


ReactDOM.render(React.createElement(FizzBuzz, null), document.getElementById('app'));