import getDataById from "@/app/Services/getDataById.service";
import React from "react";
import './variablePage.css';
import he from 'he';

export interface VariablePageProps {
  
}

const VariablePage = async ({params}: any) => {
	let response: any = await getDataById(params.dataId);
	let data = response.data.data[0];
	let preparedData = data.criteria[params.criteria]['variable'][decodeURIComponent(params.variable)];
	// const data = response.data.data[0];
	return (
	   <div className="variable-page">
		 <div className="content">
			<div className="dashboard">
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
						<input type="text" value={preparedData.default_value} onChange={() => {}}/>
					  </div>
					</div>}
			</div>
		 </div>
	   </div>
	)
}

export default VariablePage;