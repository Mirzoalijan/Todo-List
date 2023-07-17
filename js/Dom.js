import { deleteUser } from "./API.js";
import { editUser } from "./API.js";
import { addUser } from "./API.js";
import { searchFunction } from "./API.js";




let box  = document.querySelector('.box')
let modal = document.querySelector('.modal')
let modal2 = document.querySelector('.modal2')
let form2 = document.querySelector('.form2')
let btnAdd = document.querySelector('.btnAdd')
let form3 = document.querySelector('.form3')
let form1 = document.querySelector('.form1')
let select = document.querySelector('#select')
let select2 = document.querySelector('#select2')
let Canel  = document.querySelector('.Canel')
let close = document.querySelector('.close')
let close2 = document.querySelector('.close2')
let body = document.querySelector('.body')
let light = document.querySelector('.light')
let dark = document.querySelector('.dark')



close.onclick = ()=>{
    modal2.close()
}
close2.onclick =()=>{
    modal.close();
}

Canel.onclick =()=>{
    modal.close()
}
dark.onclick =()=>{
    body.style.backgroundColor = '#212121'
    body.style.color = '#fff'
    container.style.backgroundColor = '#303134'
    container.style.color = '#FFF'

}
light.onclick =()=>{
    body.style.backgroundColor = '#fff'
    body.style.color = '#000'
    container.style.backgroundColor = '#e8e8e8'
    container.style.color = '#000'
}


////Active////
select2.onclick = ()=>{
    let newobj 
    if (select2.value == 'Active') {
        searchFunction('Active','status')
    }
    if (select2.value == 'Inactive') {
        searchFunction('Inactive','status')
    }else {
        searchFunction('','q')
    }
}

/////Group/////
select.onclick = () => {
    let newsta
    if (select.value == 'Go') {
        searchFunction("Go (18:00 - 20:00)","group")
    }
    else if (select.value == 'Pyton') {
        searchFunction('Pyton (18:00 - 20:00)','group')
    }
    else if (select.value == 'Html') {
        searchFunction('Html (12:00 - 14:00)','group')
    }
    else if (select.value == 'Javascript') {
        searchFunction('Javascript 1 (18:00 - 20:00)','group')
    }
    else {
        searchFunction('','q')
    }
}


////search////
form1.oninput = () => {
    searchFunction(form1['srch'].value.trim(),'q')
}


btnAdd.onclick = ()=>{
    modal2.showModal()


///ad
form3.onsubmit = (event)=>{
    event.preventDefault()
     let add ={
    img:form3['url'].value,
    name:form3['name'].value,
    phone:form3['phone'].value,
    group:form3['group'].value,
} 
form3.reset()
modal2.close()
addUser(add)
}
}







function get(data){
    box.innerHTML = ''
    data.forEach(e => {
        let container = document.createElement('div')
        container.classList.add('container')
        let div1 = document.createElement('div')
        div1.classList.add('div1')
        let div2 = document.createElement('div')
        div2.classList.add('div2')
        let div3 = document.createElement('div')
        div3.classList.add('div3')
        let div4 = document.createElement('div')
        div4.classList.add('div4')
        let div5 = document.createElement('div')
        div5.classList.add('div5')
        let div6 = document.createElement('div')
        div6.classList.add('div6')
        let img  = document.createElement('img')
        img.src = e.img
        img.classList.add('img')
        let h4 = document.createElement('h4')
        h4.innerHTML = e.name
        let p = document.createElement('p')
        p.innerHTML = e.phone
        let ul = document.createElement('ul')
        ul.innerHTML = 'Group'
        let li = document.createElement('li') 
        li.innerHTML = e.group
        let lis = document.createElement('li')
        lis.innerHTML = 'C# 5(16:00 - 18:00)'
        let status1  = document.createElement('h6')
        status1.innerHTML = e.status
        let complited = document.createElement('h3')
        complited.innerHTML = 'Status:'
       
        if(e.status == 'Active'){
            status1.innerHTML = 'Active'
            status1.classList.add('status1')
        }else { 
            status1.innerHTML = 'Inactive'
            status1.classList.add('status2')
        }   

        let btnDelete = document.createElement('a')
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnDelete.onclick = ()=>{
            deleteUser(e.id)
        }
        let btnEdit = document.createElement('a')
        btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
       btnEdit.onclick = ()=>{
        modal.showModal()
        form2['url'].value = e.img
        form2['name'].value = e.name
        form2['phone'].value = e.phone
        form2['group'].value = e.group
        form2['status'].value = e.status
        form2.onsubmit = (event)=>{
            event.preventDefault()
            let user = {
                img:form2['url'].value,
                name: form2['name'].value,
                phone:form2['phone'].value,
                group:form2['group'].value,
                status:form2['status'].value,
            }
            
            form2.reset()
            modal.close()
            editUser(e.id,user)

        }

       }

         div1.appendChild(h4)
         div1.appendChild(p)
         div2.appendChild(img)
         div2.appendChild(div1)
         container.append(div3,div2,div1,ul,li,lis,div4,div5,div6) 
         div4.append(complited,status1)
         div6.append(btnDelete,btnEdit)
         div5.append(div4,div6)
         div3.appendChild(div1)
         div3.appendChild(div2)
         box.appendChild(container)
        
    });
}
export default get