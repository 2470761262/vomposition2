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
            methods && (Object as any).assign(this.vm, methods);
        });
    }

    onMounted(callback: callback) {
        this.vm.$on("hook:mounted", () => {
            const methods: any = callback();
            methods && (Object as any).assign(this.vm, methods);
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
}

const V2Init = <T extends vue>(
    vmOptions: ComponentOptions<T>
): ComponentOptions<T> => {

    //这里会提示没有调用签名,改如何解决
    //没有没有大佬带带
    const optionsData = vmOptions.data ? (vmOptions as any).data() : {}

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
