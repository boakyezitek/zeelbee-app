import type { Meta, StoryObj } from "@storybook/vue3";

import Alert from '../../components/Alert/alert.vue'

const meta = {
    title: 'Zeelbee/Component/Alert',
    component: Alert, 
    tags: ['autodocs'],
}satisfies Meta<typeof Alert>

export default  meta
type story = StoryObj<typeof Alert>

export const ZeelbeeAlertPrimary: story = {
    args: {
     type:  "primary",
     title: "primary" ,
     background: "#f3f6ff"
    }
}

export const ZeelbeeAlertSuccess: story = {
    args: {
        type: "success",
     title: "success" ,
     background: "#f1f7f5"

    }
}


export const ZeelbeeAlertSecondry: story = {
    args: {
        type: "secondry",
     title: "secondry" ,
     background: "#F3F4F7"
        
    }
}

export const ZeelbeeAlertWarning: story = {
    args: {
    type: "warning",
    title: "warning" ,
    background: "#Fdf4f4"

    }
}



export const ZeelbeeAlertDanger: story = {
    args: {
        type: "danger",
     title: "danger" ,
     background: "#Fdf4f4"


    }
}



