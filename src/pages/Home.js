import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindows, faApple, faLinux} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  let [tag, setTag] = useState(null);

  let [downloadHref, setDownloadHref] = useState("#download");
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
      if (navigator.appVersion.indexOf("Win") !== -1) setDownloadHref(getWindowsHref(tag));
      if (navigator.appVersion.indexOf("Mac") !== -1) setDownloadHref(getMacHref(tag));
      if (navigator.appVersion.indexOf("X11") !== -1) setDownloadHref(getLinuxHref(tag));
      if (navigator.appVersion.indexOf("Linux") !== -1) setDownloadHref(getLinuxHref(tag));
    }
    getTag();
  }, [tag]);



  return (
    <div className="content">
      <div
        className="w3-container w3-center"
        style={{ padding: '128px 16px'}}
      >
        <h1 className="w3-margin w3-jumbo"  style={{
          background: '-webkit-linear-gradient(#eb543b, #fbd51c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Upnotes</h1>
        <h2 className="w3-xlarge" style={{color: 'black'}}>Automatically organize your software engineering notes.</h2>
        <a href={downloadHref} className="w3-button w3-text-black w3-padding-large w3-large w3-margin-top">
          <FontAwesomeIcon icon={getOSIcon()} />
          <span> Download </span>
        </a>
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
                <div><a href={getWindowsHref()}><FontAwesomeIcon icon={faWindows} /> <span>Windows</span></a></div>
                <div><a href={getLinuxHref()}><FontAwesomeIcon icon={faLinux} /> <span>Linux</span></a></div>
                <div><a href={getMacHref()}><FontAwesomeIcon icon={faApple} /> <span>Mac</span></a></div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}
