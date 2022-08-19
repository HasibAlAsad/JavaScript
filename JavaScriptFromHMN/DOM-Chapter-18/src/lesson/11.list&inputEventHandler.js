let list = document.getElementById('list')

list.addEventListener('dblclick',function(e){
    if(this.contains(e.target)){
        let innerText = e.target.innerHTML
        e.target.innerHTML = ''
        let createInput = createInputBox(innerText)
        e.target.appendChild(createInput)

        createInput.addEventListener('keypress', function(event){
            if(event.key === 'Enter'){
                e.target.innerHTML = event.target.value
            }
        })

    }

})

function createInputBox (value){
    let input = document.createElement('input')
    input.type ='text'
    input.className = 'form-control'
    input.value= value

    return input
}