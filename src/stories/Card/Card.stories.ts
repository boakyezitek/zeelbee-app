import type { Meta, StoryObj } from '@storybook/vue3';

import Card from "../../components/Card/Card.vue";

const meta = {
  title: 'Zeelbee/Component/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const ZeelbeeCard: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #body>
         <h1>Hello Title</h1>
        </template>
      </Card>
    `,
    args: {
        type: 'primary'
    }
  }),
  args: {
   
  },
};