
let res= document.getElementById("result")
let text=document.getElementById("textarea")
let insertWrapper=document.getElementById("insertTextWrapper")
let chooseStyle=document.getElementById("chooseStyle")
let chooseStyle1=document.getElementsByClassName("chooseStyle")
let checkboxForm = document.querySelectorAll("#checkboxForm>input")
let fontSizeOptions=document.getElementById("fontSize")
let fontStyle=document.querySelectorAll("#fontStyle>input")
let ChoseColorForm=document.getElementById("ChoseColorForm")
let allColor=document.querySelectorAll("#ChoseColorForm>div")
let flagToKnewWichButtonPushInColorTable=true
let wrapperSecondPage=document.getElementById("wrapperSecondPage")
let wrapper=document.getElementById("wrapper")
let table=document.getElementById("table")
let list=document.getElementById("list")
let listOrTableCheckBoxes=document.getElementById("listOrTableCheckBoxes")
let wrapperTable=document.getElementById("wrapperTable")
let btnCreatList=document.getElementById("btnCreatList")
let typeOfMarks =document.getElementById("typeOfMarks")
let countLi =document.getElementById("countLi")
let countLiResult=document.getElementById("countLiResult")
let widhtOfTD=document.getElementById("widhtOfTD")
let heightOfTD=document.getElementById("heightOfTD")
let heighOfBorder=document.getElementById("heighOfBorder")
let widhOfBorder=document.getElementById("widhOfBorder")
let typeOfBorder=document.getElementById("typeOfBorder")
let colorOfBorder=document.getElementById("colorOfBorder")
let countTR=document.getElementById("countTR")
let countTD=document.getElementById("countTD")
let btnCreateTable=document.getElementById("btnCreateTable")
let btnAdd=document.getElementById("btnAdd")
let btnColor=document.getElementById("btnColor")
let btnBackground=document.getElementById("btnBackground")
let btnEdit=document.getElementById("btnEdit")
let btnSave=document.getElementById("btnSave")
let btnStyle=document.getElementById("btnStyle")

btnAdd.addEventListener("click",AddListOrTable)
btnColor.addEventListener("click",showColor)
btnBackground.addEventListener("click",showBgColor)
list.addEventListener('change', showList)
table.addEventListener('change', showTable)
btnCreateTable.addEventListener("click",CreateTable)
btnEdit.addEventListener("click",showInsertTextWrapper)
btnSave.addEventListener("click",textPush)
btnStyle.addEventListener("click",textStyle)
chooseStyle.addEventListener("change", makeTextStyle)
ChoseColorForm.addEventListener("click", pushColor)
btnCreatList.addEventListener("click",pushList)

//create a table
function CreateTable(){
    let arrTR=[]
    let arrTD=[]
    let arrTDRes=[]
let arrTRRes=[]
    let TR
    let TD=`<td style="width:${widhtOfTD.value}; height:${heightOfTD.value};
    border:${widhOfBorder.value}px ${typeOfBorder.value} ${colorOfBorder.value}" >TD</td>`
    for(let i=0;i<=countTR.value;i++){
        if(arrTDRes[0]!==null){
            TR=`<tr>${arrTDRes}</tr>`
            arrTR.push(TR)
            arrTD=[]
        }
        else continue
        for(let j=0;j<countTD.value;j++){
            arrTD.push(TD)
            arrTDRes=arrTD.join(' ')
        } 
    }
    arrTRRes=arrTR.join(' ')
    wrapperTable.style.display="none"
    wrapperList.style.display="none"
    wrapper.style.display="flex"
    listOrTableCheckBoxes.style.display="none"
    chooseStyle.style.display="none"
    wrapperSecondPage.style.display="none"
    res.innerHTML+=`<table>${arrTRRes}</table>`
}

//send the text to the text-area
function textPush(){
    res.innerHTML=textarea.value
    insertWrapper.style.display="none" ;
}

//introduce styles for text
function makeTextStyle(){
for (el of checkboxForm ){
   if(el.checked){
    res.style=`font-size:${el.id}; font-family:${fontSizeOptions.value}; font-style:${fontStyle.value}`
   }
}
for (el of fontStyle){
    if(el.checked){
        if(el.id=="cursiveText"){
            res.style=`font-family:cursive`
        }
        if(el.id=='boldText'){
            res.style=`font-weight:bold`
        }
    }
}
}
//display a window with colors
function showColor(){
    ChoseColorForm.style.display="flex"
    flagToKnewWichButtonPushInColorTable=false
}
//display a window with colors for background
function showBgColor(){
    ChoseColorForm.style.display="flex"
    flagToKnewWichButtonPushInColorTable=true
}
//apply color
function pushColor(event){
   if( flagToKnewWichButtonPushInColorTable==true){
    res.style.backgroundColor=event.target.id
   }
   else{
    res.style.color=event.target.id
   }
    ChoseColorForm.style.display="none"
}
function showList(){
    wrapperList.style.display="flex"
    listOrTableCheckBoxes.style.display="none"
}
function showTable(){
    wrapperTable.style.display="flex"
    listOrTableCheckBoxes.style.display="none"
}
function showInsertTextWrapper(){
    insertWrapper.style.display="flex";
    text.innerHTML=res.innerHTML
}

function AddListOrTable(){
    wrapperSecondPage.style.display="flex"  
    wrapper.style.display="none"  
    listOrTableCheckBoxes.style.display="flex"
}
function textStyle(){
    chooseStyle.style.display="flex"
}
//display a list
function pushList(){
    let arrLi=[]
    countLiResult= countLi.value
    for(let i=1;i<=countLiResult;i++){
        let li=`<li>item ${i}</li>`
        arrLi.push(li)
    }
    let arrLiFinal=arrLi.join(' ')
    wrapperList.style.display="none"
    wrapper.style.display="flex"
    listOrTableCheckBoxes.style.display="none"
    chooseStyle.style.display="none"
    wrapperSecondPage.style.display="none"
    res.innerHTML+=`<ol style='list-style-type:${typeOfMarks.value}' > ${arrLiFinal}   </ol>`
}
