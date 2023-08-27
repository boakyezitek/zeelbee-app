import type { Meta, StoryObj } from "@storybook/vue3";

import Navbar from "../../components/NavBar/NavBar.vue"

const meta = {
    title: 'Zeelbee/component/Navbar',
    component: Navbar,
    decorators:[() => ({ template: '<div style="margin: 0em; padding: 1.5em; background:#F3F4F7; "><story/></div>' })],
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