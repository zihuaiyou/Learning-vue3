let activeEffect;
export const effect = (fn, options) => {
    let res;
    const _effect = () => {
        activeEffect = _effect;
        res = fn();
        return res;
    };
    _effect.options = options;
    _effect();
    return _effect;
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
    deps.forEach((effect) => {
        var _a, _b, _c;
        if ((_a = effect === null || effect === void 0 ? void 0 : effect.options) === null || _a === void 0 ? void 0 : _a.scheduler) {
            (_c = (_b = effect.options).scheduler) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
        else {
            effect();
        }
    });
};
