class Wallet{
    constructor(money){
        let _money = money;
        let _winMoney;

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
        
        this.wonMoney = (value,win) => {
            if(win === true){
                _winMoney = `Wygrałeś ${value*3}$.`
                
            }
            else if(win === false){
                _winMoney = `Przegrałeś ${value}$.`;
            }
            return _winMoney;
        }
    }   
}

// const wallet = new Wallet(300);