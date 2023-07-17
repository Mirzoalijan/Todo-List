import get from "./Dom.js";

const API =" http://localhost:3000/data"




///delete 
async function deleteUser(id) {
    try {
        let {data}  = await axios.delete(`${API}/${id}`)
        getData()
    } catch (error) {
        console.log(error);
    }
}
///search
async function searchFunction(value,key) {
    try {
        let { data } = await axios.get(`${API}/?${key}=${value}`)
        get(data)
    } catch (error) {
        console.log(error);
    }
}
//edit
async function editUser(id, user) {
    try {
        let { data } = await axios.put(`${API}/${id}`, user)
        getData()
    } catch (error) {

    }
}

//ad
async function addUser(user){
    try {
        let {data} = await axios.post(API,user)
        getData()
    } catch (error) {
        console.log(error);
    }
    }

async function getData(){
    try {
        let {data} = await axios.get(API)
        get(data)
    } catch (error) {
        console.log(error);
    }
}


export default getData
export {deleteUser}
export {editUser}
export {addUser}
export {searchFunction}