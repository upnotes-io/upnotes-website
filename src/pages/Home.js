import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindows, faApple, faLinux} from '@fortawesome/free-brands-svg-icons';
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

  return (
    <div className="pb-16 pl-8 pr-8" style={{background: 'antiquewhite'}} >
      <div className="max-w-screen-lg mx-auto pt-24">
        <div className="mx-auto w-full justify-center md:block hidden" style={{height: '560px', display: 'flex'}}>
          <iframe width="87%" height="100%" src="https://www.youtube.com/embed/Jce6M9PlPyM?autoplay=1&mute=1&loop=1&vq=hd1080&playlist=Jce6M9PlPyM">
          </iframe>
        </div>
        <h2 className="text-lg text-center pt-8" style={{color: 'black'}}>A markdown first notes app for coders</h2>
        <h4 className="text-sm text-center pt-2" style={{color: 'black'}}>Because your notes belong to you</h4>
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
            First class support for managing quick todos
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
              discord chat and tell us what you need in a notes app
              </ReactGA.OutboundLink>

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

      <div className="flex justify-center max-w-screen-lg mx-auto pt-12">
        <a rel="noreferrer" href='https://www.remote.tools/upnotes/product?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-featured' target='_blank'><img src='https://remote-tools-products.s3-us-west-2.amazonaws.com/rt_badge/2/Light.svg' alt='Upnotes' styles='width: 250px; height: 54px;' width='250px' height='54px'/></a>
      </div>
    </div>
  )
}
