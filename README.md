虽然能够更好的组织代码。
但是在多人协作上不能够很好的知道是否有覆盖其挂载的方法。
推荐在不同入口定义的方法,能够加上namespace前缀来命名。

```html
    <div id="app">
      <p>----reactive----</p>
      <p>{{age}}</p>
      <p>----嵌套生命周期创建属性----</p>
      <p>{{root.soso}}</p>
      <p>----main-----</p>
      <p>{{root.value}}</p>
      <p>{{cd.nameSuffix}}</p>
      <p>----other-----</p>
      <p>{{root.value1}}</p>
      <p>{{cd.nameSuffix1}}</p>
    </div>
```
```javascript
    import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
    import { Vcomposition2, V2Init } from "./index.js";

    new Vue(
      V2Init({
        el: "#app",
        created: [main, other],
      })
    );

    function main() {
      const v2 = new Vcomposition2(this);
      const { root } = v2;
      v2.onCreate(() => {
        v2.ref("value", "张三");

        // v2.reactive({
        //   age: 24,
        // });

        setTimeout(() => {
          this.age = 18;
        }, 500);

        this.$watch("name", (value) => {
          console.log("xxx", value);
        });

        setTimeout(() => {
          root.value = "李四";
        }, 2000);

        v2.onWatch("value", (value) => {
          console.log("监听value变化", value);
        });

        v2.onComputed("nameSuffix", () => {
          return root.value + "谢谢你";
        });

        v2.onMounted(() => {
          v2.ref("soso", "神魔恋");

          setTimeout(() => {
            root.soso = "肉蛋冲击";
          }, 2000);
        });
      });

      v2.onMounted(() => {
        console.log("执行Mounted方法");
      });
    }

    function other() {
      const v2 = new Vcomposition2(this);
      const { root } = v2;
      v2.onCreate(() => {
        this.$set(root, "value1", "王五1");

        setTimeout(() => {
          root.value1 = "赵六1";
        }, 2000);

        v2.onWatch("value1", (value) => {
          console.log("监听value1变化", value);
        });

        v2.onComputed("nameSuffix1", () => {
          return root.value1 + "谢谢你1";
        });
      });

      v2.onMounted(() => {
        console.log("执行Mounted1方法");
      });
    }

```
