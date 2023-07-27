let activeEffect: any
export const effect = (fn: Function) => {
    const _effect = () => {
        activeEffect = _effect
        fn()
    }
    _effect()
}

let targetMap = new WeakMap()
export const track = (target: any, key: any) => {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target,depsMap)
    }
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()
        depsMap.set(key,deps)
    }
    deps.add(activeEffect)
}

export const trigger = (target: any, key: any) => {
    let depsMap = targetMap.get(target)
    let deps = depsMap.get(key)
    deps.forEach((effect:Function) => effect())
}