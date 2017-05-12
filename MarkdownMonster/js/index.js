'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startingText = 'Heading\n=======\n\nSub-heading\n-----------\n# H1\n## H2 \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nCode block:\n```\nvar add1 = function(v){\n  return v + 1;\n}\n```\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n';

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      markdown: startingText
    };
    _this.enterMarkdown = _this.enterMarkdown.bind(_this);
    return _this;
  }

  Input.prototype.componentDidMount = function componentDidMount() {
    document.getElementById('result').innerHTML = marked(this.state.markdown);
  };

  Input.prototype.enterMarkdown = function enterMarkdown(event) {
    var value = event.target.value;
    this.setState({ markdown: value });document.getElementById('result').innerHTML = marked(value);
  };

  Input.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'input' },
      React.createElement(
        'textarea',
        {
          value: this.state.markdown,
          placeholder: 'Put your markdown here...',
          onChange: this.enterMarkdown },
        this.state.markdown
      )
    );
  };

  return Input;
}(React.Component);

var Output = function (_React$Component2) {
  _inherits(Output, _React$Component2);

  function Output() {
    _classCallCheck(this, Output);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Output.prototype.render = function render() {
    return React.createElement('div', { id: 'result', className: 'output' });
  };

  return Output;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'head' },
        React.createElement(
          'h1',
          { id: 'title' },
          'Markdown Monster'
        ),
        React.createElement(
          'a',
          { id: 'github', href: 'https://github.com/forkerino', target: '_blank' },
          React.createElement('img', { src: 'https://cdn.iconscout.com/public/images/icon/free/png-128/github-brand-logo-3c9d78d3a4407227-128x128.png' })
        )
      ),
      React.createElement(
        'div',
        { className: 'body' },
        React.createElement(Input, null),
        React.createElement(Output, null)
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));