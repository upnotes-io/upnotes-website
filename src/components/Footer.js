import React from 'react';
import SubscribeForm from "./SubscribeForm";

const Footer = function(){
    return <div className="pb-16 flex flex-col items-center " style={{background: 'antiquewhite'}}>
        <div className="max-w-screen-lg w-full">
            <SubscribeForm/>
        </div>
        <footer  className="flex justify-center pt-8">
            <p className="pr-4"><a href="mailto:admin@upnotes.io">Contact us</a></p>
            <p className="pr-4"><a href="https://www.reddit.com/r/upnotes/">Reddit</a></p>
            <p className="pr-4"><a href="https://discord.gg/ATZTMeyWsW">Discord</a></p>
            <p className="pr-4"><a href="https://twitter.com/Upnotes1">Twitter</a></p>
            <p className="pr-4"><a href="https://blog.upnotes.io/">Blog</a></p>
            <p className="pr-4"><a href="https://github.com/upnotes-io/upnotes-website/releases">All releases</a></p>
        </footer>
    </div>
}


export default Footer;
