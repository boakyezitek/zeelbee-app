import type { Meta , StoryObj } from '@storybook/vue3'

import PriceCard from '../../components/PriceCard/PriceCard.vue' 

const meta = {
    title: 'Zeelbee/Component/PriceCard',
    component: PriceCard,
    decorators: [() => ({template: '<div style=" width: 330px"><story/></div>'}) ],
} satisfies Meta<typeof PriceCard>

export default meta
type story = StoryObj<typeof PriceCard>

export const  ZeelbeePriceCardFree: story = {
    args: {
        type: 'Free',
        title:'Free',
     numbers: '€0' ,
     
    }

}

export const  ZeelbeePriceCardPro: story = {
    args: {
        type: 'Pro',
        title:'Pro',
     numbers: '€29.99' ,
     showButton:true,
    }

}

export const  ZeelbeePriceCardBussiness: story = {
    args: {
        type: 'Bussiness',
        title:'Bussiness',
        numbers: '€199.99' ,
        showButton:true,
    }

}