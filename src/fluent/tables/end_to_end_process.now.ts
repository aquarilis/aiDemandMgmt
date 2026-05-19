import {
    Acl,
    BooleanColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_nesa_aid_end_to_end_process = Table({
    name: 'x_nesa_aid_end_to_end_process',
    label: 'End-to-End Process',
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
    },
})

Acl({
    $id: Now.ID['end_to_end_process_create_acl'],
    type: 'record',
    table: 'x_nesa_aid_end_to_end_process',
    operation: 'create',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to create End-to-End Process records.',
})

Acl({
    $id: Now.ID['end_to_end_process_read_acl'],
    type: 'record',
    table: 'x_nesa_aid_end_to_end_process',
    operation: 'read',
    decisionType: 'allow',
    roles: ['snc_internal'],
    adminOverrides: true,
    description: 'Allow internal users to read End-to-End Process records.',
})

Acl({
    $id: Now.ID['end_to_end_process_write_acl'],
    type: 'record',
    table: 'x_nesa_aid_end_to_end_process',
    operation: 'write',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to update End-to-End Process records.',
})

Acl({
    $id: Now.ID['end_to_end_process_delete_acl'],
    type: 'record',
    table: 'x_nesa_aid_end_to_end_process',
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow only admins to delete End-to-End Process records.',
})