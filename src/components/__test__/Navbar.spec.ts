import { describe, it , expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "../NavBar/NavBar.vue";


describe("Navbar.Vue", () => {
  const wrapper = mount(NavBar)

  it("div element should hide when props hasIcon is not set to true", () => {
  const divElement = wrapper.find('div')
  expect(divElement.exists()).toBe(true)
  })

  it('div element should show when props isActive is set to true .', async() => {
    await wrapper.setProps({
      isActive: true,
    })
    const divElement = wrapper.find('[data-test="is-active"]')
    expect(divElement.exists()).toBe(true)
})


  it("Compnents Exists", () => {
      expect(wrapper.exists()).toBe(true)
  })
  
  it("isActive Props exists", async() => {
     await wrapper.setProps({isActive: true})
     expect(wrapper.vm.isActive).toBe(true)
  })

  it("Name props exists", async() => {
    await wrapper.setProps({name: "Salung Prastyo"})
    expect(wrapper.vm.name).toBe("Salung Prastyo")
  })


})















