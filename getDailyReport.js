function convertToMoney(val){
    return (Math.floor(val*100).toFixed(0)/100).toFixed(2);
}
class dailyReport {
    constructor(net,transactions,TMN) {
        this.TMN = TMN + net
        this.net = net
        this.transactions = transactions
        this.average = convertToMoney(net / transactions)
        this.OPF = ''
    }
    now = new Date()

    getOPF () {
        const year = this.now.getFullYear();
        const month = this.now.getMonth(); 
        const day = this.now.getDate();    
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const result = convertToMoney(this.TMN * daysInMonth / day);
        return result
    }
        
    
    getReport () {
        console.log('Eagle Creek')
        console.log(this.now.toLocaleDateString())
        console.log(`Net: $${this.net}`)
        console.log(`Average: $${this.average}`)
        console.log(`TMN: $${this.TMN}`)
        console.log(`OPF: $${this.getOPF()}`)
    }
}

let net = 95.46 //TODO: rework these values to be gained from the UI
let transactions = 6
let TMN = 0

let reportForToday = new dailyReport(net,transactions,TMN)
reportForToday.getReport()
