function changeShowContent(state){
        state.leftsideitems.showcontent=!state.leftsideitems.changeShowContent;
    }

    function fetchDataBook2(state,bookData){
        state.tableBook2=bookData;
    }
    function fetchDataBook3(state,bookData){
        state.tableBook3=bookData;
    }
export default {
    changeShowContent,
    fetchDataBook2,
    fetchDataBook3,
}