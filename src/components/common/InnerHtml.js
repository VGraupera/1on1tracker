import React from 'react';

function createMarkup(html) {
  return { __html: html };
}

/**
 * @function InnerHtml
 * @param props
 * @returns {XML}
 */
function InnerHtml(props) {
  return <div dangerouslySetInnerHTML={createMarkup(props.html)} />;
}

export default InnerHtml;
