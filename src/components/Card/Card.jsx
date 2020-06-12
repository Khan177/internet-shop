import React,{useState} from 'react';
import './Card.css';
import {CATEGORIES} from '../../shared/CATEGORIES';

export default function Card(props){
	return(
		<div className="card">
			<div className="card-image">
				<img src={props.image} alt=""/>
			</div>
			<div className="card-desc">
				<h3>{props.header}</h3>
			</div>
		</div>
	);
}