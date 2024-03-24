import React from "react";
import './HomeScreen.css';
import getData from "@/app/Services/getData.service";
import ListItem from "@/app/Components/ListItem/ListItem";

export interface HomeScreenProps {}

const HomeScreen: React.FC<any> = async({}) => {

	const res: any = await getData();

	return (
	  <div className="home-screen">
		<section className="content">
		 <div className="dashboard">
           <ul className="data-list">
            {
			   res.data.map((item: any, index: number) =>{
				  return (<li key={index} className="data-list-item">
				     <ListItem item = {item}/>
				  </li>)
			  })
			}
		   </ul>
		 </div>
		</section>
	  </div>
	)
}

export const getServerSideProps = async () => {
  const data: any = await getData();
  return {
	props:{
		data
	}
  }
}

export default HomeScreen;