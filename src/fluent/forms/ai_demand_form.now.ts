import { Form, default_view } from '@servicenow/sdk/core'

export const ai_demand_form = Form({
    table: 'x_nesa_aid_ai_demand',
    view: default_view,
    sections: [
        {
            caption: 'AI Demand',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'opened_by', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'state', type: 'table_field' },
                        { field: 'opened_at', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'short_description', type: 'table_field' },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'geographical_scope', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'priority', type: 'table_field' },
                        { field: 'delivery_stage', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'IT Context',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'business_application', type: 'table_field' },
                        { field: 'related_to_it_project', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'it_project', type: 'table_field' },
                        { field: 'arm_url', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Business Value',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'use_case_data_sources', type: 'table_field' },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'business_value_category', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'annual_business_value', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'business_value_description', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Assignment',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'assignment_group', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'assigned_to', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Notes',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'description', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Activity',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { type: 'formatter', formatterRef: 'Activities_Filtered' },
                    ],
                },
            ],
        },
    ],
})
