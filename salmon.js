
var table=document.getElementById("shell");
var data=[];
var people=[];

function Store (location,mincust,maxcust,avgcookies)
{
this.location=location;
this.mincust=mincust;
this.maxcust=maxcust;
this.avgcookies=avgcookies;
}


Store.prototype.cookiesperhour = function()
{
  return Math.floor(this.customersperhour()*this.avgcookies);
}


Store.prototype.customersperhour = function()
{
  return Math.floor(Math.random() * (this.maxcust - this.mincust)) + this.mincust;


}

var location1= new Store("1st Pike st",23,65,6.5);
var location2= new Store("Seattle Airport",3,24,1.2);
var location3= new Store("Seattle Center",11,38,3.7);
var location4= new Store("Capitol Hill",20,38,2.3);
var location5= new Store("Alki",2,16,4.6);

people.push(location1,location2,location3,location4,location5);



function makerow(arr)
{
  for(i=0; i<arr.length;i++)
  {
  data.push(
    '<td>'+ arr[i].location+'</td>' +
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
    '<td>'+ arr[i].cookiesperhour()+'</td>'+
     '<td>'+ arr[i].cookiesperhour()+'</td>'
    
    )
  }
}



function totalfortheday(tablerow)
{  
  for(var j=0;j<tablerow.length;j++)
  {
    var newRow= document.createElement('tr');
    newRow.innerHTML=tablerow[j];
    table.appendChild(newRow);
    
  }
}
makerow(people);
totalfortheday(data);

/*var location2={}
var location3={}
var location4={}
var location5={}*/