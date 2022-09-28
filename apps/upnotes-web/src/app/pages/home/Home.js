// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindows,
  faApple,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga';
import FeatureTemplate from './FeatureTemplate';
import { Modal, Box } from '@material-ui/core';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import Header from './Header';

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

  let [downloadHref, setDownloadHref] = useState('#download');
  let [os, setOs] = useState('unknown');
  function getOSIcon() {
    if (downloadHref.endsWith('.exe')) {
      return faWindows;
    } else if (downloadHref.endsWith('.AppImage')) {
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
      const response = await fetch(
        'https://api.github.com/repos/upnotes-io/upnotes-website/tags'
      );
      const tags = await response.json(); //extract JSON from the http response
      setTag(tags[0].name.substr(1)); // Ex: v1.0.3-beta but download link require without v.
      if (navigator.appVersion.indexOf('Win') !== -1) {
        setDownloadHref(getWindowsHref(tag));
        setOs('windows');
      }
      if (navigator.appVersion.indexOf('Mac') !== -1) {
        setDownloadHref(getMacHref(tag));
        setOs('mac');
      }
      if (navigator.appVersion.indexOf('X11') !== -1) {
        setDownloadHref(getLinuxHref(tag));
        setOs('linux');
      }
      if (navigator.appVersion.indexOf('Linux') !== -1) {
        setDownloadHref(getLinuxHref(tag));
        setOs('linux');
      }
    };
    getTag();
  }, [tag]);

  return (
    <>
      <Header />
      <div>
        <div
          className="flex justify-center items-center"
          style={{ background: '#fff' }}
        >
          <div className="max-w-screen-lg pt-24 pb-16">
            <div className="mx-1">
              <h2 className="text-3xl sm:text-5xl tracking-wider text-center pt-14">
                A notes app for software developers
              </h2>
              <p className="text-md sm:text-lg tracking-wide text-center pt-6 leading-8">
                Developer focused with editors like VS code, Markdown, Diff, Formatter etc.
              </p>
              <div className="hidden md:block">
                <div className="flex justify-center pt-8">
                  <ReactGA.OutboundLink
                    style={{ backgroundColor: '#f16f3d' }}
                    className="hover:bg-orange-400 text-white text-xl font-bold py-3 px-20 border-b-4 rounded"
                    eventLabel={`download-1-${os}`}
                    to={downloadHref}
                  >
                    <FontAwesomeIcon icon={getOSIcon()} />
                    <span> Download for free </span>
                  </ReactGA.OutboundLink>
                </div>
                <div className="flex justify-center pt-8">
                  <p>
                    Compatible with{' '}
                    <a className="font-bold" href="https://gitjournal.io/">
                      GitJournal
                    </a>{' '}
                    for iOS and android support.
                  </p>
                </div>
              </div>
              <div className="sm:hidden ">
                <div className="flex justify-center pt-8 m-2">
                  <button
                    style={{ backgroundColor: '#f16f3d' }}
                    onClick={handleOpen}
                    className="hover:bg-orange-400 text-white text-md font-bold py-3 px-10 rounded"
                  >
                    Get Download link on Mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureTemplate
          title="Powered with editors like VS code, Markdown, Diff, Formatter etc"
          description="We believe that developers need more then just plane editor to capture the ideas and the context for any task. That's why we have support for multiple editors."
          backgroundColor="antiquewhite"
          flexDirection="flex-row-reverse"
          imageSrc={`assets/editor-types.png`}
        />
        <FeatureTemplate
          title="Full hierarchy support for notes."
          description="You can create subpages inside any page."
          backgroundColor="#fff"
          flexDirection="flex-row-reverse"
          imageSrc={`assets/vscode-editor.png`}
        />
        <FeatureTemplate
          title="Powered with git."
          description="All your notes are saved in markdown format. We init git to notes directory and do commit periodically to make sure you can go back in history and do not lose anything"
          backgroundColor="antiquewhite"
          list={[
            'You just write your notes and we do commit your notes time to time',
            'No more worries of losing notes',
            'Sync your notes to github or gitlab because your notes only belongs you.',
          ]}
          imageSrc={`assets/github-sync.png`}
        />
        <FeatureTemplate
          title="Todo support"
          description="Simple todo list for each task. You can create a subpage with type todo editor."
          backgroundColor="#fff"
          imageSrc={`assets/todo-editor.png`}
        />
        <FeatureTemplate
          title="Diagram support using mermaid"
          description="Writing design docs becomes lot easier with diagram support. Generation of diagram and flowchart from text in a similar manner as markdown using mermaid. Real time editor to create mermaid diagrams."
          backgroundColor="antiquewhite"
          imageSrc={`assets/diagram.png`}
        />
        <FeatureTemplate
          title="GitJournal support for iOS and android"
          description="For quick access to your notes, we support GitJournal for iOS and android. You can use git sync to sync across mobile and your desktop."
          backgroundColor="#fff"
          imageSrc={`assets/gitjournal-feature-image.png`}
        />
        <div
          className="p-20 hidden md:block"
          style={{ background: 'antiquewhite', color: '#50abd7' }}
        >
          <div id={'download'} className="max-w-screen-lg mx-auto pt-8">
            {tag == null ? (
              <div>
                <p>Getting latest version...</p>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-xl">
                  <div>
                    <ReactGA.OutboundLink
                      eventLabel="download-2-windows"
                      to={getWindowsHref(tag)}
                    >
                      <FontAwesomeIcon icon={faWindows} /> <span>Download</span>
                    </ReactGA.OutboundLink>
                  </div>
                  <div>
                    <ReactGA.OutboundLink
                      eventLabel="download-2-linux"
                      to={getLinuxHref(tag)}
                    >
                      <FontAwesomeIcon icon={faLinux} /> <span>Download</span>
                    </ReactGA.OutboundLink>
                  </div>
                  <div>
                    <ReactGA.OutboundLink
                      eventLabel="download-2-snapstore"
                      to="https://snapcraft.io/upnotes"
                    >
                      {' '}
                      <FontAwesomeIcon icon={faLinux} /> <span>Snap store</span>
                    </ReactGA.OutboundLink>
                  </div>
                  <div>
                    <ReactGA.OutboundLink
                      eventLabel="download-2-mac"
                      to={getMacHref(tag)}
                    >
                      <FontAwesomeIcon icon={faApple} /> <span>Download</span>
                    </ReactGA.OutboundLink>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center max-w-screen-lg mx-auto pt-12 pl-12">
            <a
              rel="noreferrer"
              href="https://www.remote.tools/upnotes/product?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-featured"
              target="_blank"
            >
              <img
                src="https://remote-tools-products.s3-us-west-2.amazonaws.com/rt_badge/2/Light.svg"
                alt="Upnotes"
                styles="width: 250px; height: 54px;"
                width="250px"
                height="54px"
              />
            </a>
          </div>
        </div>
        <div>
          <Modal
            open={openModel}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box style={style} className="p-2">
              <SubscribeForm title="Your are on a mobile device. Enter your email to get the download link for your PC" />
            </Box>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
}
