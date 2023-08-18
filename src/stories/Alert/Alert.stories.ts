import { Meta, StoryObj } from "@storybook/vue3";

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
     type:  "Primary",
     title: "Primary" 
    }
}

export const ZeelbeeAlertSecondry: story = {
    args: {
        type: "Secondry",
     title: "Secondry" 
        
    }
}

export const ZeelbeeAlertWarning: story = {
    args: {
    type: "Warning",
    title: "Warning" 

    }
}



export const ZeelbeeAlertDanger: story = {
    args: {
        type: "Danger",
     title: "Danger" 


    }
}
