import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
 

export default function Header(){
	const [links, setLinks] = useState([1,0,0]);
	return(
		<div className="header">
			<nav>
				<ul>
			        <li><Link  className={links[0] === 1 ? "active" : ""}  to='/categories' onClick={() => setLinks([1,0,0])}><span uk-icon="list"></span>Категории</Link></li>
			        <li><Link className={links[1] === 1 ? "active" : ""}  to='/basket' onClick={() => setLinks([0,1,0])}><span uk-icon="trash"></span>Корзина</Link></li>
			        <li><Link className={links[2] === 1 ? "active" : ""} to='/favorites' onClick={() => setLinks([0,0,1])}><span uk-icon="heart"></span>Избранные</Link></li>
					<li>
						<form>
							<input type="search" placeholder="Поиск товара..."/>
							<button type="submit"><span uk-icon="icon: search"></span></button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	);
}