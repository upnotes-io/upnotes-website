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
      <div className="flex justify-center text-lg">
        <div >
            <h5 >
              Features
            </h5>
            <p>
              <li> Automatically create notes based on your git branch</li>
              <li> Simple and powerful markdown editor with markdown and wysiwyg and split mode support </li>
              <li> Syntax highlight with support for most of the programming languages </li>
              <li> Git managed notes with all the notes automatically organized and saved in github flavored markdown format. </li>
              <li> Directories are organized based on day to day workflow for software engineer </li>
            </p>

        </div>
      </div>


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
