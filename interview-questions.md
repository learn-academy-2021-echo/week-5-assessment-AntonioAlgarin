# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer: A block in Ruby refers to a set of instructions contained within a do-end or one line block code of a method. Ruby blocks are anonymous functions. The code in the block is always enclosed in {}. Every time a method is called and has a do-end the block code gets executed.

  Researched answer: Ruby blocks are anonymous functions that can be created with the do-end keywords or with {}. Blocks are code that is passed to a method. Blocks are capable of having multiple parameters. The while method is unique because it doesn't take a block as an argument.

2. What is a gem?

  Your answer: A gem is a snippet of code that has been pre-built for the Ruby programming language. In order to be able to access a gem, the user must import the gem to their local computer by using the `$gem install` command and specifying the name of the gem you'd like to install.

  Researched answer: A gem is a package of code, also known as a library that contains a set of functionality that's exclusive to the Ruby programming language. In order to be able to access a gem, the user must import the gem to their local computer by using the `$gem install` command and specifying the name of the gem you'd like to install.

3. What is Ruby on Rails?

  Your answer: Rails is a server-side framework that allows users to create a full-stack application. This is because Rails allows information to be stored in a database. Rails uses ORM to allow a Rails app to interact with a database.

  Researched answer: Rails is a server-side framework that was built using the Ruby programming language. Rails is a Model-View-Controller framework (MVC). The Model (Active Record) interacts with the database. The Views (Action Views) includes all the HTML files and structure. The Controller (Action Controller) interacts with the views and model to specify the actions of the application.

4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database has a data structure of rows and columns. An example of a relational database is Postgresql.
  The information is stored in a collection of tables that are related to each other. There are other kinds of databases that are not relational. An example would be MondoDB.

  Researched answer: A relational database displays information in rows and columns. The database can contain many tables that are related to each other. By contrast, MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

5. What are primary keys? Why are they important?

  Your answer: Primary keys are unique identifiers that are required to distinguish individual records within a table. 

  Researched answer: Primary keys are unique identifiers that specify a particular row within a table in a relational database. Primary keys are essential because they allow the program to identify which row is the correct selection when multiple similar entries exist. Once an entry of data gets deleted, the key also gets deleted and does not get reassigned to another record.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: In Rails, a RESTful route provides mapping between HTTP verbs and URLs to controller actions. Each action also maps to a specific CRUD operation within a database.

2. JSON: JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. JSON is commonly used for transmitting data in web applications.

3. ERB: ERB (Embedded RuBy) is a feature of Ruby that allows you to generate text from templates. The templates combine plain text with Ruby code for variable substitution and flow control, thereby making them easier to write and maintain.

4. Params: In Ruby, Params is a hash. It refers to the collection of data received by the application during a particular HTTP request. The data may be retrieved from different sources to include links, form submissions, and redirects.

5. API: An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software.
