import React from 'react';

const Blog = () => {
    return (
      <div className="card-body items-center text-center">
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Improving Performance of React Application
          </div>
          <div className="collapse-content">
            <p>
              Improving react application,we have to write efficient code according to the documentation of React library.For an example we have to  handle uncontrolled inputs in a react application.Otherwise uncontrolled input component can freeze the total application.Handling overendering issue,can really improve the perfomance of a react application,Like if we load data from an api,it renders multiple times inside useEffect,but if we provide a dependency list inside,it can prohabbit the overrendering.Also Filtering props can provides us a better performance.
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Different Ways to Manage State in React JS
          </div>
          <div className="collapse-content">
            <p>
              There are four types of state management in React.They are Local
              State,Global State,Server State and URL State. Among them most
              used state management is Local state,local State usees react
              useState().useState() is a built in hook provided by react
              library. Other state managements are also used in react
              application,for an example logged in users information stored
              globally in state.
            </p>
          </div>
        </div>

        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Why we do not set state directly
          </div>
          <div className="collapse-content">
            <p>
              In react state management we use react state useState() to
              initialize our states and update our states in the later of our
              application.But the state update is not done directly in react use
              state hook.React state hook provides a buildin method to update
              current state.If we update state directly it will not update our
              state,it will keep the direct update state pending,and will update
              when the render method work finished.Also if we update directly,it
              will replace our initialized state.
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Finding a product from an Array by Name
          </div>
          <div className="collapse-content">
            <p>
              If we want to find a product by filtering product name,we can use
              a build in method provuded by javascript. To search a product we
              can use find() method. For an example we have an array named
              names=["Samiul","Daniel","Yeamin"] and we have to search "Daniel".
              we can use names.find(element arrow- element=="Daniel") the method will
              return "Daniel"{" "}
            </p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Unit testing
          </div>
          <div className="collapse-content">
            <p>
              Unit testing is to check and test the components in the application renders perfectly,and provides desired output.The codes written for unit test verifies that the application code works against our expectation.unit tests are important in building react application,as it shows the faults or the application is  efficient or not,and also it can help us to implement the faulty features of our application during development. 
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;