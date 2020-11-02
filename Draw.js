class Draw{
    constructor(){
        this.possibilities = ['red','green','blue'];
    }
    letsDraw(){
        let colors = [];
        for(let i = 0; i < this.possibilities.length; i++){
            const color = Math.floor(Math.random() * this.possibilities.length);
            colors.push(this.possibilities[color]);
        }

        // console.log(colors)
        return colors;
    }
}
// const draw = new Draw();