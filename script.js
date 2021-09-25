var str = "xzxza";
var count = 0;
for(var i=0;i<str.length-2;i++){
for(var j=i+1;j<str.length-1;j++){
var a = str.slice(0,i+1);
var b = str.slice(i+1,j+1);
var c = str.slice(j+1,str.length);
if((a+b != b+c)&&(b+c != c+a)&&(a+b != c+a)){
count++;
}
}


}
console.log(count);

  Array.prototype.chunk = function(size) {
    let result = [];
    
    while(this.length) {
        result.push(this.splice(0, size));
    }
        
    return result;
}
const ar = [2,1,2,3,3,4,3,2,4,1];
console.log(ar.chunk(2));



  