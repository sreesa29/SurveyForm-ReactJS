import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="form">
        <header>
          <h1 id="title">freeCodeCamp Survey Form</h1>
          <p id="description">
            Thank you for taking the time to help us <br /> improve the platform
          </p>
        </header>
        <form id="survey-form">
          <label htmlFor="name" id="name-label">
            Name
          </label>
          <input id="name" type="text" placeholder="Enter your name" required />
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="number" id="number-label">
            Age
          </label>
          <input
            id="number"
            type="number"
            placeholder="Enter your age"
            min="15"
            max="120"
            required
          />
          <label htmlFor="dropdown" id="dropdown-label">
            Which option best describes your current role?
          </label>
          <select id="dropdown" defaultValue="" required>
            <option disabled value="">
              Select current role
            </option>
            <option value="student"> Student</option>
            <option value="Full Time Job"> Full Time Job</option>
            <option value="Full Time Learner"> Full Time Learner</option>
            <option value="Prefer Not to say"> Prefer not to say</option>
            <option value="Other"> Other</option>
          </select>
          <label htmlFor="radiobutton" id="radio-label">
            Would you recommend freeCodeCamp to a friend
          </label>
          <div className="radio-input">
            <input
              type="radio"
              name="recommend"
              className="recommend"
              value="Definetly"
            />
            <label>Definetly</label>
          </div>
          <div className="radio-input">
            <input
              type="radio"
              className="recommend"
              name="recommend"
              value="Maybe"
            />
            <label>Maybe</label>
          </div>
          <div className="radio-input">
            <input
              type="radio"
              className="recommend"
              name="recommend"
              value="Sure"
            />
            <label>Sure</label>
          </div>
          <label htmlFor="dropdown1" id="dropdown-label">
            What is your favorite feature of freeCodeCamp?
          </label>
          <select id="dropdown1" defaultValue="" required>
            <option disabled value="">
              Select an options
            </option>
            <option value="Challenges"> Challenges</option>
            <option value="Projects"> Projects</option>
            <option value="Community"> Community</option>
            <option value="Open Source"> Open Source</option>
          </select>
          <label htmlFor="checkbox" id="checkbox-label">
            What would you like to see improved?
            <span className="secondp">(Check all that apply)</span>
          </label>
          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="Front-end Projects"
            />
            <label>Front End Projects</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              type="checkbox"
              className="front"
              name="improved"
              value="Back-end Projects"
            />
            <label>Back End Projects</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              type="checkbox"
              className="front"
              name="improved"
              value="Data Visualisation"
            />
            <label>Data Visualisation</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              type="checkbox"
              className="front"
              name="improved"
              value="Challenges"
            />
            <label>Challenges</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              type="checkbox"
              className="front"
              name="improved"
              value="Open Source Community"
            />
            <label>Open Source Community</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="Gitter help rooms"
            />
            <label>Gitter help rooms</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="Videos"
            />
            <label>Videos</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="City Meetups"
            />
            <label>City Meetups</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="Wiki"
            />
            <label>Wiki</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              className="front"
              type="checkbox"
              name="improved"
              value="Forum"
            />
            <label>Forum</label>
          </div>
          <br />

          <div className="radio-input">
            <input
              type="checkbox"
              className="front11"
              name="improved"
              value="Additional Courses"
            />
            <label>Additional Courses</label>
          </div>
          <br />

          <label htmlFor="checkbox" id="textarea-label">
            Any comments or suggestions?
          </label>
          <textarea
            name="textarea"
            placeholder="Enter your comments here..."
          ></textarea>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div id="footer">Designed by Sree Sankar</div>
    </div>
  );
}
