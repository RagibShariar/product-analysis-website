import React from 'react';

const Blogs = () => {
  return (
    <div className="container mt-5 ">
      <h4>What is Contex API ?</h4>
      <p className="mb-5">
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux. Context API is a (kind of) new feature added in
        version 16.3 of React that allows one to share state across the entire
        app (or part of it) lightly and with ease.
      </p>

      <h4>What is Semantic Tag in HTML5?</h4>
      <p className='mb-2'>
        Semantic tags clearly define the purpose of the HTML element. It also
        describes the type of content that the element should contain. For
        example, &lt;header&gt;, &lt;footer&gt;, &lt;article&gt; are considered
        semantic elements as they clearly describe their purpose and the type of
        content they should enclose. Semantic tags also help search engines to
        parse the webpage correctly and find accurate information. Thus, helping
        search engines to correctly index the page.
      </p>
    </div>
  );
};

export default Blogs;
