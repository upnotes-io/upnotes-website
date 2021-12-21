// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga';
import FeatureTemplate from 'components/FeatureTemplate';
import { Modal, Box} from '@material-ui/core';
import SubscribeForm from "../components/SubscribeForm";

const style = {
  position: 'absolute',
  top: '50%',
  left: '49%',
  transform: 'translate(-50%, -50%)',
  width: '96%',
  backgroundColor: '#fff',
  border: '1px solid black',
  boxShadow: 24,
};


export default function Home() {
  let [tag, setTag] = useState(null);

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpen = () => setOpenModel(true);
  const handleClose = () => setOpenModel(false);

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
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-Setup-${tag}.exe`;
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
            <h2 className="text-5xl tracking-wider text-center pt-14">A open standard notes app for software developers</h2>
            <p className="text-xl tracking-wide text-center pt-6 leading-8">You just focus on writing notes. We are going to organize all your notebooks based on your repositories and all the notes are powered with git.</p>
            <div className="hidden md:block">
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
            <div className="sm:hidden ">
              <div className="flex justify-center pt-8 m-2">
                <button
                  style={{ backgroundColor: "#f16f3d" }}
                  onClick={handleOpen}
                  className="hover:bg-orange-400 text-white text-lg font-bold py-3 px-10 rounded"
                >
                  Get Dowanload link on Mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureTemplate
        title="Auto organized notes"
        description="You just need to configure your workplace directory. Once you done that. We will create 3 notebooks ( git tasks, tasks and wiki ) for each repository."
        backgroundColor="#fff"
        imageSrc={`${process.env.PUBLIC_URL}/assets/current-branch-screen.png`}
      />
      <FeatureTemplate
        title="Hassle free ui and todo support"
        description="Simple and state forword ui. We have just notebooks at first place then notes and then Editor. No add buttons just write note name to text box and enter to add new note."
        backgroundColor="antiquewhite"
        flexDirection="flex-row-reverse"
        imageSrc={`${process.env.PUBLIC_URL}/assets/todo.png`}
      />
      <FeatureTemplate
        title="Markdown first, Code support and powered with git."
        description="All your notes are saved in markdown format. We create a notes dir in your selected location and save every note in markdown format. We init git to notes directory and do commits periodically to make sure you can go back in history and do not lose anything"
        backgroundColor="#fff"
        imageSrc={`${process.env.PUBLIC_URL}/assets/code-example.png`}
      />
      <div className="flex justify-center items-center" style={{ background: 'antiquewhite' }}>
        <div className="max-w-screen-lg pt-24 pb-16" >
          <iframe
            width="95%"
            title="Upnotes demo"
            src="https://www.youtube.com/embed/Jce6M9PlPyM?&mute=1&vq=hd1080"
          >
          </iframe>
        </div>
      </div>
      <div className="p-20 hidden md:block" style={{ background: 'antiquewhite', color: '#50abd7' }}>
        <div id={'download'} className="max-w-screen-lg mx-auto pt-8">
          {tag == null ? <div><p>Getting latest version...</p></div> : <div>

            <div className="flex justify-between text-xl">
              <div><ReactGA.OutboundLink eventLabel="download-2-windows" to={getWindowsHref(tag)}><FontAwesomeIcon icon={faWindows} /> <span>Download Windows</span></ReactGA.OutboundLink></div>
              <div><ReactGA.OutboundLink eventLabel="download-2-linux" to={getLinuxHref(tag)}><FontAwesomeIcon icon={faLinux} /> <span>Download Linux</span></ReactGA.OutboundLink></div>
              <div><ReactGA.OutboundLink eventLabel="download-2-mac" to={getMacHref(tag)}><FontAwesomeIcon icon={faApple} /> <span>Download Mac</span></ReactGA.OutboundLink></div>
              <div><ReactGA.OutboundLink eventLabel="more-download-options" target='_blank' to="https://github.com/upnotes-io/upnotes-website/releases"> <span>More download options</span></ReactGA.OutboundLink></div>
            </div>
          </div>
          }
        </div>

        <div className="flex justify-center max-w-screen-lg mx-auto pt-12 pl-12">
          <a rel="noreferrer" href='https://www.remote.tools/upnotes/product?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-featured' target='_blank'><img src='https://remote-tools-products.s3-us-west-2.amazonaws.com/rt_badge/2/Light.svg' alt='Upnotes' styles='width: 250px; height: 54px;' width='250px' height='54px' /></a>
        </div>
      </div>
      <div>
        <Modal
          open={openModel}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={style} className='p-2'>
            <SubscribeForm title="Your are on a mobile device. Enter your email to get the download link for your PC"/>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
