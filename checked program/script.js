
const myCheckBox = document.getElementById("myCheckBox");
const offerRadioBtn = document.getElementById("offerRadioBtn");
const featureRadioBtn = document.getElementById("featureRadioBtn");
const updatesRadioBtn = document.getElementById("updatesRadioBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const radioResult = document.getElementById("radioResult");

document.getElementById("mySubmitBtn").onclick = () => {
    
    if(myCheckBox.checked){
        subResult.textContent = `Successfully subscribed`;
    }else{
        subResult.textContent = `You are not subscribed`;
    }

    if(offerRadioBtn.checked){
        radioResult.textContent = `You have subscribed to Offers news`;
    }else{
        radioResult.textContent = `Not subs to anyone`;
    }

    if(featureRadioBtn.checked){
        radioResult.textContent = `You have subscribed to Features news`;
    }else{
        radioResult.textContent = `Not subs to anyone`;
    }

    if(updatesRadioBtn.checked){
        radioResult.textContent = `You have subscribed to updated news`;
    }else{
        radioResult.textContent = `Not subs to anyone`;
    }

}