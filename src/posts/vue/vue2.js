export function observe(data) {
    if (typeof data !== 'object' || data == null) {
        return;
    }
    //已经被监控过了
    if (data.__ob__) {
        return data.__ob__;
    }
    return new Observer(data);
}

