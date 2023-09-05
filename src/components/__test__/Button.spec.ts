import { describe, it, expect, afterEach } from "vitest";
import { mount, enableAutoUnmount } from '@vue/test-utils'

import Button from '../Button/Button.vue';


describe('Button.vue', () => {
    // enableAutoUnmount(afterEach)
    const wrapper = mount(Button, {
        propsData: {
            color: '#fff',
            label: "Click Me",
            background: "bg-zeel-primary",
            hasIcon: false,
            icon:  "",
            iconPosition: "left",
        }
    });
    const buttonElement = wrapper.find('[data-test="button"]');

    it('Button component exit', () => {
        expect(wrapper.exists()).toBe(true)
    })

    describe('Button component render', () => {

        it('Button props', () => {
            expect(wrapper.props('color')).toBe('#fff');
            expect(wrapper.props('label')).toBe('Click Me');
            expect(wrapper.props('background')).toBe('bg-zeel-primary');
            expect(wrapper.props('hasIcon')).toBe(false);
            expect(wrapper.props('icon')).toBe('');
            expect(wrapper.props('iconPosition')).toBe('left');
        })
    
        it('button element exit', () => {
            expect(buttonElement.exists()).toBe(true)
        })
    
        it('span element should hide when props hasIcon is not set to true', () => {
            const spanElement = wrapper.find('span')
            expect(spanElement.exists()).toBe(false)
        })

        
        it('span element should show when props hasIcon is set to true and icon positon set to left', async() => {
            await wrapper.setProps({
                hasIcon: true,
                iconPosition: 'left'
            })
            const spanElement = wrapper.find('[data-test="icon-left"]')
            expect(spanElement.exists()).toBe(true)
        })

        it('span element should show when props hasIcon is set to true and icon positon set to right', async() => {
            await wrapper.setProps({
                hasIcon: true,
                iconPosition: 'right'
            })
            const spanElement = wrapper.find('[data-test="icon-right"]')
            expect(spanElement.exists()).toBe(true)
        })
    
    })

    describe('Button component interaction', () => {

        it('show label Click Me',async () => {
            await wrapper.setProps({lable: "Click Me"})
            const buttonElement = wrapper.find('[data-test="button"]');
            expect(buttonElement.text()).toBe('Click Me');
        })

        it('check computed classes', async() => {
            await wrapper.setProps({ background: "bg-zeel-primary"})
            const buttonElement = wrapper.find('[data-test="button"]');
            expect(buttonElement.classes()).toContain('bg-zeel-primary')
        })

        it('check computed sytles', async() => {
            await wrapper.setProps({ color: "#fff" })
            const buttonElement = wrapper.find('[data-test="button"]');
            expect(buttonElement.element.style.color).toBe('rgb(255, 255, 255)');
        })

        it('show icon label in icon left span', async() => {
            await wrapper.setProps({ icon: 'plus', hasIcon: true, iconPosition: 'left' })
            const iconLeft = wrapper.find('[data-test="icon-left"]')
            expect(iconLeft.text()).toBe('plus')
        })

        
        it('show icon label in icon right span', async() => {
            await wrapper.setProps({ icon: 'plus', hasIcon: true, iconPosition: 'right' })
            const iconRight = wrapper.find('[data-test="icon-right"]')
            expect(iconRight.text()).toBe('plus')
        })
    })

})
