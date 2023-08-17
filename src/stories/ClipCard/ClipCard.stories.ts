import { Meta , StoryObj } from '@storybook/vue3'

import ClipCard from '../../components/ClipCard/ClipCard.vue' 

const mata = {
    title: 'Zeelbee/Component/ClipCard',
    component: ClipCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ClipCard>

export default   mata
type story = StoryObj<typeof ClipCard>

export const  ZeelbeeClipCard: story = {
    args: {
    ClipWidth: '100%'
    }

}
