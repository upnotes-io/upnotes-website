import React from 'react';

const mailChimpHtml =
  '<div style=\'background: antiquewhite;\' id="mc_embed_signup">\n' +
  '<form action="https://gmail.us6.list-manage.com/subscribe/post?u=2e96ecf020cbf0911c36f7634&amp;id=98e12c8451" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\n' +
  '    <div id="mc_embed_signup_scroll">\n' +
  '\t<h2>%title%</h2>\n' +
  '<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\n' +
  '<div class="mc-field-group">\n' +
  '\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\n' +
  '</label>\n' +
  '\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">\n' +
  '</div>\n' +
  '\t<div id="mce-responses" class="clear">\n' +
  '\t\t<div class="response" id="mce-error-response" style="display:none"></div>\n' +
  '\t\t<div class="response" id="mce-success-response" style="display:none"></div>\n' +
  '\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n' +
  '    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2e96ecf020cbf0911c36f7634_98e12c8451" tabindex="-1" value=""></div>\n' +
  '    <div class="clear"><input style=\'background-color: #3e3430;\' type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button"></div>\n' +
  '    </div>\n' +
  '</form>\n' +
  '</div>\n' +
  '\n' +
  '<!--End mc_embed_signup-->';

const SubscribeForm = function (props) {
  const title = props.title || 'Subscribe for updates';
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: mailChimpHtml.replace('%title%', title),
      }}
    />
  );
};

export default SubscribeForm;
