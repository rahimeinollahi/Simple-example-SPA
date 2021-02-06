import axois from 'axios';
function changeShowContent({commit}){
    commit('changeShowContent');
}
async function fetchDataBook2({commit}){
    const url='https://jsonplaceholder.typicode.com/todos';
    const response=await axois.get(url);
    commit('fetchDataBook2',response.data);
}

async function fetchDataBook3({commit}){
    const url='https://jsonplaceholder.typicode.com/todos';
    const response=await axois.get(url);
    commit('fetchDataBook3',response.data);
}
export default {
    changeShowContent,
    fetchDataBook2,
    fetchDataBook3,
}