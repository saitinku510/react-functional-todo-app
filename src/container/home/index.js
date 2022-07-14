import React from "react";
import Todo from "../../components/todo";
import "./home.css";

const Home = () => {
  return (
      <section>
        <div className="container">
          <div className="todo">
            <h1>Todo App</h1>
            <Todo />
          </div>
        </div>
      </section>
  );
};

export default Home;
