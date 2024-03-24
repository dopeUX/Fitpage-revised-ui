'use client'
import React from "react";
import './ListItem.css';
import { useRouter } from "next/navigation";

export interface ListItemProps {
  item: any
}

const ListItem: React.FC<any> = ({item}) => {
	 const router = useRouter();
      return (<div key={item.index} className="data-list-item" onClick={() => {
         router.push(`/${item._id}`)
       }}>
	   <h3>{item.name}</h3>
	   <p style={{color: item.color}}>{item.tag}</p>
	   <div className="divider"></div>
	</div>)
}

export default ListItem;