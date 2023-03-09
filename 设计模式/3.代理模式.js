// 当不方便直接访问一个对象时，提供一个替身对象来控制这个对象的访问，替身对象经过一系列处理后，再把请求转给本体对象


class Staff {
    constructor(ask) {
        this.ask = ask
    }
    applyFor(target) {
        target.work(this.ask)
    }
}



class Secretary {
    constructor() {
       this.leader = new Leader()
    }
    work(affair) {
        this.leader.work(affair)
    }
}



class Leader {
    work() {
       console.log('同意！')
    }
}



var staff =  new Staff('要求加薪')
staff.applyFor(new Secretary())
