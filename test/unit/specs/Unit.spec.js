import Vue from 'vue'
import Unit from '@/components/Learn/UnitTest/Unit'

describe('Unit.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Unit)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })

  it('测试按钮点击', () => {
    const Constructor = Vue.extend(Unit)
    const vm = new Constructor().$mount()

    vm.text = "123";

    const button = vm.$el.querySelector('button');
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent);
    vm._watcher.run();

    expect(vm.text).toEqual("456")
  })
})
