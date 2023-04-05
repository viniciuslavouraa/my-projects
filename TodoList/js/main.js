const writteList = document.querySelector('#toDo')
const erro  = document.querySelector('#erro')

const btnSubmit = document.querySelector('#btn')
const btnReset = document.querySelector('#btnReset')

let toDoView = document.querySelector('#toDo-view')
let toDoViewItems = document.querySelector('#toDo-view-itens')
let toDoDoned = document.querySelector('#toDo-doned')
let toDoList = {}
btnReset.style.display = 'none'
btnSubmit.addEventListener('click',() => {
    let itemCheck = document.createElement('input')
    let item = document.createElement('label')

    itemCheck.setAttribute('type', 'checkbox')
    item.setAttribute('id', writteList.value.replace(/\s+/g, '-'))
    item.textContent = writteList.value
    
    if (writteList.value.length < 3) {
        erro.textContent = 'Adicione algum item'
    }else if (toDoList[item.textContent]) {
        erro.textContent = 'item já incluso'
    }else {
        erro.textContent = ''
        toDoViewItems.appendChild(itemCheck)
        toDoViewItems.appendChild(item)
        toDoView.appendChild(toDoViewItems)
        writteList.value = ''
        toDoList[item.textContent] = item
    }

    itemCheck.addEventListener('click',() => {
        erro.textContent = ''
        if (itemCheck.checked) {
            const itemId = item.getAttribute('id')
            const itemRemove = document.querySelector(`#${itemId}`)

            toDoViewItems.removeChild(itemCheck)
            toDoViewItems.removeChild(itemRemove)
            toDoDoned.appendChild(itemCheck)
            toDoDoned.appendChild(itemRemove)

            btnReset.addEventListener('click', () => {
                toDoDoned.removeChild(itemCheck)
                toDoDoned.removeChild(itemRemove)

                for (let key in toDoList) {
                    delete toDoList[key]
                }
            })
        } else {
            toDoDoned.removeChild(itemCheck);
            toDoDoned.removeChild(item);
            toDoViewItems.appendChild(itemCheck);
            toDoViewItems.appendChild(item);
            toDoViewItems.style.display = 'block'
        }
        btnReset.style.display = 'block'
    })
    console.log(toDoList)
})



