document.addEventListener("DOMContentLoaded", function(event){
    var radioList=document.getElementsByClassName("radios");
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    async function test(){
        while(1){
            var i=0;
            for(i; i<radioList.length; i++ ){
                radioList[i].click();
                await sleep(3000);
            }
        }
        
    }

    test();

});
