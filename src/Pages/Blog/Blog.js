import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='container py-5'>
            <h3 className='text-primary fw-semibold mb-3 text-center'>Frequently Asked Questions & Answer</h3>
        <div className='py-4'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Question-1:- what is cors?</Accordion.Header>
            <Accordion.Body>
            
            <p className='text-start'><strong>Cross-origin resource sharing</strong> is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari.CORS is not going to prevent users from requesting or downloading resources. You can still make a successful request for a resource using apps like curl, Insomnia, or Postman. CORS is only going to prevent the browser from accessing the resource if the CORS policy does not allow it.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question-2:- Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'>Firebase provides detailed documentation and cross-platform SDKs to help build and ship apps on Android, iOS, the web, C++, and Unity.Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development.</p>
          <p>
          Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
          Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
          The most common authentication methods are Password Authentication Protocol (PAP), Authentication Token, Symmetric-Key Authentication, and Biometric Authentication.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Question-3:- How does the private route work?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'>The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).The Route component from react-router is public by default but we can build upon it to make it restricted. We can add a restricted prop with a default value of false and use the condition if the user is authenticated and the route is restricted, then we redirect the user back to the Dashboard component.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question-4:- What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
          </p>
          <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </div>
    );
};

export default Blog;