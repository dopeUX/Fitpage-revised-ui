import axios from "axios";

const getDataById = async (id: any) => {
  let url = `https://ff210980-520c-4132-a46d-c78ce811bd21-00-1jctr4iiqmoaz.pike.replit.dev/api/data`;
  
  const promise: any = await new Promise(async(resolve, reject) => {
	const response = await axios.get(`${url}/${id}`);
	console.log(response.data, 'oooooo')
	if(response && response.status==200) {
		return resolve(response);
	} else {
		return reject({"message":"Error fecthing data", response})
	}
  })

  return promise;
}

export default getDataById;