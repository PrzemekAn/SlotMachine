class Wallet{
    constructor(money){
        let _money = money;

        this.getWalletValue = () => {
            return _money;
        }

        this.checkCanPlay = (value) => {
            if(_money >= value && value >= 1){
                return true;
            }
            return false;
        }

        this.changeWallet = (value, win) => {
            if(win === true){
                _money += value * 3;
            }
            else if (win === false){
                _money -= value;
            }

        }
    }   
}

// const wallet = new Wallet(300);