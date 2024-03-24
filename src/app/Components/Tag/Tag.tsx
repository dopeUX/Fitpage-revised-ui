'use client';
import { useRouter } from "next/navigation";
import React from "react";

export interface TagProps {
	dataId: string;
	text:string;
}

const Tag: React.FC<TagProps> = ({dataId, text}) => {
	const router = useRouter();
	const pushToVariablePage = (variable: any) => {
		// router.push(`${dataId}/${variable}`)
		console.log('hhhh')
	}
	return (
		`<p style='color: blue; margin:0; cursor:pointer' onclick='(${pushToVariablePage})()'>(&#8209;${text})</p>`	
		// <p style={{color:'blue', margin:0, cursor:'pointer'}} onClick={() => {
		// 	// pushToVariablePage(dataId)
		// }}>(&#8209;${text})</p>	
	)
}

export default Tag;
