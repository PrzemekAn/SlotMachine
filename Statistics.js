class Statistics{
    constructor(){
        this.games = [];
        this.wins = [];
        this.losses = [];
    }
getResults(result){
    this.games.push(result);
    if(result === true){
        this.wins.push(result);
    }
    else if( result === false){
        this.losses.push(result);
    }
}

showResults(){
    let gamesQuantity = this.games.length;
    let winsQuantity = this.wins.length;
    let lossesQuantity = this.losses.length;

    return [gamesQuantity,winsQuantity,lossesQuantity];
}

}