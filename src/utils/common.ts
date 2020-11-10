/**
 * 获取路由上面的参数
 * @param search
 */
export function getRouteParams(search?: string): { [propsName: string]: any } {
    const params: { [propsName: string]: any } = {};
    const _search: string = search || window.location.href.split('?')[1];
    if (!_search) return {};
    // @ts-ignore
    _search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
        params[k] = decodeURIComponent(v);
    });
    return params;
}

/**
 * 判断值是否为空(null, undefined, '')
 * @param value {any} 被判断的值
 * @param isObject {boolean} 是否判断对象类型(object, array)
 * @return {boolean} 是空为true，反之false
 */
export function checkValue(value: any, isObject: boolean = false): boolean {
    if (isObject) {
        if (Array.isArray(value)) return value.length === 0;
        if (Object.prototype.toString.call(value) === '[Object Object]') return Object.entries(value).length === 0;
    }
    return typeof value === 'undefined' || value === null || value === '';
}

/**
 * 格式化数据，为空 显示 '-'
 * @param value {any} 被格式化的值
 * @param deep {boolean} 是否要将数组、对象等格式化为 '-'
 * @return {'-' | value}
 */
export function formatValue(value: any, deep: boolean = false): '-' | any {
    return checkValue(value, deep) ? '-' : value;
}
