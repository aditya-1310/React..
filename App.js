const heading = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", { key: "child-1-h1" }, "hi am here"),
                React.createElement("h2", { key: "child-1-h2" }, "hey bro")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2"},
            [
                React.createElement("h1", { key: "child-2-h1" }, "hi am here"),
                React.createElement("h2", { key: "child-2-h2" }, "hey bro")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
