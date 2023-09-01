import type { Meta, StoryObj } from "@storybook/vue3";
import Login from '../../../components/Form/LoginForm/Login.vue'

const meta = {
    title: "Zeelbee/Component/Form/Login",
    component: Login,
  decorators: [() => ({template: '<div style="height:100vh; backgroundColor:#B8BECB"><story/></div>'})],
   tags:['autodocs']
}satisfies Meta<typeof Login>

export default meta

type story = StoryObj<typeof Login>;

export const  ZeelbeeLogin: story = {
    args: {}
}






















