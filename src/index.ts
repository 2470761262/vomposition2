import {
    Iv2Root,
    callback,
    ComponentOptions,
    WatchOptions,
    vue,
} from "./inedx";
class Vcomposition2 {
    vm: Iv2Root;
    root: any;
    constructor(vm: Iv2Root) {
        this.vm = vm;
        this.root = this.vm.root;
    }

    onCreate(callback: callback) {
        this.vm.$on("hook:created", () => {
            const methods: any = callback();
            methods && Object.assign(this.vm, methods);
        });
    }

    onMounted(callback: callback) {
        this.vm.$on("hook:mounted", () => {
            const methods: any = callback();
            methods && Object.assign(this.vm, methods);
        });
    }

    onUnMounted(callback: callback) {
        this.vm.$on("hook:beforeDestroy", callback);
    }

    onDestroyed(callback: callback) {
        this.vm.$on("hook:destroyed", callback);
    }

    onWatch(exp: string, cb: callback, options: WatchOptions) {
        return this.vm.$watch("root." + exp, cb, options);
    }

    onComputed(key: string, callback: callback) {
        this.vm.$watch(
            callback,
            function (newVal) {
                this.$set(this.cd, key, newVal);
            },
            {
                deep: true,
                immediate: true,
            }
        );
    }

    ref(key: string, value: any) {
        this.vm.$set(this.vm.root, key, value);
    }

    use(callback:callback):Vcomposition2{
        const methods: any = callback.call(this.vm,this,this.root);
        methods && Object.assign(this.vm, methods);
        return this;
    }
}

const V2Init = <T extends vue>(
    vmOptions: ComponentOptions<T>
): ComponentOptions<T> => {

    // 但是vue是在有实例的时候去执行的data
    //会给data传入当前的vue实例,而我这里还没有实例,也就是说data里的对象不能写this
    const optionsData = vmOptions.data ? (vmOptions.data as Function)() : {}

    vmOptions.data = function () {
        return {
            ...optionsData,
            root: {},
            cd: {},
        };
    };
    return vmOptions;
};

export { Vcomposition2, V2Init };
