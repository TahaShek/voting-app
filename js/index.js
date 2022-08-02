let  CreateCard=()=>{
    let CardName =document.querySelector('.Name ').value;
    let inputUrl= document.querySelector('.Url').value;

    // console.log(CardName,inputUrl);
let CardObject=new Object();
CardObject.Name=CardName;
CardObject.ImageUrl=inputUrl;
// console.log(CardObject)
CardObject.Id=Math.floor(Math.random()*1000);
CardObject.Points=0;
// console.log(CardObject)
let CardContainer = document.querySelector('.CardContainer');
CardContainer.innerHTML = `
<div class="card" style="width: 18rem;">
<img src="${CardObject.ImageUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <p>Name: ${CardObject.Name}</p>
  <p>Points: ${CardObject.Points}</p>
  <p>Points: ${CardObject.Id}</p>


</div>
    </div>
`

}