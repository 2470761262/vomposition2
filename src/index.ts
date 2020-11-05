import vue, { ComponentOptions, WatchOptions } from 'vue';

interface Iv2Root extends vue {
    root: any,
    cd: any
}

type callback = (...arg: any[]) => any

class Vcomposition2 {
    vm: Iv2Root;
    root: any = null;
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

    onWatch(exp: string, cb, options: WatchOptions) {
        return this.vm.$watch("root." + exp, cb, options);
    }

    onComputed(key:string, callback: callback) {
        this.vm.$watch(
            callback,
            function (newVal) {
                this.$set(this.cd, key, newVal);
            },
            {
                deep: true,
                immediate: true
            }
        );
    }

    ref(key: string, value: any) {
        this.vm.$set(this.vm.root, key, value);
    }

    // reactive(value) {
    //     return Object.assign(this.vm, (this.vm.$options as any)._base.observable(value));
    // }
}

const V2Init = <T extends vue>(vmOptions: ComponentOptions<T>): ComponentOptions<T> => {
    vmOptions.data = function () {
        return {
            root: {},
            cd: {}
        };
    };
    return vmOptions;
}

export { Vcomposition2, V2Init };
