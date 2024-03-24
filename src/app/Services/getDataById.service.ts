import axios from "axios";

const getDataById = async (id: any) => {
  let url = `https://fitpage-revised-server.vercel.app/api/data`;
  
  const promise: any = await new Promise(async(resolve, reject) => {
	const response = await axios.get(`${url}/${id}`);
	if(response && response.status==200) {
		return resolve(response);
	} else {
		return reject({"message":"Error fecthing data", response})
	}
  })

  return promise;
}

export default getDataById;