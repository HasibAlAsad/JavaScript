            // Input Box

let nam = document.getElementById('name')

nam.addEventListener('keypress', function(e){
    // console.log(e)
    if(e.key=== "Enter"){
        // console.log(e.target.value)
        let show =document.getElementById('show-name')
        show.innerHTML = `Ur name is ${e.target.value}`
        e.target.value = ""
    }
})



            // Check Box

let skills = document.getElementsByName('skills') 
// console.log(skills)
let result = document.getElementById('result')

let checkedSkills = []

;[...skills].forEach( skill => {
    skill.addEventListener('change', function(e){
        // console.log(e.target.checked)
        if(e.target.checked){
            checkedSkills.push(e.target.value)
            // console.log(checkedSkills)
            outputSkills(result, checkedSkills)
        } else{
            // checkedSkills.shift()       // pop/shift korle expected data remove korbe na..
            let ind = checkedSkills.indexOf(e.target.value)
            checkedSkills.splice(ind,1)
            // console.log(checkedSkills)
            outputSkills(result, checkedSkills)
        }
    })
})

function outputSkills (spanResult, skills){
    let res = ''
    skills.forEach( (skill, ind ) => {
        res = res + ` (${ind + 1}) ${skill}`
    })

    spanResult.innerHTML = res
}