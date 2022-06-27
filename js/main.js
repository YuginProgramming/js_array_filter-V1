function tbl(){

const smartphone = [
   { Model: 'Motorola E7', Price: 4699, Memory: 64, Color: 'blue' },
   { Model: 'Xiaomi 11T', Price: 15999, Memory: 256, Color: 'gray' },
   { Model: 'Samsung M526', Price: 14500, Memory: 128, Color: 'black' },
   { Model: 'Samsung G998', Price: 35400, Memory: 128, Color: 'blue' },
   { Model: 'Samsung G780', Price: 18900, Memory: 256, Color: 'gray' },
];

let button = document.querySelector('button');
button.addEventListener('click', function(){
   smartphone.sort((a, b) => {
      if(a.Price < b.Price ) return -1;
      if(a.Price > b.Price ) return 1;
      if(a.Price === b.Price ) return 0;
   });
}
) 


let html = "<table border='3|3'>"

setTimeout(() => {
   html+='<thead>';
   html+='<tr>';
   html+='<td>'+'Model'+'</td>';
   html+='<td>'+'Price'+'</td>';
   html+='<td>'+'Memory'+'</td>';
   html+='</tr>';
   html+='</thead>';

   for(let i =0; i<smartphone.length; i++){
      html+='<tr>';
      html+='<td>'+smartphone[i].Model+'</td>';
      html+='<td>'+smartphone[i].Price+'</td>';
      html+='<td>'+smartphone[i].Memory+'</td>';
      html+='</tr>';
   }

   document.getElementById("table").innerHTML = html;
   
}, );

}

tbl()

let button = document.querySelector('button');

button.addEventListener('click', function(){

const smartphone = [
   { Model: 'Motorola E7', Price: 4699, Memory: 64, Color: 'blue' },
   { Model: 'Xiaomi 11T', Price: 15999, Memory: 256, Color: 'gray' },
   { Model: 'Samsung M526', Price: 14500, Memory: 128, Color: 'black' },
   { Model: 'Samsung G998', Price: 35400, Memory: 128, Color: 'blue' },
   { Model: 'Samsung G780', Price: 18900, Memory: 256, Color: 'gray' },
];

   smartphone.sort((a, b) => {
      if(a.Price < b.Price ) return -1;
      if(a.Price > b.Price ) return 1;
      if(a.Price === b.Price ) return 0;
   });
   
let html = "<table border='3|3'>"

setTimeout(() => {
   html+='<thead>';
   html+='<tr>';
   html+='<td>'+'Model'+'</td>';
   html+='<td>'+'Price'+'</td>';
   html+='<td>'+'Memory'+'</td>';
   html+='</tr>';
   html+='</thead>';

   for(let i =0; i<smartphone.length; i++){
      html+='<tr>';
      html+='<td>'+smartphone[i].Model+'</td>';
      html+='<td>'+smartphone[i].Price+'</td>';
      html+='<td>'+smartphone[i].Memory+'</td>';
      html+='</tr>';
   }

   document.getElementById("table").innerHTML = html;
   
}, )
}

) ;