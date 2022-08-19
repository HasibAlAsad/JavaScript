        // form theke valid data extract

let form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    // console.log(form.elements)
    let formData = {}
    let isValid = false
    ;[...this.elements].forEach(el =>{
        // console.log(el.name)
        
        if(el.type != 'submit'){
            isValid = formValidation(el)
            if(isValid){
                formData[el.name] = el.value
            } else {
                alert (`${el.name} is required`)
            }
        }
    })
    if(isValid){
        console.log(formData)
        this.reset()
    }
})

function formValidation (el){
    if(!el.value){
        return false
    }

    return true
}