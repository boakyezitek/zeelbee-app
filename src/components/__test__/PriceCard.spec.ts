import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PriceCard from "../PriceCard/PriceCard.vue";

describe("PriceCard.Vue", () => {
  const wrapper = mount(PriceCard);

  it("Component exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  //   free props exist
  it("Free props type exits", async () => {
     await wrapper.setProps({type: "Free",})
     expect(wrapper.props("type")).toBe("Free")
  });

  it("Free props showButton  exits", async () => {
    await wrapper.setProps({showButton: false,})
    expect(wrapper.vm.showButton).toBe(false)
 });

 it("Free props title exits", async () => {
    await wrapper.setProps({title: "Free",})
    expect(wrapper.vm.title).toBe("Free")
 });

 it("Free props numbers exits", async () => {
    await wrapper.setProps({numbers: "€0",})
    expect(wrapper.vm.numbers).toBe("€0")
 });


   //   Pro props exist
   it("Pro props type exits", async () => {
    await wrapper.setProps({type: "Pro",})
    expect(wrapper.props("type")).toBe("Pro")
 });

 it("Pro props showButton  exits", async () => {
   await wrapper.setProps({showButton: true,})
   expect(wrapper.vm.showButton).toBe(true)
});

it("Pro props title exits", async () => {
   await wrapper.setProps({title: "Pro",})
   expect(wrapper.vm.title).toBe("Pro")
});

it("Pro props numbers exits", async () => {
   await wrapper.setProps({numbers: "€29.99",})
   expect(wrapper.vm.numbers).toBe("€29.99")
});


//  Business props exist\
it("Business props numbers exits", async() => {
await  wrapper.setProps({title:"Bussiness"}) 
expect(wrapper.vm.title).toBe("Bussiness")
})

it("Business props numbers exits", async() => {

   await wrapper.setProps({numbers: "€199.99"})
  expect(wrapper.vm.numbers).toBe("€199.99")
})


it("Business props showButton  exits", async () => {
   await wrapper.setProps({showButton: true,})
   expect(wrapper.vm.showButton).toBe(true)
});

});
