var firstName = ["Akhtar " , "Shoaib " , "Yousha " , "Maaz "]
var lastName = ["Khan" , "Syed"];
var fullname = [];
for(var i = 0; i < firstName.length; i++)
     {
        for(var j = 0 ; j < lastName.length ; j++)
             {
              fullname.push(firstName[i] + lastName[j])
             }
          }
      console.log(fullname);