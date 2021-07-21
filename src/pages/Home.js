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
    <div className="content">
      <div
        className="w3-container w3-center"
        style={{ padding: '48px 16px', background: 'antiquewhite'}}
      >
        <div style={{height: '600px'}}>
          <Slide {...properties}>

            {slideImages.map((each, index) => (
                <div className="each-slide">
                  <img style={{ objectFit: 'cover', height: '600px'}} src={slideImages[index]} alt="slide images"/>
                </div>
            ))}
          </Slide>
        </div>

        <h2 className="w3-xlarge w3-padding-32" style={{color: 'black'}}>Automatically organize your software engineering notes.</h2>
        <ReactGA.OutboundLink
            className="w3-button w3-text-black w3-padding-large w3-large w3-margin-top"
            eventLabel={`download-1-${os}`}
            to={downloadHref}
        >
          <FontAwesomeIcon icon={getOSIcon()} />
          <span> Download </span>
        </ReactGA.OutboundLink>
      </div>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">

            <h5 >
              Features
            </h5>
            <p className="w3-text-black">
              <li> Automatically create notes based on your git branch</li>
              <li> Simple and powerful markdown editor with markdown and wysiwyg and split mode support </li>
              <li> Syntax highlight with support for most of the programming languages </li>
              <li> Git managed notes with all the notes automatically organized and saved in github flavored markdown format. </li>
              <li> Directories are organized based on day to day workflow for software engineer </li>
            </p>

        </div>
      </div>


      <div id={'download'} style={{'max-width': '1024px', margin: 'auto'}} className="w3-row-padding w3-padding-64 w3-container">
        {tag == null ? <div><p>Getting latest version...</p></div> :
            <div>
              <div style={{ display: 'flex',
                'flex-direction': 'row',
                'justify-content': 'space-between',
                'max-width': '1024px',
                'margin': 'auto',
                'font-size': 'xx-large',
              }}>
                <div><ReactGA.OutboundLink eventLabel="download-2-windows" to={getWindowsHref(tag)}><FontAwesomeIcon icon={faWindows} /> <span>Windows</span></ReactGA.OutboundLink></div>
                <div><ReactGA.OutboundLink eventLabel="download-2-linux" to={getLinuxHref(tag)}><FontAwesomeIcon icon={faLinux} /> <span>Linux</span></ReactGA.OutboundLink></div>
                <div><ReactGA.OutboundLink eventLabel="download-2-mac" to={getMacHref(tag)}><FontAwesomeIcon icon={faApple} /> <span>Mac</span></ReactGA.OutboundLink></div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
