import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordInput from "../../components/Form/PasswordInput/PasswordInput.vue";


const meta = {
  title: 'Zeelbee/Component/Form/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
}satisfies  Meta<typeof PasswordInput>

export default meta;

type story = StoryObj<typeof PasswordInput>;

export  const ZeelBeePasswordInput: story = {
    args: {}
}




















