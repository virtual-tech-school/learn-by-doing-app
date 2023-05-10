
  // GENERATED FILE : CHANGES MADE MIGHT BE LOST ON BUILDING

  import Layout from '../../components/Layout';

  export default function Databases() {
    return (
      <Layout data={{}} dangerousInnerHTML={`<h3>Introduction</h3>
<p>We've talked about the client-side and the server-side but how do we keep ahold of all our user's data?  Who remembers that your login password is <code>CatLover1985</code> so you can sign into the website?  The bottom layer of any web application is the database and it handles all the remembering for you (we'll cover caching much later).  It can be relatively simple, like an excel spreadsheet, or incredibly complex and split into many giant pieces like Facebook's.</p>
<p>Databases are kind of hidden in the back of the web application so people treat them with a sort of suspicion and awe.  <strong>That's nonsense and you should get over it</strong> -- your database and you are going to become very good friends (or at least frenemies).  By the end of this curriculum, you're going to understand what's going on with your databases and be able to interact with them like a pro (and probably better than some people you'll work with).  This lesson is a teaser for that.</p>
<p>Compared to a normal programming language like you've already learned, SQL (Structured Query Language), which is used to query databases, is a very simple syntax... there are only a small handful of verbs to learn.  What trips people up is that you need to be able to visualize in your head what it's going to be doing.  We'll spend a fair bit of time on SQL and databases because they're so fundamental, but for now we'll just cover enough to get you familiar with what's going on in there.</p>
<h3>Learning Overview</h3>
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<ul>
<li>What a database is.</li>
<li>What relational databases are.</li>
<li>In what way relational databases are different from XML.</li>
<li>What SQL is.</li>
<li>What SQL is used for.</li>
<li>How to get all the records from a table in SQL.</li>
<li>How to insert a record in SQL.</li>
</ul>
<h3>Assignment</h3>
<ol>
<li>
<p>Check out this <a href="https://launchschool.com/books/sql/read/introduction">introduction</a> of how SQL can be used to organise and manage an overwhelming amount of data.</p>
<ul>
<li>You do not need to go any further than the first page on introductions.</li>
</ul>
</li>
<li>
<p>Watch this <a href="http://www.youtube.com/watch?v=z2kbsG8zsLM">short video introduction to relational databases</a> to get a feel for why this stuff is useful and some more exposure to the terminology we'll use.</p>
</li>
<li>
<p>Go through this <a href="https://www.khanacademy.org/computing/hour-of-code/hour-of-sql/v/welcome-to-sql">Khan Academy tutorial</a>, to get a feel for actually creating and manipulating databases.</p>
</li>
</ol>
<h3>Knowledge Check</h3>
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<ul>
<li><a href="https://launchschool.com/books/sql/read/introduction#structureddata">What is a database?</a></li>
<li><a href="https://launchschool.com/books/sql/read/introduction#rdbms">What are relational databases?</a></li>
<li><a href="https://youtu.be/z2kbsG8zsLM?t=200">What is a Primary Key?</a></li>
<li><a href="https://launchschool.com/books/sql/read/introduction#sql">What is SQL?</a></li>
<li><a href="https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-sql/pt/querying-the-table">How do you get all the records from a table in SQL?</a></li>
<li><a href="https://www.khanacademy.org/computing/hour-of-code/hour-of-code-lessons/hour-of-sql/pt/creating-a-table-and-inserting-data">How do you insert a record in SQL?</a></li>
</ul>
<h3>Additional Resources</h3>
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<ul>
<li><a href="http://computer.howstuffworks.com/question599.htm">What is a Relational Database?</a> from HowStuffWorks.com</li>
<li>A brief <a href="http://simple.wikipedia.org/wiki/Relational_database">Simple Wiki article describing relational databases</a></li>
<li>Hunter Ducharme created <a href="https://hunter-ducharme.gitbook.io/sql-basics/">an e-book</a> which is a great documentation on how to do all the basics in SQL.</li>
<li>Relational databases aren't the only way to store data. Non-relational (aka NoSQL) databases have emerged over the last couple decades. Check out <a href="https://circleci.com/blog/SQL-vs-NoSQL-databases/">this article</a> to learn the difference between SQL and NoSQL.</li>
</ul>
`}>
      </Layout>
    );
  }
  