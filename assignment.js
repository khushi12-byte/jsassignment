//1
function number(n)
{
    if(n>=0)
    {
        return true;
    }
    else
        return false;
    
}
console.log((number(0)))
console.log((number(-1)))
console.log((number(2)))

//2



const findlargenum = (arr)=>
{
    let largestno= arr[0];

    for (let i = 0; i<arr.length;i++ )
    {
        if(arr[i]>largestno)
        {
            largestno = arr[i];
        }
    }
    return largestno;
}

const arr = new Array(1,2,3,15,6);
console.log(arr)
const largestno = findlargenum(arr);
console.log(largestno);


//3

var obj = {
    radius: 2,
    height : 0,
    area: function()
    {
        const pi = Math.PI;
        return pi* Math.pow(obj.radius,2)*obj.height;
    }
    
};
// obj.radius = 4;
obj.height = 2;
const cylinder = obj.area();
console.log("area is"+cylinder );

//4
//  the output is undefined , because  function or variable should use before console.