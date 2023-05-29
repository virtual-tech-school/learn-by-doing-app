
  // GENERATED FILE : CHANGES MADE MIGHT BE LOST ON BUILDING

  import Layout from '../../components/Layout';

  export default function Class_based_components() {
    return (
      <Layout data={{}} dangerousInnerHTML={`<h3>Introduction</h3>
<p>All the components by far, have been functional in style and syntax. This is common now, but you will see a different <code>class</code> based syntax too. In this lesson, we explore how a class-based component is written and how concepts like props and state are used in one.</p>
<h3>Lesson Overview</h3>
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<ul>
<li>Learn the structure of a class component and how they are written.</li>
<li>How to use props and state in class components.</li>
<li>Highlight the uses of <code>this</code> in class components.</li>
</ul>
<h3>The What's And Whys</h3>
<p>In your previous lessons, you have already been introduced to functional components, and the basic patterns in which components get written now a days. However, React components did not look this way when React was introduced.</p>
<p>If you look into any older React codebase, you'll notice a lot of classes. These are known as class-based components. Prior to February 2019, functional components were also called state-less, as there was no way to manage state in them. This was changed when hooks were introduced, leading to less verbose and 'neater' components.</p>
<p>In your career, chances are, you will be dealing with legacy code, so there will be days where you would be dealing with class components. Let's peek into the intricacies of a class-based component, and how they work.</p>
<h3>Building A Class Component</h3>
<p>As we already know about functional components, let us build a class-based component from a functional one. Usually, you will want to divide the contents of a component, like the one we use, into smaller, re-usable components, but for the purposes of this exercise, we stick to one component. Below, we have a sample functional component:</p>
<pre><code>import React, { useState } from "react";

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
  };

  return (
    &#x3C;section>
      &#x3C;h3>{name}&#x3C;/h3>
      &#x3C;form onSubmit={handleSubmit}>
        &#x3C;label htmlFor="task-entry">Enter a task: &#x3C;/label>
        &#x3C;input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        &#x3C;button type="submit">Submit&#x3C;/button>
      &#x3C;/form>
      &#x3C;h4>All the tasks!&#x3C;/h4>
      &#x3C;ul>
        {todos.map((todo) => (
          &#x3C;li key={todo}>{todo}&#x3C;/li>
        ))}
      &#x3C;/ul>
    &#x3C;/section>
  );
};

export default FunctionalInput;
</code></pre>
<p>That was a solid chunk of code. Take a while, sip some water and read it a couple of times.</p>
<h4>The Start Of A Class-Based Component</h4>
<p>Now, let's try to recreate it as a class-based component. The first thing it should have is, <em>drumroll</em>, a class! But it cannot be just another class, it will need to have certain properties that qualifies it as a React component. React provides us with all those properties on a class called <code>Component</code>, and we can write our components by simply extending the given class, as shown below:</p>
<pre><code>import React, { Component } from "react";

class ClassInput extends Component {
  // Some code goes here
}

/*
  This can also be written as:

  import React from 'react';
  class ClassInput extends React.Component {}
  export default ClassInput;

  instead of destructuring the `Component` during import
*/

export default ClassInput;
</code></pre>
<h4>The Use Of A Constructor And Props</h4>
<p>A class is generally incomplete without a constructor, so let's add one.</p>
<p>The props, that get passed into this component, gets passed into the class's <code>constructor</code>. This, along with the <code>super</code> method, allows you to use the props in context to <code>this</code>, which, in <em>this</em> case, refers to the component. If you’re really curious about what <code>super</code> actually does, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super">check out the docs</a>.</p>
<p>If your component doesn't have any props, it is fine to leave the <code>constructor</code> and the <code>super</code> with no arguments.</p>
<pre><code>import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
  }
  // Some more code goes here
}

export default ClassInput;
</code></pre>
<h4>Way To Render JSX</h4>
<p>Now that the props can be accessed inside of the class component, the next issue is to find a way to render the JSX.</p>
<p>Well, you can do that by returning your JSX from a <code>render</code> method! You can use the props that you declared in the constructor too!</p>
<pre><code>import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
  }
  // Some more code goes here

  render() {
    return (
      &#x3C;section>
        &#x3C;h3>{this.props.name}&#x3C;/h3>
        {/* The input field to enter To-Do's */}
        &#x3C;form>
          &#x3C;label htmlFor="task-entry">Enter a task: &#x3C;/label>
          &#x3C;input type="text" name="task-entry" />
          &#x3C;button type="submit">Submit&#x3C;/button>
        &#x3C;/form>
        &#x3C;h4>All the tasks!&#x3C;/h4>
        {/* The list of all the To-Do's, displayed */}
        &#x3C;ul>&#x3C;/ul>
      &#x3C;/section>
    );
  }
}

export default ClassInput;
</code></pre>
<p>Notice how the props get provided by <code>this</code>, unlike the functional component that we saw, initially?</p>
<h4>How To Use State And Manage Context</h4>
<p>Next comes the state. In a class-based component, the state gets initialized as a part of the constructor.</p>
<pre><code>import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };
  }
  // Some more code goes here

  render() {
    return (
      &#x3C;section>
        &#x3C;h3>{this.props.name}&#x3C;/h3>
        &#x3C;form>
          &#x3C;label htmlFor="task-entry">Enter a task: &#x3C;/label>
          &#x3C;input type="text" name="task-entry" />
          &#x3C;button type="submit">Submit&#x3C;/button>
        &#x3C;/form>
        &#x3C;h4>All the tasks!&#x3C;/h4>
        &#x3C;ul>&#x3C;/ul>
      &#x3C;/section>
    );
  }
}

export default ClassInput;
</code></pre>
<p>The pre-defined <code>setState</code> method can be used to set it again! Remember, state must not be mutated, so a new state must be set, every time.</p>
<p>Now, it is time to finish it off by adding all the functionality! It is nearly the same, except for a single difference. Whenever a method is declared, you must <code>bind</code> the <code>this</code> of the method to that of the class in order to work with it, as by default, the methods in a class are not bound to it. Usually, you do this inside the constructor and not at runtime [in the render method].</p>
<pre><code>import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      &#x3C;section>
        &#x3C;h3>{this.props.name}&#x3C;/h3>
        &#x3C;form onSubmit={this.handleSubmit}>
          &#x3C;label htmlFor="task-entry">Enter a task: &#x3C;/label>
          &#x3C;input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          &#x3C;button type="submit">Submit&#x3C;/button>
        &#x3C;/form>
        &#x3C;h4>All the tasks!&#x3C;/h4>
        &#x3C;ul>
          {this.state.todos.map((todo) => (
            &#x3C;li key={todo}>{todo}&#x3C;/li>
          ))}
        &#x3C;/ul>
      &#x3C;/section>
    );
  }
}

export default ClassInput;
</code></pre>
<p>And there we go, we have successfully made our first class-based component, as easy as that!</p>
<h3>Assignment</h3>
<p>For the purposes of this assignment, we take the simple class-based component that we built. There is an interactive example provided at the end, where you can work on.</p>
<ol>
<li>
<p>Implement a delete button for each task. The delete button should remove that specific task from the state array, thus deleting the task itself! Styling isn't a priority at this moment, but the button tag should be styled by default.</p>
</li>
<li>
<p>Implement a new class component, <code>Count</code> that displays the count of the number of todos, at any given time.</p>
</li>
<li>
<p>Implement an edit button for each task. It should replace the todo with an input field, and change the button itself to 'Resubmit', so the edits can be saved. This is a comparatively harder task, kudos for when you finish it!</p>
</li>
</ol>
<h3>Knowledge Check</h3>
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<ul>
<li>How do props get used in a class-based component?</li>
<li>How does JSX get displayed?</li>
<li>How do we deal with state in a class-based component?</li>
<li>How do you restore the context of <code>this</code> in a method?</li>
</ul>
<h3>Additional Resources</h3>
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<ul>
<li>In general, the React documentation on <a href="https://reactjs.org/docs/thinking-in-react.html">thinking in react</a> is a really good place to look into, if you want more practice with class-based components, from scratch.</li>
</ul>
`}>
      </Layout>
    );
  }
  