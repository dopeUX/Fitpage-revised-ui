'use client';
import getDataById from "@/app/Services/getDataById.service";
import React, { useEffect, useState } from "react";
import './variablePage.css';
import he from 'he';

export interface VariablePageProps {}

const VariablePage = ({params}: any) => {
	
    const [preparedData, setPreparedData] = useState<any>()!;
	
	useEffect(() => {
      getData();
	})

	async function getData() {
		let response: any = await getDataById(params.dataId);
		let data = response.data.data[0];
		setPreparedData(data.criteria[params.criteria]['variable'][decodeURIComponent(params.variable)])
	}

	return (
	   <div className="variable-page">
		 <div className="content">
			{preparedData ? <div className="dashboard">
                {preparedData.type == 'value' ? <ul className="data-list">
					{
					  preparedData.values.map((item: any, index: number) => {
						return (
							<li key={index} className="data-list-item">
						       	<p>{item}</p>  
								{index != preparedData.values.length-1 && <div className="divider"></div>	}
							</li>
						 )
					  })
					}
				 </ul> : <div className="indicator">
					  <div className="header">
						 <h3>{preparedData.study_type.toUpperCase()}</h3>
						 <p>Set parameters.</p>
					  </div>

					  <div className="params">
						<p>{preparedData.parameter_name}</p>
						<input type="text" value={preparedData.default_value}/>
					  </div>
					</div>}
			</div> : <div>
				<h3>Loading data...</h3>
				</div>}
		 </div>
	   </div>
	)
}

export default VariablePage;