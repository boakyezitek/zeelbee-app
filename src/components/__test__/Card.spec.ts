import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Card from '../Card/Card.vue';

describe('Card.vue', () => {
    const wrapper = mount(Card);

    it('Expect card component to exit', () => {
        expect(wrapper.exists()).toBe(true);
    })
})