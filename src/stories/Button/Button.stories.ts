import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../../components/Button/Button.vue';

const meta = {
    title: 'Zeelbee/Component/Button',
    component: Button,
    tags: ['autodocs'],
}satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
    args: {
        color: '#ffffff',
        label: 'Add Payments',
        background: 'bg-zeel-primary',
        hasIcon: true,
        icon: 'add',
        iconPosition: 'left',
      },
}

export const ButtonSecondary: Story = {
    args: {
        color: '#000000',
        label: 'Skip',
        background: 'bg-zeel-secondary',
        hasIcon: true,
        icon: 'skip_next',
        iconPosition: 'right',
    }
}

export const ButtonSuccess: Story = {
    args: {
        color: '#ffffff',
        label: 'Update Payment',
        background: 'bg-zeel-green-400',
        hasIcon: true,
        icon: 'check_circle',
        iconPosition: 'left',
    }
}

export const ButtonDanger: Story = {
    args: {
        color: '#ffffff',
        label: 'Remove Payments',
        background: 'bg-zeel-danger',
        hasIcon: true,
        icon: 'delete',
        iconPosition: 'left',
    }
}