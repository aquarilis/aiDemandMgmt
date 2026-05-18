import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ai_demand_create_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_demand',
    operation: 'create',
    decisionType: 'allow',
    roles: ['snc_internal'],
    adminOverrides: true,
    description: 'Allow users with snc_internal to create AI Demand records.',
})

Acl({
    $id: Now.ID['ai_demand_read_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_demand',
    operation: 'read',
    decisionType: 'allow',
    roles: ['snc_internal'],
    adminOverrides: true,
    description: 'Allow users with snc_internal to read AI Demand records.',
})

Acl({
    $id: Now.ID['ai_demand_write_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_demand',
    operation: 'write',
    decisionType: 'allow',
    roles: ['x_nesa_aid.change_agent'],
    condition: 'active=true',
    adminOverrides: true,
    description: 'Allow change agents to write AI Demand records only when active is true.',
})

Acl({
    $id: Now.ID['ai_demand_delete_acl'],
    type: 'record',
    table: 'x_nesa_aid_ai_demand',
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Allow only admins to delete AI Demand records.',
})
