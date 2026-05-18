import { Role } from '@servicenow/sdk/core'

export const x_nesa_aid_admin = Role({
    name: 'x_nesa_aid.admin',
    description: 'Can maintain the app master data (e.g. group manager, mapping tables).',
})

export const x_nesa_aid_change_agent = Role({
    name: 'x_nesa_aid.change_agent',
    description: 'Can be assigned to AI demands for assessment and qualification.',
})

export const x_nesa_aid_delivery_manager = Role({
    name: 'x_nesa_aid.delivery_manager',
    description: 'Can be assigned to AI projects for follow-up and status updates.',
})
