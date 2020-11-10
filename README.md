## vue2 组合APi使用

### 兴起随意写，还是有蛮多地方没考虑到的

### 有愿意一起讨论学习的可以+我哈


#### vomposition2其实是这个的第一个版本但是名字取错了，哈哈

#### 不过在多人协作上不能够很好的知道是否有覆盖其挂载的方法。
#### 推荐在不同入口定义的方法,能够加上namespace前缀来命名。

### api

> Vcomposition2,V2Init 

<img src="https://imgtest.0be.cn/FileUpload/PicFile_Agent2020/11/10/9103404d5f7040bc94ed0271514de5ef.png" alt="图片替换文本" width="350" height="250"/>

> 用来包裹传递对象,会在上面挂载一个root和cd属性

> cd用来模拟computed

> 其余属性都将挂载到root上


### Vcomposition2 >> new Vcomposition2(vueInstance);

> ref  ---> v2.ref("value", "张三");

> reactive  ---> v2.reactive({age: 24,name:'xxn'});

### events 

> 示例 

``` javascript
//生命周期可以嵌套使用
onCreate(()=>{ 
 
 const v2 =   new  Vcomposition2(this);
 const {root} = v2;
 
 /**
  * ref和reactive通过$set实现
  * 不过$set设置完会通知父属性的dep通知watch更新
  * 这里暂时没深入考虑
 */
 const name = v2.ref("name",18);

 //等于正常挂载在methods上的方法
 const setName = (value)=> {
     root.name = value;
 }

 //onUnMounted and onDestroyed 不会挂载返回的方法
 return {
    setName
 }
})
```

> onCreate  ---> created 

> onMounted(使用方式同onCreate) -->  mounted 

> onUnMounted -->  beforeDestroy 

> onDestroyed --> destroyed

> onWatch ---> vue.$watch

> onComputed 

```javascript 
//将会挂载到实例上的cd属性
v2.onComputed("nameSuffix", () => {
    return root.value + "谢谢你";
});
```

> use 可以传入Array的方法泛型 再或者传入单个Funtion 或者链式使用

```javascript
//类似useHook使用

/**
 * this指向的是vue实例
 * @param {Vcomposition2} ctx Vcomposition2的实例
 * @param {object} root ctx下的root
*/
function useInput(ctx,root){

    ctx.ref("inputValue","")

    const setInput = (value) =>{
        
        root.inputValue  = value;
     //or this.root.inputValue = value
    }

    return {
        setInput
    }

}

onCreate(()=>{ 
 
 const v2 =   new  Vcomposition2(this);
 
 v2.use(useInput);//将代码更加细化
})

```

 
