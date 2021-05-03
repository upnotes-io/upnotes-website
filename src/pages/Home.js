import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="content">
      <div
        className="w3-container w3-red w3-center"
        style={{ padding: '128px 16px' }}
      >
        <h1 className="w3-margin w3-jumbo">Upnotes</h1>
        <h2 className="w3-xlarge">Automatically organize your software engineering notes.</h2>
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">
          <span> Download </span>
        </button>
      </div>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird">
            <h1>The idea</h1>
            <h5 className="w3-padding-32">
              We believe notes should be part of the workflow
              So we have created five notes categories for your git repository.
          </h5>

            <p className="w3-text-grey">
              <li> <a href="#shared-tasks"> Shared tasks  </a></li>
              <li> <a href="#my-tasks">My tasks </a></li>
              <li> <a href="#my-wiki">My wiki </a> </li>
              <li> <a href="#your-shared-wiki">Your Shared wiki </a></li>
              <li> <a href="#meetings">Meetings </a></li>
            </p>
          </div>

          <div className="w3-third w3-center">
            <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
          </div>
        </div>
      </div>

      <div id={"shared-tasks"} className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks image`} />
          </div>

          <div className="detail-content-container">
            <h1>Shared tasks</h1>
            <h5 className="w3-padding-32">
              All your task is automatically created based on your git branch
          </h5>

            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div id={'my-tasks'} className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="detail-content-container">
            <h1>My tasks</h1>
            <h5 className="w3-padding-32">
              Create your tasks Ex - production investigation, etc
            </h5>
            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks image`} />
          </div>
        </div>
      </div>

      <div id={'my-wiki'} className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks image`} />
          </div>

          <div className="detail-content-container">
            <h1>My wiki</h1>
            <h5 className="w3-padding-32">
              Your personal wiki like commands to remember Database queries, etc
          </h5>

            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
          </p>
          </div>
        </div>
      </div>
      <div id={'your-shared-wiki'} className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="detail-content-container">
            <h1>Your Shared wiki</h1>
            <h5 className="w3-padding-32">
              your team wiki’s all the common script, commands and queries
          </h5>
            <p className="w3-text-grey">
              <li> <a href="#shared-task"> Shared tasks - All your task is automatically created based on your git branch </a></li>
              <li> <a href="#my-task">My tasks - Create your tasks Ex - production investigation, etc </a></li>
              <li> <a href="#my-wiki">My wiki - Your personal wiki like commands to remember Database queries, etc </a> </li>
              <li> <a href="#your-shared-wifi">Your Shared wiki -  </a></li>
              <li> <a href="#meeting">Meetings -   </a></li>
            </p>
          </div>

          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks image`} />
          </div>
        </div>
      </div>

      <div id={'meetings'} className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks image`} />
          </div>

          <div className="detail-content-container">
            <h1>Meetings</h1>
            <h5 className="w3-padding-32">
              Your meeting notes
          </h5>

            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
          </p>
          </div>
        </div>
      </div>
      <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
      </div>
    </div>
  )
}
