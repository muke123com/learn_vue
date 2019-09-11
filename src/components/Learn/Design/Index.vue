<template>
  <div class="container">
    <div class="text">{{text}}</div>
    <p class="tips" v-html="tips"></p>
    <div class="btns">
      <button type="button" v-for="(o, key) in methods" :key="key" @click="o.fn">{{o.name}}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      tips: "",
      methods: [
        {
          name: "工厂模式",
          fn: this.factory
        },
        {
          name: "单例模式",
          fn: this.single
        },
        {
          name: "适配器模式",
          fn: this.wrapper
        },
        {
          name: "代理模式",
          fn: this.proxy
        },
        {
          name: "策略模式",
          fn: this.strategy
        },
        {
          name: "迭代器模式",
          fn: this.Iterator
        },
        {
          name: "观察者模式",
          fn: this.observer
        },
      ]
    };
  },
  methods: {
    // 工厂模式
    factory() {
      this.text = `工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。`;
      this.tips = `优点：<br>
                          1、一个调用者想创建一个对象，只要知道其名称就可以了。 <br>
                          2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 <br>
                          3、屏蔽产品的具体实现，调用者只关心产品的接口。<br>
                   缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。`;
      // 创建实体类
      class Rectangle {
        draw() {
          console.log("触发Rectangle::draw()方法");
        }
      }
      class Square {
        draw() {
          console.log("触发Square::draw()方法");
        }
      }
      class Circle {
        draw() {
          console.log("触发Circle::draw()方法");
        }
      }

      class ShapeFactory {
        getShape(shapeType) {
          if(shapeType == null) {
            return null
          }
          shapeType = shapeType.toUpperCase();
          switch(shapeType){
            case "RECTANGLE":
              return new Rectangle();
            case "SQUARE":
              return new Square();
            case "CIRCLE":
              return new Circle();
            default:
              return null
          }
        }
      }

      var shapeFactory = new ShapeFactory();
      var shape1 = shapeFactory.getShape("circle");
      shape1.draw();
      var shape2 = shapeFactory.getShape("Rectangle");
      shape2.draw();

    },
    // 单例模式
    single() {
      this.text = `一个类有且仅有一个实例，并且自行实例化向整个系统提供。`;
      this.tips = `判断系统是否已经有这个单例，如果有则返回，如果没有则创建`;
      class Singleton {
        constructor(name) {
          if (!Singleton.instance) {
            this.name = name;
            Singleton.instance = this;
          }
          return Singleton.instance;
        }
        get() {
          console.log(this.name);
        }
      }
      // 无论new多少次，只会创建一个对象
      let e1 = new Singleton(`e1`);
      let e2 = new Singleton(`e2`);
      e1.get();
      e2.get();
      console.log(e1 === e2);
    },
    // 适配器模式
    wrapper() {
      this.text = `适配器模式的作用是解决接口不兼容的问题，通过创建一个适配器，将原接口转换为客户希望的另一个接口`;
      this.tips = `适配器模式主要解决两个接口之间不匹配的问题，不会改变原有的接口，而是由一个对象对另一个对象的包装。<br>符合开放封闭原则`;
      class GoogleMap {
        show() {
          console.log("渲染谷歌地图");
        }
      }
      class BaiduMap {
        display() {
          console.log("渲染百度地图");
        }
      }
      // 定义适配器类，对BaiduMap类进行封装
      class BaiduMapAdapter {
        show() {
          return new BaiduMap().display();
        }
      }

      function render(map) {
        if (map.show instanceof Function) {
          map.show();
        }
      }

      render(new GoogleMap());
      render(new BaiduMapAdapter());
    },
    // 代理模式
    proxy() {
      this.text = `为其他对象提供一种代理以控制对这个对象的访问。在某些情况下，一个对象不适合或者不能直接引用另一个对象，而代理对象可以在客户端和目标对象之间起到中介的作用。`;
      this.tips = `本体对象和代理对象拥有相同的方法，在用户看来并不知道请求的本体对象还是代理对象。`;
      class MyImage {
        constructor() {
          this.img = new Image();
          document.body.appendChild(this.img);
        }
        setSrc(src) {
          this.img.src = src;
        }
      }

      class ProxyImage {
        constructor() {
          this.proxyImage = new Image();
        }
        setSrc(src) {
          let myImageObj = new MyImage();
          myImageObj.img.src = require("@/assets/loading.gif");
          this.proxyImage.src = src;
          // 由ProxyImage代理，加载完后再将图片交给 MyImage
          this.proxyImage.onload = function() {
            myImageObj.img.src = src;
          };
        }
      }

      var proxyImage = new ProxyImage();
      proxyImage.setSrc(
        "https://www.quandashi.com/qdshome/plus/images/plus-bg.jpg"
      ); //服务器资源url
    },
    // 策略模式
    strategy() {
      this.text = `定义一系列的算法，把它们一个个封装起来，并使它们可以替换`;
      this.tips = `如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。`;
      var fnA = function(val) {
        return val * 1;
      };

      var fnB = function(val) {
        return val * 2;
      };

      var fnC = function(val) {
        return val * 3;
      };

      var calculate = function(fn, val) {
        return fn(val);
      };

      console.log(calculate(fnA, 100)); // 100
      console.log(calculate(fnB, 100)); // 200
      console.log(calculate(fnC, 100)); // 300
    },
    // 迭代器模式
    Iterator() {
      this.text = `迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示`;
      this.tips = `JavaScript中的有序数据集合有Array，Map，Set，String，typeArray，arguments，NodeList，不包括Object<br>
                  任何部署了[Symbol.iterator]接口的数据都可以使用for...of循环遍历<br>
                  迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则`;
      class Creator {
        constructor(list) {
          this.list = list;
        }
        // 创建一个迭代器
        createIterator() {
          return new Iterator(this);
        }
      }

      class Iterator {
        constructor(creater) {
          this.list = creater.list;
          this.index = 0;
        }
        // 判断是否遍历完数据
        isDone() {
          if (this.index >= this.list.length) {
            return true;
          }
          return false;
        }

        next() {
          return this.list[this.index++];
        }
      }

      var arr = [1, 2, 3, 4];
      var creater = new Creator(arr);
      var iterator = creater.createIterator();
      while (!iterator.isDone()) {
        console.log(iterator.next());
      }

      /////////////////////////////////////////////////
      // js自带迭代器
      var iterator2 = arr[Symbol.iterator]();
      console.log(iterator2.next()); // {value: 1, done: false}
      console.log(iterator2.next()); // {value: 2, done: false}
      console.log(iterator2.next()); // {value: 3, done: false}
      console.log(iterator2.next()); // {value: 4, done: false}
      console.log(iterator2.next()); // {value: undefined, done: true}
    },
    // 观察者模式
    observer() {
      this.text = `观察者模式中，一个目标物件管理所有相依于它的观察者物件，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实现事件处理系统。`;
      class Event {
        constructor() {
          this.eventTypeObj = {};
        }
        on(eventType, fn) {
          if (!this.eventTypeObj[eventType]) {
            this.eventTypeObj[eventType] = [];
          }
          this.eventTypeObj[eventType].push(fn);
        }
        emit() {
          var eventType = Array.prototype.shift.call(arguments);
          var eventList = this.eventTypeObj[eventType];
          for (var i = 0; i < eventList.length; i++) {
            eventList[i].apply(eventList[i], arguments);
          }
        }
        remove(eventType, fn) {
          var eventTypeList = this.eventTypeObj[eventType];
          if (!eventTypeList) {
            return false;
          }

          if (!fn) {
            eventTypeList && (eventTypeList.length = 0);
          } else {
            for (var i = 0; i < eventTypeList.length; i++) {
              if (eventTypeList[i] === fn) {
                eventTypeList.splice(i, 1);
                i--;
              }
            }
          }
        }
      }
      var handleFn = function(data) {
        console.log(data);
      };
      var event = new Event();
      event.on("click", handleFn);
      event.emit("click", "1"); // 1
      event.remove("click", handleFn);
      event.emit("click", "2"); // 不打印
    }
  }
};
</script>
<style scoped>
.container {
  padding: 20px;
}
.text {
  margin-bottom: 10px;
  font-size: 15px;
}
.tips {
  padding: 6px;
  font-size: 13px;
  color: #666;
  line-height: 2em;
  background-color: #eee;
  border-radius: 2px;
}
.btns {
  margin-top: 10px;
}
button {
  padding: 5px 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 2px;
}
</style>