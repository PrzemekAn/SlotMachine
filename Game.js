class Game{
    constructor(money){
        this.wallet = new Wallet(money);
        this.draw = new Draw();
        this.result = new Result();
        this.gameBoxes = document.querySelectorAll('.box');
        this.inputBid = document.querySelector('input#bid');
        this.spinButton = document.querySelector('.draw');
        this.walletContent = document.querySelector('.wallet-value');
        this.currentResultInfo = document.querySelector('.money-change');

    this.spinButton.addEventListener('click',this.render.bind(this))

    }
    render(){

        if(this.wallet.checkCanPlay(Math.floor(this.inputBid.value))){
            const currentDraw = this.draw.letsDraw();
            // console.log(currentDraw);
            this.gameBoxes[0].style.backgroundColor = currentDraw[0];
            this.gameBoxes[1].style.backgroundColor = currentDraw[1];
            this.gameBoxes[2].style.backgroundColor = currentDraw[2];
            this.wallet.changeWallet(this.inputBid.value, this.result.isWin(currentDraw));
            const currentWalletContent = this.wallet.getWalletValue();
            this.walletContent.textContent = currentWalletContent;

        }
    }
}

