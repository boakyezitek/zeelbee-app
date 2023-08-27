import type { Meta, StoryObj  } from "@storybook/vue3";

import PriceCardsGroups from '../../components/PriceCard/PriceCardGroups.vue'

const meta = {
    title: 'Zeelbee/component/PriceCards',
    component: PriceCardsGroups,
    tags: ['autodocs'],
    decorators: [() => ({template: '<div style="background: #F3F4F7; height:100vh; padding-top: 48px; padding-left: 40px; padding-right: 40px; "><story/></div>'}) ],
} satisfies Meta<typeof PriceCardsGroups>

export default meta
type story = StoryObj<typeof PriceCardsGroups>


    export const   PriceGroupsViews:story ={
        args: {}
    }













