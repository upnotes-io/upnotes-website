import React from 'react';
import SubscribeForm from '../app/pages/home/SubscribeForm';

const Footer = function () {
  return (
    <div
      className="pb-16 flex flex-col items-center "
      style={{ background: 'antiquewhite' }}
    >
      <div className="max-w-screen-lg w-full">
        <div className="w-full">
          <SubscribeForm />
        </div>
        <div className="w-full border p-0 m-0 border-black"> </div>
        <footer className="w-full flex justify-evenly pt-8 ">
          <div className="flex flex-col">
            <div className="pr-4">
              <a href="mailto:admin@upnotes.io">Contact us</a>
            </div>
            <div className="pr-4">
              <a href="https://www.reddit.com/r/upnotes/">Reddit</a>
            </div>
            <div className="pr-4">
              <a href="https://discord.gg/ATZTMeyWsW">Discord</a>
            </div>
            <div className="pr-4">
              <a href="https://www.youtube.com/channel/UCbYXYe5ugUwz1LkQW0OG9kA/featured">
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pr-4">
              <a href="https://twitter.com/Upnotes1">Twitter</a>
            </div>
            <div className="pr-4">
              <a href="https://blog.upnotes.io/">Blog</a>
            </div>
            <div className="pr-4">
              <a href="https://github.com/upnotes-io/upnotes-website/releases">
                All releases
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
