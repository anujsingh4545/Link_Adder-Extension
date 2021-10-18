
let myLeads =[];

const inputEl= document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const inputBtn= document.getElementById("input-btn");
const tabBtn = document.getElementById("save-btn");
const ulEl= document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads();
}

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
     localStorage.setItem("myLeads",JSON.stringify(myLeads));
     renderLeads();
    });
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value=""
    renderLeads();
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
})
function renderLeads(){
    let listItems =""
for(let i=0;i<myLeads.length;i++){
    listItems += "<li><a target =_blank href='" + myLeads[i] +"'>"+ myLeads[i] + "</a></li>";
}
    ulEl.innerHTML=listItems

}