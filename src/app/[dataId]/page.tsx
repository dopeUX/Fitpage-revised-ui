'use client';
import './detailPage.css';
import React, { useEffect, useState } from "react";
import getDataById from "../Services/getDataById.service";
import { useRouter } from 'next/navigation';

const DetailPage: any = ({params}: {params: {dataId: string}}) => {
    const [data, setData] = useState<any>()!;
	const router = useRouter();
	useEffect(() => {
        getDetailedData();
	},[])
	async function getDetailedData () {
		let res: any = await getDataById(params.dataId);
		setData(res.data.data[0])
	}

	const getCriteriaComponent = (criteria: any, index: number) => {
	   let component;	
       switch (criteria.type) {
		case 'plain_text':
			component = (<p>{criteria.text}</p>)
			break;
	    case 'variable':
			const vars = Object.keys(criteria.variable);
			let modified: any
			modified = criteria.text;
			vars.forEach((item) => {
			  if(criteria.variable[item].type == 'value') {
				modified = modified.replace(item, `<a href="http://localhost:3001/${params.dataId}/${index}/${item}" style='color: blue; margin:0; cursor:pointer'>(&#8209;${criteria.variable[item]['values'][0]})</a>`)
			  } else if(criteria.variable[item].type == 'indicator') {
				modified = modified.replace(item, `<a href="http://localhost:3001/${params.dataId}/${index}/${item}" style='color: blue; margin:0; cursor:pointer'>(&#8209;${criteria.variable[item]['default_value']})</a>`)
			  }
			})
			component = (<p style={{display:'flex'}} dangerouslySetInnerHTML={{__html:modified}}></p>)
		default:
			break;
	   }
	   return component;
	}

	const getVariableComponent = (variable: any) => {
      let component;
	  switch (variable.type) {
		case 'value':
			component = (<p>{variable.values[0]}</p>)
			break;
	    case 'indicator':
			component = (<p></p>)
		default:
			break;
	  }

	  return component;
	}
	return (
	  <div className="data-page">
		<div className="content">
		  {data ? <div className="dashboard">
            <div className="header">
			  <h3>{data.name}</h3>
			  <p style={{color: data.color}}>{data.tag}</p>
			</div>

			<div className="criteria-details">
               <ul className="data-list">
				  {
					data.criteria.map((item: any, index: number) => {
						return (
						  <li key={index} className="data-list-item">
							 {
								getCriteriaComponent(item, index)}
							  {index != data.criteria.length-1 && <p>and</p>}
						  </li>	
						)
					})
				  }
			   </ul>
			</div>
		  </div> : <div>
			<h3>Loading...</h3>
			</div>}
		</div>
	  </div>
	)
}

export default DetailPage;