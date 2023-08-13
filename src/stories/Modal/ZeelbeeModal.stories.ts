import type { Meta, StoryObj } from "@storybook/vue3"

import ZeelBeeModal from "../../components/Modal/ZeelBeeModal.vue"

const meta = {
    title: 'Zeelbee/Component/Modal',
    component: ZeelBeeModal,
    tags: ['autodocs']
} satisfies Meta<typeof ZeelBeeModal>

export default meta

type story = StoryObj<typeof ZeelBeeModal>;

export const ZeelBeeModalView:story = {
    args: {}
}