import type { Meta, StoryObj } from '@storybook/vue3'

import Modal from '../../components/Modal/Modal.vue'

const meta = {
    title: 'Zeelbee/Component/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>

export default meta

type story = StoryObj<typeof Modal>


export const ZeelbeeModalSmall: story = {
    args: {
        type: 'small',
        isModalShow: true,
    }
}

export const ZeelbeeModalMeduim: story = {
    args: {
        type: 'meduim',
        isModalShow: true,
    }
}

export const ZeelbeeModalLarge: story = {
    args: {
        type: 'large',
        isModalShow: true,
    }
}
