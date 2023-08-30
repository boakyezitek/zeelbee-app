import { describe, it , expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "../NavBar/NavBar.vue";


describe("Navbar.Vue", () => {
  const wrapper = mount(NavBar)

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

//   it("checks image variable", async() => {
//     await wrapper.setData({image: "eclips"})
//     expect(wrapper.vm.name).toBe("eclips")
//   })

})















