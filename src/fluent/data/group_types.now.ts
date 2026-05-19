import { Record } from '@servicenow/sdk/core'


Record({
    $id: Now.ID['group_type_ai_demand_assignment'],
    $meta: { installMethod: "demo" },
    table: 'sys_user_group_type',
    data: {
        name: 'x_nesa_aid.ai_demand_assignment',
        u_active: true,
        description: 'Group type for AI Demand assignment groups',
    },
})