
//物件導向

//方式1:
function heroCreatorV1(name){
    const h ={
        name: name,
        attack: function(){
            console.log("attack!");
      },
    };

    return h;
}

const h1 = heroCreatorV1("cc");
const h2 = heroCreatorV1("dd")


// ----------------分隔線------------------

//JS中每一個物件都有一個“隱藏”屬性叫做[[Prototype]]，它指向另一個物件，形成「原型鏈 (prototype chain)」。__proto__ 就是這個隱藏屬性的存取方式。

//物件導向
//方式2:

const actions = {
    attack: function(){
        console.log("attack!");
    },

    sleep: function(){
        console.log("ZZZ");
    },
}

function heroCreatorV2(name){

    //下方const j=...這行的行為
    //等同於{...}.__proto__
    const j = Object.create(actions);

    //等價寫法
    //j.__proto__ = actions ;
    //意思是把j的原型設定成action這個物件
    
    j.name = name;

    return j;
}

const j1 = heroCreatorV2("cc");
const j2 = heroCreatorV2("dd")

// ----------------分隔線------------------

//物件導向
//方式3:
function heroCreatorV3(name){   

    //這邊k1創造後預設{..}.__proto__ 會指向哪裡？ --> 指向生他的function的prototype
    //你可以k1.__proto__ === heroCreatorV3.prototype去測試
    this.name = name;
}

heroCreatorV3.prototype = actions; //你也可以改變heroCreatorV3的prototype，去改變k1的

heroCreatorV3.prototype.cc = 123    //增加新功能cc，可以h1.cc得到123
heroCreatorV3.prototype.email = true  //所以，意思是只要所有透過heroCreatorV3去new出來的都會有

const k1 = new heroCreatorV3("cc")
//這邊沒有寫new會什麼結果?            //undefined，有寫new是物件，沒寫new就像是方法的傳值而已。所以除非你去那function裡面加上return


// ----------------分隔線------------------

//物件導向
//方式4:

//可以用typeof(heroCreatorV4)去看，這是什麼？           //function
class heroCreatorV4{
    constructor(name){
        this.name = name;
    }

    attack(){
        console.log('attack!');
    }
    
    sleep(){
        console.log('ZZZ');
    }
}

const h4 = new heroCreatorV4("cc");     //然後沒有new是什麼？       //undefined，原因同於上方問過的

// ----------------分隔線------------------

function cc(){
    return 100;
}

const c = new cc();     
console.log(cc);    //這邊答案什麼？如果上方的100改成陣列之類的呢?  //        


//this = 代名詞

