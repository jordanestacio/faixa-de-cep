const requestData = new XMLHttpRequest();
requestData.open("GET", "/ceps.json");
requestData.responseType = "json";
requestData.send();

requestData.onload = () => {
    let wrapper = requestData.response;
    console.log(wrapper)
    
}
