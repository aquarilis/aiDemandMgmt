import {
    Acl,
    BooleanColumn,
    StringColumn,
    ChoiceColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_nesa_aid_ai_technology = Table({
    name: 'x_nesa_aid_ai_technology',
    label: 'AI Technology',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 100,
        }),

        active: BooleanColumn({
            label: 'Active',
        }),

        category: ChoiceColumn({
            label: 'Category',
            dropdown: 'dropdown_with_none',
            choices: {
                nlp: { label: 'Natural Language Processing (NLP)', sequence: 100 },
                computer_vision: { label: 'Computer Vision', sequence: 200 },
                machine_learning: { label: 'Machine Learning', sequence: 300 },
                deep_learning: { label: 'Deep Learning', sequence: 400 },
                robotics_process_automation: { label: 'Robotics Process Automation (RPA)', sequence: 500 },
                other: { label: 'Other', sequence: 600 },
            },
        }),
    },
})

Acl({
    $id: Now.ID['ai_technology_create_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_technology',
    operation: 'create',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to create AI Technology records.',
})

Acl({
    $id: Now.ID['ai_technology_read_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_technology',
    operation: 'read',
    decisionType: 'allow',
    roles: ['snc_internal'],
    adminOverrides: true,
    description: 'Allow internal users to read AI Technology records.',
})

Acl({
    $id: Now.ID['ai_technology_write_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_technology',
    operation: 'write',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to update AI Technology records.',
})

Acl({
    $id: Now.ID['ai_technology_delete_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_technology',
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow only admins to delete AI Technology records.',
})