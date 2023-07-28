let activeEffect: any
interface options {
    scheduler?: Function
}
export const effect = (fn: Function, options?: options) => {
    let res
    const _effect = () => {
        activeEffect = _effect
        res = fn()
        return res
    }
    _effect.options = options
    _effect()
    return _effect
}

let targetMap = new WeakMap()
export const track = (target: any, key: any) => {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()
        depsMap.set(key, deps)
    }
    deps.add(activeEffect)
}

export const trigger = (target: any, key: any) => {
    let depsMap = targetMap.get(target)
    let deps = depsMap.get(key)
    deps.forEach((effect: any) => {
        if (effect?.options?.scheduler) {
            effect.options.scheduler?.()
        } else {
            effect()
        }
    })
}