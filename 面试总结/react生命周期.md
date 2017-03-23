### react的生命周期（大体上分为三个）
   1. Mounting：组件被创建并插入到DOM(componentDidMount渲染后调用，可以通过this.getDOMNode()，可以发送ajax请求)
   2. Updating：state改变，正在被重新渲染（shouldComponentUpdate 在组件接收到新的props或者state时调用；componentDidUpdate 在组件更新后立即调用。）
   3. Unmounting：从DOM中移除组件（componentWillUnmount在组件从 DOM 中移除的时候立刻被调用）

### 生命周期提供的API
3个生命周期，提供了10个api,我做了[测试](http://codepen.io/yuzai20/pen/VpQPvR),测试了其中9个api发生的时机，除了api6,别的都理了一遍。
1. 实例化(mounting)，这个我更希望能够翻译成挂载，也就是将虚拟dom挂载到真实dom上

      首次实例化
      getDefaultProps(api1):只会在实例化的时候执行一次
      getInitialState(api2)
      componentWillMount(api3)
      render(api4)
      componentDidMount(api5)

      实例化完成后的更新
      getInitialState(api2)
      componentWillMount(api3)
      render(api4)
      componentDidMount(api5)

2. 存在期(updating)，这个存在期的叫法其实挺好，很形象，英文用mounted感觉更好
      组件已存在时的状态改变
      componentWillReceiveProps(api6)
      shouldComponentUpdate(api7)
      componentWillUpdate(api8)
      render
      componentDidUpdate(api9)

3. 销毁&清理期(Unmounting)，这个翻译成取消挂载，也就是将组件从真实dom上解除挂载
      componentWillUnmount(api10)

### 关于ajax
事实上，react其实和ajax单独的操作没什么关系，但是有一种比较常见的实际使用的场景应该是这样：
1. react创建实例，也就是componentDidMount之后，此时这个组件已经render到实际的dom树中，此时，需要通过ajax从后端获取数据并展示。
2. 实现的方案很简单，通过正常的ajax获取数据，问题在于ajax回调函数的写法，在回调中，如何将数据反映到dom上，事实上，解决方案也很简单，就是回调中通过setState来更新state，从而达到组件的更新。但是问题在于 **回调的时候setState()函数执行的时机很关键**，如果执行setState的时候组件没有componentDidMount，那么这个时候react内部就会报错，也应该报错（因为这个时候react还没有把虚拟dom真正应用到真实dom上）。
3. 综上，在react中，ajax的获取应该放在componentDidMount生命周期函数中，同时在回调执行setState时最好判断一下this.isMounted()来决定是否执行setState,最大可能的避免报错
一个ajax[小例子](http://codepen.io/yuzai20/pen/evVvwN?editors=1010)
