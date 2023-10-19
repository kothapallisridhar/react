import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "child1" }, "Saibaba Sarath Babuji!"),
//   React.createElement("h2", { id: "child2" }, "Shirdi"),
// ]);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Component => is a JS function which returns a piece of JSX code (i.e. React Element)
// Class based Component - OLD
// Functional Component - NEW
const Title = () => {
  return <h1>Title Component</h1>;
};
const Heading = () => {
  // various ways of calling Components
  return (
    <div id="container">
      {300 + 700}
      <Title />
      {Title()}
      <Title></Title>
      <h1>React Functional Component</h1>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);