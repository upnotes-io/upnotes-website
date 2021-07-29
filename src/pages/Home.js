import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindows, faApple, faLinux} from '@fortawesome/free-brands-svg-icons';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ReactGA from 'react-ga';

export default function Home() {
  let [tag, setTag] = useState(null);

  let [downloadHref, setDownloadHref] = useState("#download");
  let [os, setOs] = useState("unknown");
  function getOSIcon() {
    if (downloadHref.endsWith(".exe")) {
      return faWindows;
    } else if (downloadHref.endsWith(".AppImage")) {
      return faLinux;
    } else {
      return faApple;
    }
  }
  function getWindowsHref(tag) {
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-${tag}.exe`;
  }

  function getLinuxHref(tag) {
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-${tag}.AppImage`;
  }

  function getMacHref(tag) {
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-${tag}.dmg`;
  }
  useEffect(() => {
    const getTag = async () => {
      // https://docs.github.com/en/rest/reference/repos#list-repository-tags
      const response = await fetch('https://api.github.com/repos/upnotes-io/upnotes-website/tags');
      const tags = await response.json(); //extract JSON from the http response
      setTag(tags[0].name.substr(1)); // Ex: v1.0.3-beta but download link require without v.
      if (navigator.appVersion.indexOf("Win") !== -1) {
        setDownloadHref(getWindowsHref(tag));
        setOs("windows");
      }
      if (navigator.appVersion.indexOf("Mac") !== -1) {
        setDownloadHref(getMacHref(tag));
        setOs("mac");
      }
      if (navigator.appVersion.indexOf("X11") !== -1) {
        setDownloadHref(getLinuxHref(tag));
        setOs("linux");
      }
      if (navigator.appVersion.indexOf("Linux") !== -1) {
        setDownloadHref(getLinuxHref(tag));
        setOs("linux");
      }
    }
    getTag();
  }, [tag]);

  const slideImages = [
    "/assets/onboarding.png",
    "/assets/note-view.png",
  ];

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: true,
    infinite: false,
    easing: "ease",
    indicators: true,
  };

  return (
    <div className="pb-16 pl-8 pr-8" style={{background: 'antiquewhite'}} >
      <div className="max-w-screen-lg mx-auto pt-24">
        <div className="mx-auto" style={{height: '600px'}}>
          <Slide {...properties}>

            {slideImages.map((each, index) => (
                <div className="each-slide container flex justify-center">
                  <img style={{ objectFit: 'cover', height: '600px'}} src={slideImages[index]} alt="slide images"/>
                </div>
            ))}
          </Slide>
        </div>
        <h2 className="text-lg text-center pt-8" style={{color: 'black'}}>Automatically organize your software engineering notes.</h2>
        <div className="flex justify-center pt-8">
          <ReactGA.OutboundLink
              style={{backgroundColor: "#f16f3d"}}
              className="hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 rounded"
              eventLabel={`download-1-${os}`}
              to={downloadHref}
          >
            <FontAwesomeIcon icon={getOSIcon()} />
            <span> Download </span>
          </ReactGA.OutboundLink>
        </div>
      </div>
      <article className="pt-8 max-w-screen-lg text-lg mx-auto prose lg:prose-xl">
        <div>
        <h2 id="why-another-notes-app">Why another notes app?</h2>
        <p>Developers spent lot of time investigating and figuring out how something should be done and writing final code that becomes part of your repository is just small part of the whole process. Over time I have realised that having good organisation of notes is critical for long term productivity.</p>
        <p>There are tons of notes apps in the market with lot&#39;s of different features but none of them are specifically designed for software engineers.</p>

        <p>Upnotes aims to specifically design a high quality, private notes app for software engineers. <br/> Upnotes is going to have tight integration with all the tools used by software engineers. We have started with git as most of us use git for our version control. </p>
        <ol >
          <li className="font-semibold">
            We automatically create/organised notes by your repositories and auto create a new note based on your current git branch.
          </li>
          <li>
            Documentation should be a natural extension of notes taken by you for your future self, that&#39;s why we have a specific area for you to write notes that should act like wiki. Eventually these notes can be shared with everyone once they reach certain maturity. Most of the projects have poor documentation and approaching documentation from the point of view of notes can solve this problem.
          </li>
          <li>
            We want to make notes part of your git history so that you have the full context about the past. We will be building functionality to auto share your notes in your git repositories
          </li>
        </ol>

        <h4 id="current-benefits-">Current features:</h4>
        <p>Upnotes is just starting with few unique benefits like </p>
        <ol >
          <li>
            Creating note using your git branch. This allows you to have consistent notes for each of your task.
          </li>
          <li>
            Automatically created directories for organising your notes based on best practices.
          </li>
          <li>
            Private notes that are version control using git
          </li>
          <li>
            Github flavoured and industry standard markdown format with WYSIWYG and markdown support
          </li>
        </ol>

        <h4  id="upcoming-features">Upcoming features:</h4>
          <ol >
            <li>
              First class support for managing quick todos
            </li>
            <li>
              Auto sync of local git repo with cloud providers (Github, google drive etc)
            </li>
            <li>
              Share notes with team using git repo using markdown
            </li>
            <li>
              First class support in markdown to create diagrams
            </li>
          </ol>
            <p>
              <span>Not ready to download it yet? We are going to add many more features and improvements...
                Please join our </span>
              <ReactGA.OutboundLink
                  className="font-bold"
                  style={{color: "#f16f3d"}}
                eventLabel={`discord_chat`}
                to="https://discord.gg/ATZTMeyWsW"
            >
              discord chat
            </ReactGA.OutboundLink>
              <span> for updates</span>
            </p>

        </div>
      </article>

      <div id={'download'} className="max-w-screen-lg mx-auto pt-8">
        {tag == null ? <div><p>Getting latest version...</p></div> :
            <div className="flex justify-between text-xl">
              <div><ReactGA.OutboundLink eventLabel="download-2-windows" to={getWindowsHref(tag)}><FontAwesomeIcon icon={faWindows} /> <span>Windows</span></ReactGA.OutboundLink></div>
              <div><ReactGA.OutboundLink eventLabel="download-2-linux" to={getLinuxHref(tag)}><FontAwesomeIcon icon={faLinux} /> <span>Linux</span></ReactGA.OutboundLink></div>
              <div><ReactGA.OutboundLink eventLabel="download-2-mac" to={getMacHref(tag)}><FontAwesomeIcon icon={faApple} /> <span>Mac</span></ReactGA.OutboundLink></div>
            </div>
        }
      </div>
    </div>
  )
}
