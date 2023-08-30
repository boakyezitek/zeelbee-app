import { expect, it , describe } from "vitest"
import { mount } from "@vue/test-utils"
import ClipCard from "../ClipCard/ClipCard.vue"


describe("ClipCard.Vue" , () => {
  const wrapper = mount(ClipCard)
   
  it("Component exists",  () => {
     expect(wrapper.exists()).toBe(true)
  })

  it("ClipWidth Props exists", async() => {
await  wrapper.setProps({ClipWidth: "100%"})
expect(wrapper.vm.ClipWidth).toBe("100%")
  })

})















