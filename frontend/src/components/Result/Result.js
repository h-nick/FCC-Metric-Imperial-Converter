import React from 'react';
import Styles from './Result.css';

const Result = (props) => (
	<h2 className={Styles.Result}>{props.children}</h2>
);

export default Result;