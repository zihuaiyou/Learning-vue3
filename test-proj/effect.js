let activeEffect;
export const effect = (fn) => {
    const _effect = () => {
        activeEffect = _effect;
        fn();
    };
    _effect();
};
let targetMap = new WeakMap();
export const track = (target, key) => {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};
export const trigger = (target, key) => {
    let depsMap = targetMap.get(target);
    let deps = depsMap.get(key);
    deps.forEach((effect) => effect());
};
