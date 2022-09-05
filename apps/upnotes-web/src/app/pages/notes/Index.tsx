import { useEffect, useState } from 'react';

export default function Notes() {
  const [text, setText] = useState('text');
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
  return (
    <div>
      <p>hello</p>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>
    </div>
  );
}
