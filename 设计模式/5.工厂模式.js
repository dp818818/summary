// 工厂模式是用来创建对象的常见设计模式，在不暴露创建对象的具体逻辑，而是将逻辑进行封装，那么它就可以被称为工厂


class Jacket {
    constructor(){
        this.production()
    }
    production() {
        console.log('生产夹克')
    }
}
class Tshirt {
    constructor(){
        this.production()
    }
    production() {
        console.log('生产Tshirt')
    }
}
class Underware {
    constructor(){
        this.production()
    }
    production() {
        console.log('生产内衣')
    }
}



class clothingFactory {
    constructor() {
        this.Jacket = Jacket;
        this.Tshirt = Tshirt;
        this.Underware = Underware;
    }
    getFactory(clothingName) {
        return new this[clothingName]
    }
}


let factory = new clothingFactory()
factory.getFactory("Jacket")
factory.getFactory("Tshirt")