const studentRecords = [
{
    "firstName": "Samuel",
    "lastName": "Doe",
    "id": "OOF-12",
    "age": 20
},
{
    "firstName": "Felix",
    "lastName": "Doe",
    "id": "OOF-13",
    "age": 22
},
{
    "firstName": "James",
    "lastName": "Doe",
    "id": "OOF-14",
    "age": 20    
}
]

// console.log(studentRecords[0].firstName)
// Map Method
studentRecords.map((eachStudent)=>{
    const displayElement = document.getElementById('displayStudentRecords');
    displayElement.innerHTML += `
    <p>FirstName: ${eachStudent.firstName}</p>
    <p>LastName: ${eachStudent.lastName}</p>
    `

})


const filteredStudent = studentRecords.filter((eachStudent)=>{
    return (eachStudent.age === 20)
})
    console.log('filterStudent', filteredStudent)

// console.log(studentRecords)

