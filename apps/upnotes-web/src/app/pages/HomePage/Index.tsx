
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';
import {
  faWindows,
  faApple,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [tag, setTag] = useState(null);
  const [text, setText] = useState('text');
  const [openModel, setOpenModel] = React.useState(false);
  const [downloadHref, setDownloadHref] = useState('#download');
  const [os, setOs] = useState('unknown');


  function getOSIcon() {
    if (downloadHref.endsWith('.exe')) {
      return faWindows;
    } else if (downloadHref.endsWith('.AppImage')) {
      return faLinux;
    } else {
      return faApple;
    }
  }
  const handleOpen = () => setOpenModel(true);

  useEffect(() => {
    window.addEventListener(
      'message',
      (ev: MessageEvent<{ type: string; message: string }>) => {
        console.log('Message: ' + ev);
      }
    );
  }, []);
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({ type: 'change', text }, '*');
    }
  }, [text]);

  function getWindowsHref(tag: any) {
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-Setup-${tag}.exe`;
  }

  function getLinuxHref(tag: any) {
    return `https://github.com/upnotes-io/upnotes-website/releases/download/v${tag}/Upnotes-${tag}.AppImage`;
  }

  function getMacHref(tag: any) {
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
    <div>
      <Header />
        <div
          className="flex justify-center items-center"
          style={{ background: '#fff' }}
        >
          <div className="max-w-screen-lg pt-24 pb-16">
            <div className="mx-1 flex flex-col items-center">
              <h2 className="text-3xl sm:text-3xl tracking-wider text-center pt-14" style={{maxWidth: '700px'}}>
                Capture context for each task
              </h2>
              <div >
                {/* <div className="flex justify-center pt-8 text-2xl">
                  <h4> Why upnotes?</h4>
                </div> */}
                <ul className="flex flex-col justify-center pt-8 list-disc sm:list-disc" >
                  <li className='m-2 ml-4'>Connect note-taking with your git repositories. It will create a new note automatically for the new branch. </li>
                  <li className='m-2 ml-4'>Create todos, diagrams, use tools like formatter in the context of your repository and branch.</li>
                  <li className='m-2 ml-4'>Free of cost, completely local with no serverside.</li>
                  <li className='m-2 ml-4'>Keep all your notes locally in a git repo and sync with any git server like github/gitlab etc.</li>
                </ul>
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
                {/* <div className="flex justify-center pt-8 text-md">
                  <h4> Still not sure?</h4>
                </div> */}
                <ul className="flex flex-col justify-center pt-8 list-disc " >
                  {/* <li><a href='' >See video </a></li> */}
                  <li className='m-2 ml-4'><Link to='feature-list' className='text-blue-500 underline' >See detailed features list</Link></li>
                  <li className='m-2 ml-4'><a className='text-blue-500 underline' target="blank" href='https://blog.upnotes.io/notes/2022/07/05/why-taking-good-notes-is-critical.html' > Read blog</a></li>
                  <li className='m-2 ml-4'><a className='text-blue-500 underline' href='https://discord.gg/ATZTMeyWsW' target="blank" >Ask question in discord</a></li>
                  {/* <li><a href='' >Schedule a meeting with us.</a></li> */}
                </ul>
                <div className="flex justify-center pt-8 text-2xl">
                  <h4> <a className='text-blue-500 underline' href="https://github.com/upnotes-io/upnotes-website/issues/10" target="blank">Don't like the app? Help us.</a></h4>
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
      <Footer />
    </div>
  );
}
