const checkArr = (a, b) => {
    for(var i = 0;i< a.length; i++){
        if(a[i]==b){
            return true
        }
    }return false
}

console.log(checkArr([1,2,3,4,5,7],4));
