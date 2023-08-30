import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import alert from "../Alert/alert.vue";

describe("Alert.Vue", () => {
  const wrapper = mount(alert);

  it("component exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

//  primary props
  it("primary props exits", async () => {
    const wrapper = mount(alert);

    await wrapper.setProps({ type: "primary" });
    expect(wrapper.vm.type).toBe("primary");
  });
   
  it("primary title exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({title: "primary"})
    expect(wrapper.vm.title).toBe("primary")
  })

  it("primary background exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({background: "#f3f6ff"})
    expect(wrapper.vm.background).toBe("#f3f6ff")
  })



  //  secondry props
  it("secondry props exits", async () => {
    const wrapper = mount(alert);

    await wrapper.setProps({ type: "secondry" });
    expect(wrapper.vm.type).toBe("secondry");
  });
   
  it("secondry title exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({title: "secondry"})
    expect(wrapper.vm.title).toBe("secondry")
  })

  it("secondry background exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({background: "#F3F4F7"})
    expect(wrapper.vm.background).toBe("#F3F4F7")
  })


  //  warning props
  it("warning props exits", async () => {
    const wrapper = mount(alert);

    await wrapper.setProps({ type: "warning" });
    expect(wrapper.vm.type).toBe("warning");
  });
   
  it("warning title exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({title: "warning"})
    expect(wrapper.vm.title).toBe("warning")
  })
  it("warning background exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({background: "#Fdf4f4"})
    expect(wrapper.vm.background).toBe("#Fdf4f4")
  })


   //  danger props
   it("danger props exits", async () => {
    const wrapper = mount(alert);

    await wrapper.setProps({ type: "danger" });
    expect(wrapper.vm.type).toBe("danger");
  });
   
  it("danger title exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({title: "danger"})
    expect(wrapper.vm.title).toBe("danger")
  })

   
  it("danger background exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({background: "#fdf4f4"})
    expect(wrapper.vm.background).toBe("#fdf4f4")
  })

  
  //  success props
  it("success props exits", async () => {
    const wrapper = mount(alert);

    await wrapper.setProps({ type: "success" });
    expect(wrapper.vm.type).toBe("success");
  });
   
  it("success title exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({title: "success"})
    expect(wrapper.vm.title).toBe("success")
  })

  it("success background exits", async() => {
    const wrapper = mount(alert);
    
    await wrapper.setProps({background: "#f1f7f5"})
    expect(wrapper.vm.background).toBe("#f1f7f5")
  })

});






