import type { Meta, StoryObj} from '@storybook/vue3';
import GraphCardGroup from '../../components/Graph/GraphCardGroup.vue';

const meta = {
    title: 'Zeelbee/Component/Graph/GraphCardGroup',
    component: GraphCardGroup,
    decorators:[() => ({ template: '<div style="margin: 0em; padding: 1em; background:#F3F4F7; "><story/></div>' })],
} satisfies Meta<typeof GraphCardGroup>
export default meta;

type Story = StoryObj<typeof GraphCardGroup>

export const ZeelbeeGraphCardGroup: Story = {
    args:{
       
    }
}
