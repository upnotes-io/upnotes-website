import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga';
import FeatureTemplate from 'components/FeatureTemplate';

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
    <div>
      <div className="flex justify-center items-center" style={{ background: 'antiquewhite' }}>
        <div className="max-w-screen-lg pt-24 pb-16"  >
          <div className=" mx-auto ">
            <h2 className="text-5xl tracking-wider text-center pt-14">Notes app for software developers</h2>
            <p className="text-xl tracking-wide text-center pt-6 leading-8">You just focus on writing notes. We are going to organize all your notebooks based on your repositories and all the notes are powered with git.</p>
            <div className="flex justify-center pt-8">
              <ReactGA.OutboundLink
                style={{ backgroundColor: "#f16f3d" }}
                className="hover:bg-orange-400 text-white text-xl font-bold py-3 px-20 border-b-4 rounded"
                eventLabel={`download-1-${os}`}
                to={downloadHref}
              >
                <FontAwesomeIcon icon={getOSIcon()} />
                <span> Download for free </span>
              </ReactGA.OutboundLink>
            </div>
          </div>
          <div className="mx-auto w-full justify-center md:block hidden pt-10" style={{ height: '650px', display: 'flex' }}>
            <iframe
              width="95%"
              title="Upnotes demo"
              src="https://www.youtube.com/embed/Jce6M9PlPyM?&mute=1&vq=hd1080"
            >
            </iframe>
          </div>
        </div>
      </div>
      <FeatureTemplate
        title="Auto organized notes"
        description="You just need to configure your workplace directory. Once you done that. We will create 3 notebooks ( git tasks, tasks and wiki ) for each repository."
        list={['git tasks - Magically creates note for your current branch.', 'tasks - Any other task related notes.', ' wiki - Your wiki, all the common scripts, commands and sql queries etc.']}
        backgroundColor="rgb(218 214 251)"
        imageSrc={`${process.env.PUBLIC_URL}/assets/current-branch-screen.png`}
      />
      <FeatureTemplate
        title="Markdown first and code support."
        description="All your notes are saved in markdown format."
        list={['git tasks - Magically creates note for your current branch.', 'tasks - Any other task related notes.', ' wiki - Your wiki, all the common scripts, commands and sql queries etc.']}
        backgroundColor="rgb(218 214 100)"
        flexDirection="flex-row-reverse"
        imageSrc={`${process.env.PUBLIC_URL}/assets/code-example.png`}
      />
      <div className=" p-20" style={{ background: 'rgb(249, 178, 50)' }}>
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
          <a rel="noreferrer" href='https://www.remote.tools/upnotes/product?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-featured' target='_blank'><img src='https://remote-tools-products.s3-us-west-2.amazonaws.com/rt_badge/2/Light.svg' alt='Upnotes' styles='width: 250px; height: 54px;' width='250px' height='54px' /></a>
        </div>
      </div>  
    </div>
  )
}
