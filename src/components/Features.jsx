import React from 'react';
import meetingShowScreenshot from '../images/meeting-show.png';
import meetingEditScreenshot from '../images/meeting-edit.png';
import directsTeamScreenshot from '../images/directs-by-team.png';
import followUpEditScreenshot from '../images/followUp-edit.png';

const Features = () => {
  return (
    <div className="container features">
      <h1>Features</h1>
      <h2>Things to make tracking 1 on 1s easier</h2>
      <div className="feature">
        <div className="graphic-block">
          <img
            className="screen-shot"
            src={meetingShowScreenshot}
            alt="meeting screenshot"
          />
          <img
            className="screen-shot"
            src={meetingEditScreenshot}
            alt="meeting edit screenshot"
          />
        </div>
        <div className="content-block">
          <h2>Meetings</h2>
          <ul>
            <li>Two sections for notes</li>
            <li>Includes sample questions you can ask</li>
            <li>Links to follow up items</li>
          </ul>
        </div>
      </div>
      <div className="feature">
        <div className="content-block">
          <h2>Team members</h2>
          <ul>
            <li>List of direct reports</li>
            <li>Categorize by color</li>
            <li>Group into teams</li>
          </ul>
        </div>
        <div className="graphic-block">
          <img
            className="screen-shot"
            src={directsTeamScreenshot}
            alt="directs team screenshot"
          />
        </div>
      </div>
      <div className="feature">
        <div className="graphic-block">
          <img
            className="screen-shot"
            src={followUpEditScreenshot}
            alt="followUp edit screenshot"
          />
        </div>
        <div className="content-block">
          <h2>Follow Up Items</h2>
          <ul>
            <li>Linked to directs and meetings</li>
            <li>Due dates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
