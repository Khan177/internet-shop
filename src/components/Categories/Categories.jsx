import React from 'react';

import './Categories.css';

import {CATEGORIES} from "../../shared/CATEGORIES";
import Card from '../Card/Card';

export default function Categories(){
	return (
		<div className="categories">
			{CATEGORIES.map((category) => (
				<Card key={category.id} header={category.header} image={category.img}></Card>
			))}
		</div>
	);
}