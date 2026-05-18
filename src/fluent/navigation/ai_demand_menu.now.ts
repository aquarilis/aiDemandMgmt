import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const ai_demand_menu = ApplicationMenu({
    $id: Now.ID['ai_demand_menu'],
    title: 'AI Demand Management',
    active: true,
})

export const ai_demands_module = Record({
    $id: Now.ID['ai_demands_module'],
    table: 'sys_app_module',
    data: {
        title: 'AI Demands',
        application: ai_demand_menu,
        link_type: 'LIST',
        name: 'x_nesa_aid_ai_demand',
        active: true,
        order: 100,
    },
})
