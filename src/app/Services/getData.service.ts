import axios from "axios";

const getData = async () => {
   const url = `https://ff210980-520c-4132-a46d-c78ce811bd21-00-1jctr4iiqmoaz.pike.replit.dev/api/data`;
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