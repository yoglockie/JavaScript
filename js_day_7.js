

let obj=[
    {
        rollno:21,
        name:"Lokesh",
        course:"btech",
        branch:"cs",
        age:18
    },
    {
        rollno:22,
        name:"Ritvik",
        course:"btech",
        branch:"cs",
        age:19
    },
    {
        rollno:23,
        name:"Golu",
        course:"btech",
        branch:"civil",
        age:45,
    },
    {
        rollno:24,
        name:"Bholu",
        course:"mbbs",
        branch:"physiotherapy",
        age:4,
    },
    {
        rollno:21,
        name:"Lokesh",
        course:"btech",
        branch:"cs",
        age:18
    },
    {
        rollno:22,
        name:"Ritvik",
        course:"btech",
        branch:"cs",
        age:19
    },
    {
        rollno:23,
        name:"Golu",
        course:"btech",
        branch:"civil",
        age:45,
    },
    {
        rollno:24,
        name:"Bholu",
        course:"mbbs",
        branch:"physiotherapy",
        age:4,
    },
   
    

]

let c = obj.filter((item)=>
{
    return item.age>18
})

console.log(c)






