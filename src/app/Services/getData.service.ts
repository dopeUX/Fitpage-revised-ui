import axios from "axios";

const getData = async () => {
   const url = `https://fitpage-revised-server.vercel.app/api/data`;
   let axiosConfig: any = {};
   let response;
   console.log('api-initiated')

   const promise = await new Promise(async (resolve, reject) => {
	 const res = await axios.get(url);
	 if(res && res.status == 200) {
		return resolve(res.data);
	 } else {
		return reject('error fetching data');
	 }
   })
   
   return promise;

} 

export default getData;