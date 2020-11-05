import vue, { ComponentOptions, WatchOptions } from "vue";

export interface Iv2Root extends vue {
  root: any;
  cd: any;
}
export type callback = (...arg: any[]) => any;

export class Vcomposition2 {
  constructor(vm: Iv2Root);

  onCreate(callback: callback): void;

  onMounted(callback: callback): void;

  onUnMounted(callback: callback): void;

  onDestroyed(callback: callback): void;

  onWatch(exp: string, cb: callback, options: WatchOptions): callback;

  onComputed(key: string, callback: callback): void;

  ref(key: string, value: any): void;
}

export const V2Init: <T extends vue>(
  vmOptions: ComponentOptions<T>
) => ComponentOptions<T>;

export { ComponentOptions, WatchOptions, vue };
