const requestData = new XMLHttpRequest();
requestData.open("GET", "/ceps.json");
requestData.responseType = "json";
requestData.send();

const cepClient = 69900000;
// const cepClient = 20000001;

requestData.onload = () => {
	let wrapper = requestData.response;
	for (const i in wrapper) {
        if(cepClient >= wrapper[i].cepInicial && cepClient <= wrapper[i].cepFinal){
            window.location.href = wrapper[i].url
            return false
        }
	}
};
