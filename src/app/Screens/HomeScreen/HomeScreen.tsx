'use client';
import React, { useEffect, useState } from "react";
import './HomeScreen.css';
import getData from "@/app/Services/getData.service";
import ListItem from "@/app/Components/ListItem/ListItem";

export interface HomeScreenProps {}

const HomeScreen: React.FC<any> = ({}) => {
	const [res, setRes] = useState<any>()!;
    useEffect(() => {
		getDetailed();
	})

	async function getDetailed() {
		const response: any = await getData(); 
		setRes(response)
	}


	return (
	  <div className="home-screen">
		<section className="content">
		{res ? <div className="dashboard">
           <ul className="data-list">
            {
			   res.data.map((item: any, index: number) =>{
				  return (<li key={index} className="data-list-item">
				     <ListItem item = {item}/>
				  </li>)
			  })
			}
		   </ul>
		 </div> : <div>
			<h3>Loading...</h3>
			</div>}
		</section>
	  </div>
	)
}

export default HomeScreen;