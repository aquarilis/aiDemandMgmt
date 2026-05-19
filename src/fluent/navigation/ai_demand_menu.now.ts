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

export const ai_demand_master_data_separator = Record({
    $id: Now.ID['ai_demand_master_data_separator'],
    table: 'sys_app_module',
    data: {
        title: 'AI Demand master data',
        application: ai_demand_menu,
        link_type: 'SEPARATOR',
        roles: ['x_nesa_aid.admin'],
        active: true,
        order: 200,
    },
})

export const end_to_end_processes_module = Record({
    $id: Now.ID['end_to_end_processes_module'],
    table: 'sys_app_module',
    data: {
        title: 'End-to-End Processes',
        application: ai_demand_menu,
        link_type: 'LIST',
        name: 'x_nesa_aid_end_to_end_process',
        roles: ['x_nesa_aid.admin'],
        active: true,
        order: 300,
    },
})
