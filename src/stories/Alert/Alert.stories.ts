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
     title: "primary" 
    }
}

export const ZeelbeeAlertSuccess: story = {
    args: {
        type: "success",
     title: "success" 


    }
}


export const ZeelbeeAlertSecondry: story = {
    args: {
        type: "secondry",
     title: "secondry" 
        
    }
}

export const ZeelbeeAlertWarning: story = {
    args: {
    type: "warning",
    title: "warning" 

    }
}



export const ZeelbeeAlertDanger: story = {
    args: {
        type: "danger",
     title: "danger" 


    }
}



