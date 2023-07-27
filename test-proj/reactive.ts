import { track, trigger } from './effect'
export function isObject<T extends Object>(target: T) {
    return target !== null && typeof target === 'object'
}
export function reactive<T extends object>(target: T): any {
    return new Proxy(target, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver) as object
            track(target, key)
            if (isObject(res)) {
                return reactive(res)
            }
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            trigger(target, key)
            return res
        },
    })
}