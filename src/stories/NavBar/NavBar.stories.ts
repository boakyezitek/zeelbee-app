import { Meta, StoryObj } from "@storybook/vue3";

import Navbar from "../../components/NavBar/NavBar.vue"

const meta = {
    title: 'Zeelbee/component/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type story = StoryObj <typeof alert>

export const ZeelbeeNavbar: story ={
    args: {
        name: 'Salung Prastyo',
        isActive: true,
    }
}