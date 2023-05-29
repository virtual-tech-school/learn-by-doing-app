
  // GENERATED FILE : CHANGES MADE MIGHT BE LOST ON BUILDING

  import Layout from '../../components/Layout';

  export default function Component_lifecycle_methods() {
    return (
      <Layout data={{}} dangerousInnerHTML={`<h3>Introduction</h3>
<p>In the previous section, you've learned about a component's lifecycle. In functional components, we've primarily used the <code>useEffect</code> hook to perform tasks throughout the lifecycle, but in class components we have to use specific lifecycle methods instead.</p>
<p>We'll start with a short recap of what a components lifecycle is. There are three stages to a component's life: mounting, updating, and unmounting. Each of these have a method assigned to them within class components, which is what we are going to cover in this lesson.</p>
<h3>Lesson Overview</h3>
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<ul>
<li>How to use lifecycle methods in a class component</li>
</ul>
<h3>render()</h3>
<p>The render function is the most used lifecycle method, and one that you've come across in the last class components lesson. It is the only required lifecycle method in a class component. It runs on mount and update of a component. Render should be pure, meaning it doesn't modify component state, returns the same thing each time it's called (given the same inputs), and doesn't directly interact with the browser.</p>
<h3>componentDidMount()</h3>
<p>This method is run after the component is mounted (inserted in the DOM tree). You should make any calls to fetch data that is needed for the component here. It is also a good place to do anything that is reliant on the component, such as drawing on a canvas element that you just rendered.</p>
<h3>componentDidUpdate()</h3>
<p>This method is run after a component re-renders. Because of this, you have to be careful about what you update in this method, as if you're updating state indiscriminately, a re-render is caused, and you'll end up in an endless loop. You can avoid this issue by using conditional statements about the equality of previous and current props when updating state.</p>
<p>In this method you should be updating anything that needs to be changed in response to either the DOM changing, or any states that you might want to act on upon change. For example, you'd want to refetch user data if the user changes.</p>
<h3>componentWillUnmount()</h3>
<p>This is the last lifecycle method, which is called before a component is unmounted and destroyed. In this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers, etc.</p>
<h3>How useEffect() combines the Lifecycle Methods</h3>
<p>Now that we've learnt about class lifecycle methods, it's useful to understand that the <code>useEffect</code> hook used in functional components is essentially a combination of <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>. Which method/methods it relates to varies based on it's dependency array, and if it returns anything.</p>
<ul>
<li>An empty dependency array would be equivalent to <code>componentDidMount</code>.</li>
<li>A dependency array with a value/values in it would be a combination of <code>componentDidMount</code> and <code>componentDidUpdate</code>, but only updating when dependencies change.</li>
<li>No dependency array would be equivalent to <code>componentDidMount</code> and <code>componentDidUpdate</code> combined.</li>
<li>A return function inside of a <code>useEffect()</code> hook would be equivalent to <code>componentWillUnmount</code>.</li>
</ul>
<p>For example:</p>
<pre><code>    useEffect(() => {
        placeholderFunction()
        return () => cleanupFunction()
    }, [])
</code></pre>
<p>In this snippet, the useEffect contains the functionality of <code>componentDidMount</code>, and <code>componentWillUnmount</code> via the return function. This example doesn't have the <code>componentDidUpdate</code> functionality because of an empty dependency array.</p>
<h3>Assignment</h3>
<ol>
<li>
<p>Check out this <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">lifecycle diagram</a> to see a good visual representation of a components lifecycle methods.</p>
</li>
<li>
<p>Read this <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">component lifecycle documentation</a> by the people who made react!</p>
<ul>
<li>You only have to worry about the methods in bold, but you can read up on the others if you're curious - they're uncommon and you likely won't need them in
most of your apps.</li>
</ul>
</li>
</ol>
<h3>Knowledge Check</h3>
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<ul>
<li>What is the only required lifecycle method?</li>
<li>What lifecycle method should you use for initial data fetching?</li>
<li>When you want to act upon change of the DOM, or of state, what lifecycle method would you use?</li>
<li>When performing cleanup actions, what lifecycle method should be used?</li>
<li>How does the useEffect hook combine some of the lifecycle methods?</li>
</ul>
<h3>Additional Resources</h3>
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<ul>
<li>It looks like this lesson doesn't have any additional resources yet. Help us expand this section by contributing to our curriculum.</li>
</ul>
`}>
      </Layout>
    );
  }
  