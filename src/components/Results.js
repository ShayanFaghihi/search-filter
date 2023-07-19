import React, { Fragment } from "react";

import styles from "./Results.module.css";

const Results = (props) => {
  return (
    <Fragment>
      <div className={styles.results}>
        <ul className={styles["results__list"]}>
            {props.users.map(user => {
                return <li className={styles['results__item']} key={Math.random()}>{user.first_name}</li>
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Results;
