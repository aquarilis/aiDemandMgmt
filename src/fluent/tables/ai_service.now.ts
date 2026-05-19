import {
    Acl,
    BooleanColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_nesa_aid_ai_service = Table({
    name: 'x_nesa_aid_ai_service',
    label: 'AI Service',
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
    $id: Now.ID['ai_service_create_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_service',
    operation: 'create',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to create AI Service records.',
})

Acl({
    $id: Now.ID['ai_service_read_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_service',
    operation: 'read',
    decisionType: 'allow',
    roles: ['snc_internal'],
    adminOverrides: true,
    description: 'Allow internal users to read AI Service records.',
})

Acl({
    $id: Now.ID['ai_service_write_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_service',
    operation: 'write',
    decisionType: 'allow',
    roles: ['x_nesa_aid.admin'],
    adminOverrides: true,
    description: 'Allow AI Demand admins to update AI Service records.',
})

Acl({
    $id: Now.ID['ai_service_delete_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_service',
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow only admins to delete AI Service records.',
})