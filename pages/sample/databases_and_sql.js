
  // GENERATED FILE : CHANGES MADE MIGHT BE LOST ON BUILDING

  import Layout from '../../components/Layout';

  export default function Databases_and_sql() {
    return (
      <Layout data={{}} dangerousInnerHTML={`<h3>Introduction</h3>
<p>Data is the core of any good web app and a good working knowledge of SQL will take you a long way.  That knowledge lets you not just understand what's going on behind the scenes with your ORM tool (e.g. Active Record) but also to feel comfortable asking more complicated questions of your data.  And that's really what SQL is all about -- asking questions of your database and occasionally also adding or changing things in it.  Querying can be incredibly useful for you.</p>
<p>In more straightforward cases, you might want to display all users who signed up in December via the promotion code "FREESTUFF".  You might want to display all comments created by the current user and sorted by topic and creation date.  In more complex cases, you may want to show a list of all the orders shipped to states with more than 1,000 users by quantity and total order value.  Or, for internal reasons, you might ask marketing analysis questions like which promotion channels produce users who meet your specified engagement criteria of reading 5 articles per work week.</p>
<p>All of those examples involve you engaging with your database.  Luckily, many databases (the ones we'll be focusing on) speak SQL and luckily SQL really only has a dozen or so words that you'll consistently use out of a few dozen total.  So it's not a large language, it's much more about the concepts behind it.</p>
<p>You will start with the questions like the ones above and then have to figure out how to ask them properly of your database, which likely has a bunch of different tables in it.  Everyone probably visualizes it a bit differently, but finding a way to visualize what's going on when you do SQL queries is pretty important. We actually think of Excel tables moving in our head and combining with each other and reshuffling as necessary. To each their own.</p>
<p>We'll move beyond just the simple <code>SELECT "users".* FROM "users" LIMIT 1</code> queries and into more dynamic topics like joining tables together, performing calculations on the results, and grouping results together in new ways.</p>
<p>All this stuff is being used by Rails behind the scenes so understanding it will make you much better at writing queries in Rails. This is why we're going over databases before learning Rails.</p>
<h4>A Note on Resources</h4>
<p>SQL is one of those topics that's been stored away in dusty old technical manuals and 90's style websites. Even the best books out there can make it seem oddly complicated because they tend to write for the database engineer who actually does need to know all the nitty gritty details.</p>
<p>Though the prevalence of web applications these days has grown the demand among new users to focus on understanding the <em>concepts</em> of SQL, the learning tools haven't really caught up. We'll do our best to impart those concepts using the tools available.</p>
<h3>Lesson Overview</h3>
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<ul>
<li>What a Primary Key is.</li>
<li>What Foreign Keys are.</li>
<li>What a Schema is.</li>
<li>How to use various SQL statements like <code>SELECT</code>, <code>CREATE TABLE</code>, <code>UPDATE</code>, <code>DELETE</code> and more.</li>
<li>How to use various SQL clauses like <code>WHERE</code>, <code>LIKE</code>, <code>DISTINCT</code> and more.</li>
<li>How to use various SQL functions like <code>AVG</code>, <code>COUNT</code>, <code>SUM</code> and more.</li>
<li>What Indexes are good for.</li>
<li>What the difference between <code>WHERE</code> and <code>HAVING</code> is.</li>
</ul>
<h3>The World's Fastest Semi-Complete Explanation of SQL</h3>
<p>This is a very brief soup-to-nuts explanation of SQL.  It won't do a particularly good job teaching you specific new tactics but should present a general overview to have going into the reading assignment.  Here we go...</p>
<p>SQL is the language used to talk to many relational databases.  These databases use lots of tables to store different types of data (e.g. "users" and "posts" tables).  Tables are long lists like spreadsheets where each row is a different record (or object, e.g. a single user) and each column is one of that record's attributes (like name, email, etc).  The one column that all tables include is an "ID" column, which gives the unique row numbers, and is called the record's "primary key".</p>
<p>You can "link" tables together by making one of the columns in one table point to the ID of another table, for instance a row in the "posts" table might include the author's ID under the column called "user_id".  Because the "posts" table has the ID of another table in it, that column is called a "foreign key".</p>
<h4>Setting Stuff Up</h4>
<p>SQL lets you do everything.  The first category of commands are for setting up the database (<code>CREATE DATABASE</code>), setting up an individual table (<code>CREATE TABLE</code>), and similar commands for altering or destroying them.  The setup information for your database is stored in a special file called the "Schema", and this is updated whenever you make changes to the structure of your database.  Think of the schema as saying "here's our database and it's got a couple tables.  The first table is 'users' and it's got columns for 'ID' (which is an integer), 'name' (which is a bunch of characters), 'email' (which is a bunch of characters) ..."</p>
<p>In addition to setting up tables, you can tell your database to only allow unique values in a particular column (e.g. for usernames) or to index a column for faster searching later with <code>CREATE INDEX</code>.  Create indexes, which basically do all the hard work of sorting your table ahead of time, for columns that you'll likely be using to search on later (like username)... it will make your database much faster.</p>
<p>SQL likes semicolons at the end of lines and using single quotes (') instead of double quotes(").</p>
<h4>Mucking Around with Data</h4>
<p>Once your database is set up and you've got empty tables to work with, you use SQL's statements to start populating it.  The main actions you want to do are CRUD (which we've seen before) -- Create, Read, Update, and Destroy.  Most of the commands you run will fall under the "Read" category, since you'll spend lots of time asking questions of your data and trying to display it.</p>
<p>Every CRUDdy command in SQL contains a few parts -- the action ("statement"), the table it should run on, and the conditions ("clauses").  If you just do an action on a table without specifying conditions, it will apply to the whole database and you'll probably break something.</p>
<p>For "Destroy" queries, the classic mistake is typing <code>DELETE FROM users</code> without a <code>WHERE</code> clause, which removes all your users from the table.  You probably needed to delete just one user, who you would specify based on some (hopefully unique) attribute like "name" or "id" as part of your condition clause, e.g. <code>DELETE FROM users WHERE users.id = 1</code>.  You can do all kinds of common sense things like using <code>></code>, <code>&#x3C;</code>, <code>&#x3C;=</code> etc. comparison operators to specify groups of rows to run commands on or logical operators like <code>AND</code>, <code>OR</code>, <code>NOT</code> etc to chain multiple clauses together, e.g. <code>DELETE FROM users WHERE id > 12 AND name = 'foo'</code>.</p>
<p>"Create" queries use <code>INSERT INTO</code> and you'll need to specify which columns to insert stuff into and then which values to put in those columns, which looks something like <code>INSERT INTO users (name, email) VALUES ('foobar','foo@bar.com');</code>.  This is one of the few queries that you don't need to be careful about which rows you've selected since you're actually just adding new ones into the table.</p>
<p>"Update" queries use <code>UPDATE</code> and you'll need to tell it what data to <code>SET</code> (using key="value" pairs) and which rows to do those updates for.  Be careful because if your <code>WHERE</code> clause finds multiple rows (e.g. if you've searched based on a common first name), they'll all get updated. A standard query for updating a user's email may look something like the following (though in the real world you'd search on ID because it's always unique):</p>
<pre><code>  UPDATE users
  SET name='barfoo', email='bar@foo.com'
  WHERE email='foo@bar.com';
</code></pre>
<p>"Read" queries, which use <code>SELECT</code>, are the most common, e.g. <code>SELECT * FROM users WHERE created_at &#x3C; '2013-12-11 15:35:59 -0800'</code>.  The <code>*</code> you see just says "all the columns".  Specify a column using both the table name and the column name.  You can get away with just the column name for simple queries but as soon as there are more than one table involved, SQL will yell at you so just always specify the table name: <code>SELECT users.id, users.name FROM users</code>.</p>
<p>A close cousin of <code>SELECT</code>, for if you only want unique values of a column, is <code>SELECT DISTINCT</code>.  Say you want a list of all the different names of your users without any duplicates... try <code>SELECT DISTINCT users.name FROM users</code>.</p>
<h4>Mashing Tables Together</h4>
<p>If you want to get all the posts created by a given user, you need to tell SQL which columns it should use to zip the tables together with the <code>ON</code> clause. Perform the "zipping" with the <code>JOIN</code> command.  But wait, if you mash two tables together where the data doesn't perfectly match up (e.g. there are multiple posts for one user), which rows do you actually keep?  There are four different possibilities:</p>
<p><em>(<strong>note:</strong> the "left" table is the original table (the one that the <code>FROM</code> clause was <code>ON</code>), e.g. "users" in examples below.)</em></p>
<p><em>See <a href="http://blog.codinghorror.com/a-visual-explanation-of-sql-joins">"A Visual Explanation of SQL Joins"</a> by Jeff Atwood for good visuals.</em></p>
<ol>
<li><code>INNER JOIN</code>, aka <code>JOIN</code> -- Your best friend and 95% of what you'll use.  Keeps only the rows from both tables where they match up.  If you asked for all the posts for all users (<code>SELECT * FROM users JOIN posts ON users.id = posts.user_id</code>), it would return only the users who have actually written posts and only posts which have specified their author in the <code>user_id</code> column.  If an author has written multiple posts, there will be multiple rows returned (but the columns containing the user data will just be repeated).</li>
<li><code>LEFT OUTER JOIN</code> -- keep all the rows from the left table and add on any rows from the right table which match up to the left table's.  Set any empty cells this produces to <code>NULL</code>.  E.g. return all the users whether they have written posts or not.  If they do have posts, list those posts as above.  If not, set the columns we asked for from the "posts" table to <code>NULL</code>.</li>
<li><code>RIGHT OUTER JOIN</code> -- the opposite... keep all rows in the right table.</li>
<li><code>FULL OUTER JOIN</code> -- Keep all rows from all tables, even if there are mismatches between them.  Set any mismatched cells to <code>NULL</code>.</li>
</ol>
<p>Joins naturally let you specify conditions too, like if you only want the posts from a specific user: <code>SELECT * FROM users JOIN posts ON users.id = posts.user_id WHERE users.id = 42</code>.</p>
<p>Read through <a href="http://www.w3schools.com/sql/sql_join.asp">W3 Schools' Joins lesson</a> for a better explanation.</p>
<h4>Using Functions to Aggregate Your Data</h4>
<p>When you run a vanilla SQL query, you often get back a bunch of rows.  Sometimes you want to just return a single relevant value that aggregates a column, like the <code>COUNT</code> of posts a user has written.  In this case, just use one of the helpful "aggregate" functions offered by SQL (most of which you'd expect to be there -- functions like <code>SUM</code> and <code>MIN</code> and <code>MAX</code> etc).  You include the function as a part of the <code>SELECT</code> statement, like <code>SELECT MAX(users.age) FROM users</code>.  The function will operate on just a single column unless you specify <code>*</code>, which only works for some functions like <code>COUNT</code> (because how would you <code>MAX</code> a column for "name"?).</p>
<p>You often see aliases (<code>AS</code>) used to rename columns or aggregate functions so you can call them by that alias later, e.g. <code>SELECT MAX(users.age) AS highest_age FROM users</code> will return a column called <code>highest_age</code> with the maximum age in it.</p>
<p>Now we're getting into the fun stuff.  Aggregate functions like <code>COUNT</code> which return just a single value for your whole dataset are nice, but they become really useful when you want to use them on very specific chunks of your data and then group them together, e.g. displaying the <code>COUNT</code> of posts for EACH user (as opposed to the count of all posts by all users).  That would look like:</p>
<pre><code>  SELECT users.id, users.name, COUNT(posts.id) AS posts_written
  FROM users
  JOIN posts ON users.id = posts.user_id
  GROUP BY users.id;
</code></pre>
<p>See <a href="http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_groupby">W3 Schools' article</a> and play around with the SQL in the window (try deleting the <code>GROUP BY</code> line) for an interactive visual.</p>
<p>The last nifty trick is if you want to only display a subset of your data.  In a normal situation, you'd use a <code>WHERE</code> clause to narrow it down.  But if you've used an aggregate function like <code>COUNT</code> (say to get the count of posts written for each user in the example above), <code>WHERE</code> won't work anymore.  So to conditionally retrieve records based on aggregate functions, you use the <code>HAVING</code> function, which is essentially the <code>WHERE</code> for aggregates.  So say you only want to display users who have written more than 10 posts:</p>
<pre><code>  SELECT users.id, users.name, COUNT(posts.id) AS posts_written
  FROM users
  JOIN posts ON users.id = posts.user_id
  GROUP BY users.id
  HAVING posts_written >= 10;
</code></pre>
<p>Try going back to <a href="http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_groupby">the W3 Schools' example</a> and joining the <code>Customers</code> and the <code>Orders</code> tables to get the number of orders in each country and adding the line <code>HAVING COUNT(*) > 10;</code> after <code>GROUP BY</code> (and delete the extra semicolon in the previous line).</p>
<p>You probably got lost somewhere in the above explanation and that's just fine... it's covering way more stuff than anyone can pick up in 10 minutes.  The assigned reading will do a better job of explaining things but, more importantly, you'll get plenty of opportunities to solidify your understanding by applying it in the project.  If you've still got blind spots, check out the Additional Resources section below.  Fear not and stick with it!</p>
<h3>SQL is faster than Ruby!</h3>
<p>Learning this stuff is particularly relevant because it's MUCH faster for you to build queries that use SQL intelligently than to just grab a whole bunch of data out of your database and then use Ruby to process it.  For instance, if you want all the unique names of your users, you COULD just grab the whole list from your database using SQL like <code>SELECT users.name FROM users</code> (which Active Record will do for you with <code>User.select(:name)</code>) then remove duplicates using Ruby's <code>#uniq</code> method, e.g. <code>User.select(:name).uniq</code>... but that requires you to pull all that data out of your database and then put it into memory and then iterate through it using Ruby.  Use <code>SELECT DISTINCT users.name FROM users</code> instead to have SQL do it all in one step.</p>
<p>SQL is built to be fast.  It has a special query optimizer which takes a look at the whole query you're about to run and it figures out exactly which tables it needs to join together and how it can most quickly execute the query.  The difference between using <code>SELECT</code> and <code>SELECT DISTINCT</code> is negligible compared to the time cost of doing it in Ruby.  Learning your SQL will help you write Active Record queries that can do more which will make your app much faster.</p>
<h3>Assignment</h3>
<h3>Conclusion</h3>
<p>SQL can be a tricky set of concepts to wrap your head around, particularly when it comes to conditionally displaying and grouping the results of multiple joins.  We've emphasized that this stuff is useful for understanding what's going on behind the scenes with Rails and you'll get a chance to apply it in the project.  Everything up to vanilla joins and vanilla aggregate functions is core knowledge that you should really make an effort to assimilate.</p>
<p>If you never quite get to the point where you're comfortable with the really advanced concepts, you'll luckily not need to use them except in a small fraction of situations in your future.  It's good to learn it all up front but you'll probably find yourself Googling for how to perform certain advanced queries when the time comes anyway.</p>
<p>The next step, once you've had a chance to practice this all in the project, is to apply it to Rails with Active Record.  You'll quickly find that Active Record makes your life much, much, much better.  Just don't forget about ol' SQL when you've moved onto those better and brighter things, okay?</p>
<h3>Knowledge Checks</h3>
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<ul>
<li><a href="#foreign-key">What is the difference between a foreign key and a primary key?</a></li>
<li><a href="#schema">Where is the setup information for your database stored?</a></li>
<li><a href="#command-parts">What are the important parts of a SQL command?</a></li>
<li><a href="#sql-read">Which SQL statement is associated with "Read" from the CRUD acronym?</a></li>
<li><a href="#inner-join">Which <code>JOIN</code> statement keeps only the rows from both tables where they match up?</a></li>
<li><a href="#aggregate-function">How do you use an aggregate function?</a></li>
<li><a href="#having-function">In which situation would you use the <code>HAVING</code> function?</a></li>
<li><a href="#sql-is-faster-than-ruby">Why can't I just use Ruby to process my database data?</a></li>
</ul>
<h3>Additional Resources</h3>
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<ul>
<li>Odinite Hunter D made his excellent notes into a <a href="https://hunter-ducharme.gitbook.io/sql-basics">Git Book on SQL</a> which you should totally check out if you want a decent resource.</li>
<li><a href="http://www.tutorialspoint.com/sql/index.htm">SQL "tutorial" from tutorialspoint</a>... doesn't really give much guidance, but can be a useful reference for the language.</li>
<li><a href="http://www.sohamkamani.com/blog/2016/07/07/a-beginners-guide-to-sql/">A Beginners Guide to SQL</a> by Soham Kamani.</li>
<li><a href="https://flashcards.github.io/sql/introduction.html">SQL Flashcards</a> by flashcards.github.io.</li>
<li>If you feel like doing more SQL exercises, make sure to check out <a href="http://www.sql-ex.com/">SQL Exercises</a>.</li>
</ul>
`}>
      </Layout>
    );
  }
  