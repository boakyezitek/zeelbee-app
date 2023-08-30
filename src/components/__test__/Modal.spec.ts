import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import Modal from '../Modal/Modal.vue'

describe('Modal Component', () => {
    const wrapper = mount(Modal, {
        propsData: {
            type: 'meduim',
            title: 'Testing App Title',
            isModalShow: false,
        }
    })

    it('Component exit', () => {
        expect(wrapper.exists()).toBe(true)
    })

    describe('Modal component render', () => {
       it('modal container div should not show', () => {
        const modalContainer =  wrapper.find('data-test=["modal-container"]');
        expect(modalContainer.exists()).toBe(false)
       })

       it('displays modal when isModalShow is true', async () => {
        const wrapper = mount(Modal, {
          props: {
            isModalShow: true,
          },
        });
    
        // Wait for the next tick for Vue to render the Teleport element
        await wrapper.vm.$nextTick();
    
        // Check if the modal container exists in the body
        expect(document.body.querySelector('[data-test="modal-container"]')).toBeTruthy();
      });

    //   it('emits "hide" event when close icon is clicked', async () => {
    //     await wrapper.setProps({ isModalShow: true})
    
    //     // Wait for the next tick for Vue to render the Teleport element
    //     await wrapper.vm.$nextTick();
    
    //     // Find and click the close icon
    //    wrapper.find('[data-test="modal-close-icon"]').trigger('click');
    
    //     // Expect the "hide" event to be emitted
    //     expect(wrapper.emitted('hide')).toBeTruthy();
    //   });

    })
})