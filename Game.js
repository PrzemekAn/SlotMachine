class Game{
    constructor(money){
        this.wallet = new Wallet(money);
        this.draw = new Draw();
        this.result = new Result();
        this.statistics = new Statistics();
        this.gameBoxes = document.querySelectorAll('.box');
        this.inputBid = document.querySelector('input#bid');
        this.spinButton = document.querySelector('.draw');
        this.walletContent = document.querySelector('.wallet-value');
        this.currentResultInfo = document.querySelector('.money-change');
        this.gamesSpan = document.querySelector('.games');
        this.winsSpan = document.querySelector('.wins');
        this.lossesSpan = document.querySelector('.losses');


    this.spinButton.addEventListener('click',this.render.bind(this))

    }
    render(){
        //sprawdzenie czy zawartość portfela daje możliwość zagrania
        if(this.wallet.checkCanPlay(Math.floor(this.inputBid.value))){
            // losowanie
            const currentDraw = this.draw.letsDraw();
            // console.log(currentDraw);

            //wypełnienie pól koloru
            this.gameBoxes[0].style.backgroundColor = currentDraw[0];
            this.gameBoxes[1].style.backgroundColor = currentDraw[1];
            this.gameBoxes[2].style.backgroundColor = currentDraw[2];

            // zmiana zawartości portfela w zależności od rezultatu
            this.wallet.changeWallet(this.inputBid.value, this.result.isWin(currentDraw));

            //wypełnienie tablicy wyników
            this.statistics.getResults(this.result.isWin(currentDraw));
            let currentStats = this.statistics.showResults();

            //wyświetlenie wyników w spanach
            this.gamesSpan.textContent = currentStats[0];
            this.winsSpan.textContent = currentStats[1];
            this.lossesSpan.textContent = currentStats[2];

            //pokazanie zawartości portfela
            const currentWalletContent = this.wallet.getWalletValue();
            this.walletContent.textContent = currentWalletContent;

        }
        // this.inputBid.value = '';
    }
}

