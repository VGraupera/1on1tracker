import React from 'react';

const AboutMe = () => {
  return (
    <div className="container about">
      <h1>About Me</h1>
      <h2>Hello! :)</h2>
      <p>I'm Vidal Graupera and I live in the SF Bay Area. I am originally from Miami. I work as an 
        engineering manager. And I am a product person. I love to create stuff. I am a serial app creator.</p>
      <p>I used to have a company that focussed on productivty apps. I am really interested in tools, 
        productivity hacks, and technology. I created 1on1tracker as a side project for my own use, 
        and also to learn about React, Redux, Firebase and Material UI. I've had a little help since 
        with this app, but I designed it and coded most of it.</p>
      <p>Vidal Graupera</p>
      <p>Feel free to get in touch with me for ANYTHING at <a href="mailto:vgraupera@gmail.com">vgraupera@gmail.com</a>!</p>
      <p>Some links:</p>
      <ul>
        <li>
          <a href="http://www.vidalgraupera.com">My personal site</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vidalgraupera/">My LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/vgraupera">My Twitter</a>
        </li>
        <li>
          Source code on <a href="https://github.com/VGraupera/1on1tracker">Github</a>
        </li>

      </ul>
    </div>
);
}

export default AboutMe;
