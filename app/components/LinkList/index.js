/**
*
* LinkList
*
*/

import React from 'react';
import Link from "../Link";
import IconButton from "../IconButton";

import styles from './styles.css';

function LinkList({ links, topicName, children }) {
  const linkNodes = links.map(l => {
    return (
      <Link
        key={l.id}
        link={l} />
    );
  });

  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton icon="plus" />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ).isRequired
};

export default LinkList;
