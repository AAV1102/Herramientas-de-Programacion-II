function sonIguales(a,b){
   console.log( a.every((element,index)=>{
    return element === b[index]
   }))
}


sonIguales([2,7,4],[2,7,4])