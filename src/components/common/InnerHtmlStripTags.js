import React from 'react';
import String from 'string';
import PropTypes from 'prop-types';
import { DEFAULT_TRUNCATED_LENGHT } from '../../constants/general';

/**
 * @description propTypes for InnerHtmlStripTags
 * @type {Object}
 */
const propTypes = {
  html: PropTypes.string.isRequired,
  truncateTo: PropTypes.number,
};

/**
 * @description default props for InnerHtmlStripTags
 * @type {Object}
 */
const defaultProps = {
  truncateTo: DEFAULT_TRUNCATED_LENGHT,
};

/**
 * @function InnerHtmlStripTags
 * @param {String} html html string
 * @param {Number} [truncateTo] truncate length
 * @returns {XML}
 */
function InnerHtmlStripTags({ html, truncateTo }) {
  const stripedHtml = String(html)
    .trim()
    .replaceAll('&nbsp;', ' ')
    .stripTags()
    .s;

  const truncatedHtml = String(stripedHtml)
    .truncate(truncateTo).s;

  return <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
}

InnerHtmlStripTags.propTypes = propTypes;
InnerHtmlStripTags.defaultProps = defaultProps;

export default InnerHtmlStripTags;
