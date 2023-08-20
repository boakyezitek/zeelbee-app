import type { Meta, StoryObj } from "@storybook/vue3";

import FormWizard from '../../components/Wizard/FormWizard.vue';

const meta = {
    title: "Zeelbee/Component/FormWizard",
    component: FormWizard
} satisfies Meta<typeof FormWizard>

export default meta;

type Story = StoryObj<typeof FormWizard >

export const ZeelbeeFormWizard:Story = {
    args: {}
}