import type { Meta, StoryObj } from '@storybook/vue3'

import Toastify from '../../components/Toastify/Toastify.vue'

const meta = {
    title: "Zeelbee/Component/Toastify", 
    component: Toastify,
    tags: ['autodocs']
} satisfies Meta<typeof Toastify>

export default meta;

type Story = StoryObj<typeof Toastify>

export const ZeelbeeToastifyInfo:Story = {
    args: {
        type: 'info',
        title:"Did you know?",
        message: "Here’s something that you might like to know.",
        showToast: true,
    }
}
export const ZeelbeeToastifySuccess:Story = {
    args: {
        type: 'success',
        title:"Yay! Everything worked!",
        message: "Everything is up and runnig. You’re good to go.",
        showToast: false,
    }
}
export const ZeelbeeToastifyWarning:Story = {
    args: {
        type: 'warning',
        title:"Uh oh, Something went wrong",
        message: "Sorry! There was a problem with your request.",
        showToast: false,
    }
}

export const ZeelbeeToastifyDanger:Story = {
    args: {
        type: 'danger',
        title:"Uh oh, Something went wrong",
        message: "Sorry! There was a problem with your request.",
        showToast: false,
    }
}