import type { Meta, StoryObj } from "@storybook/vue3";

import Input from '../../../components/Form/FormsBox/Input.vue'

const meta = {
    title: "Zeelbee/Component/Form/Input",
    component: Input,
    tags: ['autodocs']
}satisfies Meta<typeof Input>

export default meta;

type Story = StoryObj<typeof Input>

export const ZeelbeeFormText:Story = {
    args: {
     type: 'text'
    }
}

export const ZeelbeeFormEmail:Story = {
    args: {
        type: 'email'
    }
}

export const ZeelbeeFormPassword:Story = {
    args: {
       type:'password'
    }
}

export const ZeelbeeFormDate:Story = {
    args: {
         type: 'date' 
    }
}

export const ZeelbeeFormTel:Story = {
    args: {
         type: 'tel' 
    }
}

export const ZeelbeeFormUrl:Story = {
    args: {
         type: 'url' 
    }
}

export const ZeelbeeFormTime:Story = {
    args: {
         type: 'time' 
    }
}

export const ZeelbeeFormSearch:Story = {
    args: {
         type: 'search' 
    }
}

export const ZeelbeeFormWeek:Story = {
    args: {
         type: 'week' 
    }
}













