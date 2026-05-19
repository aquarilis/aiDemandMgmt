import {
    Acl,
    UiPolicy,
    Table,
    Record,
    OverrideColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
    UrlColumn,
    StringColumn
} from '@servicenow/sdk/core'

export const x_nesa_aid_ai_demand = Table({
    name: 'x_nesa_aid_ai_demand',
    label: 'AI Demand',
    extends: 'task',
    autoNumber: {
        prefix: 'AID',
        number: 101,
        numberOfDigits: 7,
    },
    schema: {
        short_description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),

        description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),

        end_to_end_process: ReferenceColumn({
            label: 'End-to-End Process',
            referenceTable: 'x_nesa_aid_end_to_end_process',
            referenceQual: 'active=true',
        }),

        ai_technology: ReferenceColumn({
            label: 'AI Technology',
            referenceTable: 'x_nesa_aid_ai_technology',
            referenceQual: 'active=true',
        }),

        ai_service: ReferenceColumn({
            label: 'AI Service',
            referenceTable: 'x_nesa_aid_ai_service',
            referenceQual: 'active=true',
        }),

        geographical_scope: ChoiceColumn({
            label: 'Geographical Scope',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                global: { label: 'Global', sequence: 100 },
                regional: { label: 'Regional', sequence: 200 },
            },
        }),

        delivery_stage: ChoiceColumn({
            label: 'Delivery Stage',
            dropdown: 'dropdown_with_none',
            choices: {
                discovery: { label: 'Discovery', sequence: 100 },
                poc: { label: 'Proof of Concept (POC)', sequence: 200 },
                mvp: { label: 'Minimum Viable Product (MVP)', sequence: 300 },
                pilot: { label: 'Pilot', sequence: 400 },
                industrialize: { label: 'Industrialize', sequence: 500 },
                sustain: { label: 'Sustain', sequence: 600 },
                decommissioning: { label: 'Decommissioning', sequence: 700 },
            },
        }),

        use_case_data_sources: StringColumn({
            label: 'Use Case Data Sources',
            maxLength: 4000,
        }),

        business_value_category: ChoiceColumn({
            label: 'Business Value Category',
            dropdown: 'dropdown_with_none',
            choices: {
                cashable: { label: 'Cashable', sequence: 100 },
                non_cashable: { label: 'Non-cashable', sequence: 200 },
            },
        }),

        annual_business_value: IntegerColumn({
            label: 'Annual Business Value (in kCHF)',
        }),

        business_value_description: StringColumn({
            label: 'Business Value Description',
            maxLength: 4000,
        }),

        related_to_it_project: ChoiceColumn({
            label: 'Related to an Existing IT Project',
            dropdown: 'dropdown_with_none',
            choices: {
                yes: { label: 'Yes', sequence: 100 },
                no: { label: 'No', sequence: 200 },
            },
        }),

        it_project: ReferenceColumn({
            label: 'IT Project',
            referenceTable: 'pm_project',
        }),

        business_application: ReferenceColumn({
            label: 'Business Application',
            referenceTable: 'cmdb_ci_business_app',
        }),

        arm_url: UrlColumn({
            label: 'Architecture Review Meeting (ARM) Link',
        }),
    },
})

Record({
    $id: Now.ID['ai_demand_override_short_description'],
    table: 'sys_documentation',
    data: {
        name: 'x_nesa_aid_ai_demand',
        element: 'short_description',
        label: 'Use case name',
        language: 'en',
    },
})

Record({
    $id: Now.ID['ai_demand_override_description'],
    table: 'sys_documentation',
    data: {
        name: 'x_nesa_aid_ai_demand',
        element: 'description',
        label: 'Use case description',
        language: 'en',
    },
})

UiPolicy({
    $id: Now.ID['ai_demand_business_value_policy'],
    table: 'x_nesa_aid_ai_demand',
    shortDescription: 'Hide and clear annual business value when category is not cashable',
    conditions: 'business_value_category!=cashable',
    onLoad: true,
    reverseIfFalse: true,
    actions: [
        {
            field: 'annual_business_value',
            mandatory: false,
            visible: false,
            cleared: true,
        },
    ],
})

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
