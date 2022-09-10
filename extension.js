let saveEl = document.getElementById("save-el")
let inputEl = document.getElementById("input-el")
let entryEl = document.getElementById("entry-el")
const listEl = document.getElementById("list-el")
let responseEl = document.getElementById("response-el")
let clearEl = document.getElementById("clear-el")
let tabEl = document.getElementById("tab-el")
let myLeads = []
let leadsFromLocalStorage = localStorage.getItem("myLeads")
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
myLeads = leadsFromLocalStorage
}


saveEl.addEventListener("click", function(){
    console.log("save button clicked")
    //myLeads.push("whasuuu")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    responseEl.textContent = "Saved!"
    inputEl.value = ''
    myLeads = JSON.stringify(myLeads)
    localStorage.setItem("myLeads", myLeads)
    myLeads = JSON.parse(myLeads)

    //console.log(localStorage.getItem("myLeads"))
})

entryEl.addEventListener("click", function(){
    console.log("entries button clicked")
    renderEntries()
    //myLeads.push("whasuuu")
})


clearEl.addEventListener("click", function(){
    console.log("clear button clicked")
    clearEntries()
    responseEl.textContent = "Cleared!"

    //myLeads.push("whasuuu")
})

tabEl.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
    })
    
    console.log("tab button clicked")
    responseEl.textContent = "Tab Saved!"

})

function renderEntries(){
    listEl.innerHTML = " "
    for (let i = 0; i < myLeads.length; i++){
       // listEl.innerHTML += "<li>" + "<a target = '_blank' href = '" + myLeads[i] + "' >" + myLeads[i] + "</a>" + "</li>"
       listEl.innerHTML += `<li>  
                                <a target = '_blank' href = '${myLeads[i]}' > 
                                     ${myLeads[i]}
                                </a>
       
                            </li>` 
       console.log(myLeads[i])
    }
}

function clearEntries(){
    localStorage.clear(myLeads)
    myLeads = []
    renderEntries()
}