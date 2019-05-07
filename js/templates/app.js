function Application(props) {
  return React.createElement(
    "div",
    { className: "scoreboard" },
    React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "h1",
        null,
        props.title
      )
    ),
    React.createElement(
      "div",
      { className: "players" },
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(
          "div",
          { className: "player-name" },
          "Jim Hoskins"
        ),
        React.createElement(
          "div",
          { className: "player-score" },
          React.createElement(
            "div",
            { className: "counter" },
            React.createElement(
              "button",
              { className: "counter-action decrement" },
              " - "
            ),
            React.createElement(
              "div",
              { className: "counter-score" },
              " 31 "
            ),
            React.createElement(
              "button",
              { className: "counter-action increment" },
              " + "
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(
          "div",
          { className: "player-name" },
          "Andrew Facebash"
        ),
        React.createElement(
          "div",
          { className: "player-score" },
          React.createElement(
            "div",
            { className: "counter" },
            React.createElement(
              "button",
              { className: "counter-action decrement" },
              " - "
            ),
            React.createElement(
              "div",
              { className: "counter-score" },
              " 31 "
            ),
            React.createElement(
              "button",
              { className: "counter-action increment" },
              " + "
            )
          )
        )
      )
    )
  );
}

Application.propTypes = {
  title: React.PropTypes.string
};

Application.defaultProps = {
  title: "Scoreboard"
};
ReactDOM.render(React.createElement(Application, null), document.getElementById('container'));