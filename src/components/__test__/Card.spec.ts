import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Card from '../Card/Card.vue';

describe('Card.vue', () => {
    const wrapper = mount(Card, {
        slots: { body: 'this is description'}
    });

    it('component exit', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('correct render slot', () => {
        expect(wrapper.find('div').text()).toBe('this is description')
    })

    it('wrong slot render', () => {
        expect(wrapper.find('div').text()).not.toBe('This is description')
    })
    
})