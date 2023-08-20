import type { Meta, StoryObj} from '@storybook/vue3';
import GraphCard from '../../components/Graph/GraphCard.vue';

const meta = {
    title: 'Zeelbee/Component/Graph/GraphCard',
    component: GraphCard,
} satisfies Meta<typeof GraphCard>
export default meta;

type Story = StoryObj<typeof GraphCard>

export const ZeelbeeGraphCard: Story = {
    args:{

    }
}