        // form theke data extract

let form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    // console.log(form.elements)
    let formData = {}
    ;[...this.elements].forEach(el =>{
        // console.log(el.name)
        
        if(el.type != 'submit'){
            formData[el.name] = el.value
        }
    })
    console.log(formData)
    this.reset()
})