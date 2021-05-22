import React from 'react';

export default function Home() {
  return (
    <div className="content">
      <div
        className="w3-container w3-red w3-center"
        style={{ padding: '128px 16px'}}
      >
        <h1 className="w3-margin w3-jumbo"  style={{
          background: '-webkit-linear-gradient(#eb543b, #fbd51c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Upnotes</h1>
        <h2 className="w3-xlarge" style={{color: 'black'}}>Automatically organize your software engineering notes.</h2>
        <a href="https://github.com/upnotes-io/upnotes-website/releases/latest" className="w3-button w3-black w3-padding-large w3-large w3-margin-top">
          <span> Download </span>
        </a>
      </div>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird">
            <h5 className="w3-padding-32">
              Complete your git history by making notes part of your git history. 
              <br/>
              Investigating and taking notes is big part of any programming task so why not keep it in the same repository.
          </h5>

            <p className="w3-text-grey">
              <p>Orgnaze your notes in following 5 categories for each of your git repository.</p>
              <li> <a href="#shared-tasks"> Tasks  </a></li>
              <li> <a href="#your-shared-wiki">Wiki </a></li>
              <li> <a href="#my-tasks">My tasks </a></li>
              <li> <a href="#my-wiki">My wiki </a> </li>
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
            <img src={`assets/shared-tasks.png`} height={450} alt={`shared tasks`} />
          </div>

          <div className="detail-content-container">
            <h1>Tasks</h1>
            <h5 className="w3-padding-32">
              All your task is automatically created based on your git branch and stored in the repository itself. 
          </h5>

            <p className="w3-text-grey">
              Your notes for any task should be part of the repository and available for the whole team. 
            </p>
          </div>
        </div>
      </div>
      <div id={'my-tasks'} className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="detail-content-container">
            <h1>My tasks</h1>
            <h5 className="w3-padding-32">
              Your private space for notes. Create your tasks Ex - production investigation, etc
            </h5>
            <p className="w3-text-grey">
              Your personal area for notes. Things can move from my tasks to common tasks if required.
            </p>
          </div>

          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`my tasks `} />
          </div>
        </div>
      </div>

      <div id={'my-wiki'} className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`my wiki`} />
          </div>

          <div className="detail-content-container">
            <h1>My wiki</h1>
            <h5 className="w3-padding-32">
              Your personal wiki like commands to remember Database queries, etc
          </h5>

            <p className="w3-text-grey">
              Anything you want to come back to. Database queries, cheat sheets etc. 
            </p>
          </div>
        </div>
      </div>
      <div id={'your-shared-wiki'} className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="detail-content-container">
            <h1>Wiki</h1>
            <h5 className="w3-padding-32">
              your team wiki’s all the common script, commands and queries
          </h5>
            <p className="w3-text-grey">
              Wiki is a natual progression of notes. Write documentation, and wiki right from your notes app and share it with your team by commiting it to repository.
            </p>
          </div>

          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`your shared wiki`} />
          </div>
        </div>
      </div>

      <div id={'meetings'} className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content detail-container" >
          <div className="w3-center detail-image-container">
            <img src={`assets/shared-tasks.png`} height={450} alt={`meetings`} />
          </div>

          <div className="detail-content-container">
            <h1>Meetings</h1>
            <h5 className="w3-padding-32">
              Your meeting notes
          </h5>

            <p className="w3-text-grey">
              Just like your code, your meeting notes can also live in the repository. Take your meeting notes in the upnotes and share it with your team by commiting it to git repo.   
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
