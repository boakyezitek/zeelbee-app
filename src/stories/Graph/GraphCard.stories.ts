import type { Meta, StoryObj} from '@storybook/vue3';
import GraphCard from '../../components/Graph/GraphCard.vue';

const meta = {
    title: 'Zeelbee/Component/Graph/GraphCard',
    component: GraphCard,
    tags: ['autodocs'],
    decorators:[() => ({ template: '<div style="margin: 0em; padding: 3em; background:#F3F4F7; "><story/></div>' })],
} satisfies Meta<typeof GraphCard>
export default meta;

type Story = StoryObj<typeof GraphCard>

export const ZeelbeeGraphCard: Story = {
    args:{
        title: 'Revenue',
        value: 25000,
        has_balance: true,
        balance: 199,
        currency: '$'
    }
}

export const ZeelbeeRevenueGraphCard: Story = {
    args:{
        title: 'Revenue',
        value: 25000,
        has_balance: true,
        balance: 199,
        currency: '$'
    }
}

export const ZeelbeePurchaseGraphCard: Story = {
    args:{
        title: 'Purchases',
        value: 34,
        has_balance: false,
    }
}

export const ZeelbeeVisitGraphCard: Story = {
    args:{
        title: 'Visits',
        value: 34,
        has_balance: false,
    }
}


export const ZeelbeeConversionGraphCard: Story = {
    args:{
        title: 'Conversions',
        value: '45%',
        has_balance: false,
    }
}