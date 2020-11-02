class Result{
    constructor(){
        
    }
    isWin(colors){
        if((colors[0] === colors[1] && colors[1] === colors[2]) || colors[0] !== colors[1] && colors[1] !== colors[2] && colors[0] !== colors [2]){
            return true;
        }else{
            return false;
        }
        
    }
}
// const result = new Result();
