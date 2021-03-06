/*
 *  SyncHook 的实现原理
 * 串行同步执行
 * 不必关心返回值
 * 
 * @Author: isam2016 
 * @Date: 2019-04-28 17:18:40 
 * @Last Modified by: isam2016
 * @Last Modified time: 2019-04-28 17:24:21
 */



class SyncHook {
    constructor() {
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call() {
        this.tasks.forEach(task => task(...arguments));
    }
}

let queue = new SyncHook(['name']);
queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.call('zfpx');