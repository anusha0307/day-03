//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

var obj=[
    {person:"person1",age:"2",company:"guvi"},
    {person:"person2",age:"3",company:"guvi geek"},
    {person:"person3",age:"4",company:"guvi geek network"},
]

//for loop
for(var i=0;i<obj.length;i++)
{
    console.log(obj[i])
}

// for in loop
for(var i in obj){
    console.log(obj[i])
}

//for of loop
for(var details of obj )
{
    console.log(details)
}

//for each loop
obj.forEach((function(obj){
  console.log(obj)
}))

//output
{ person: 'person1', age: '2', company: 'guvi' }
{ person: 'person2', age: '3', company: 'guvi geek' }
{ person: 'person3', age: '4', company: 'guvi geek network' }

{ person: 'person1', age: '2', company: 'guvi' }
{ person: 'person2', age: '3', company: 'guvi geek' }
{ person: 'person3', age: '4', company: 'guvi geek network' }

{ person: 'person1', age: '2', company: 'guvi' }
{ person: 'person2', age: '3', company: 'guvi geek' }
{ person: 'person3', age: '4', company: 'guvi geek network' }

{ person: 'person1', age: '2', company: 'guvi' }
{ person: 'person2', age: '3', company: 'guvi geek' }
{ person: 'person3', age: '4', company: 'guvi geek network' }





//2.Create your own resume data in JSON format

var resume = {
    name:"anusha",
    age:20,
    gender:"female",
    nationality:"indian",
    designation:"full stack developer",
    interest:"playing,cooking,listening songs",
    address:
    {
        area:"gandhi colony,banjara hills",
        place:"hyderabad",
        pincode:"500055",
    } , 
    contact:
    {
        mobile:0844899943,
        email:"anushab@gmail.com",
              },
                  
          
}
console.log(resume)

//output

{
    name: 'anusha',
    age: 20,
    gender: 'female',
    nationality: 'indian',
    designation: 'full stack developer',
    interest: 'playing,cooking,listening songs',
    address: {
      area: 'gandhi colony,banjara hills',
      place: 'hyderabad',
      pincode: '500055'
    },
    contact: { mobile: 844899943, email: 'anushab@gmail.com' }
  }