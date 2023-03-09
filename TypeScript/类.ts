// ts 中类与 js中类差别不大  无非是属性或方法需要指定参数类型

class User{
    father:string
    readonly age:number
    protected grade: string
    static sex:string
    private _fullName: string;
    constructor(){}
    getAge(age:number):number{
       return age
    }
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName:string){
        this._fullName = newName;
    }
}

new User()


//  readonly表示只读
//  protected  受保护的，只能在当前类或子类的内部访问   
//  static 表示静态属性或静态方法  实例无法继承
//  private 表示私有属性或私有方法，(js 中用 #关键字)，只能在类本身的内部使用
//  abstract 开头的类是抽象类    抽象类无法被实例化，只能继承  抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
//  public 公开的 默认都是公开的属性或方法
//  getter 与 setter有js一样


