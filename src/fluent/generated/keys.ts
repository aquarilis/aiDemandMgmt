import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    ai_demand_create_acl: {
                        table: 'sys_security_acl'
                        id: 'c7af0caf673947c29c527f716a7895a4'
                    }
                    ai_demand_delete_acl: {
                        table: 'sys_security_acl'
                        id: '510170bd4c784767bf6f5b0f3c9ad380'
                    }
                    ai_demand_menu: {
                        table: 'sys_app_application'
                        id: '8cd0c5376f8541698084c2155584359d'
                    }
                    ai_demand_read_acl: {
                        table: 'sys_security_acl'
                        id: '4e2aaa9334a0440e9ef3c2c7553012c6'
                    }
                    ai_demand_write_acl: {
                        table: 'sys_security_acl'
                        id: 'fe9a47aecd9840ae92a2cb6fd3db73a7'
                    }
                    ai_demands_module: {
                        table: 'sys_app_module'
                        id: '14263428d879470e906e8081df58bc75'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'e937f4154126499d8b01d03b6c29e921'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e1ec3b3ecd414f4fad62edd2a7f82833'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0292fa939f8d4b8f9554d2b51e3b11c4'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'annual_business_value'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '080b76d7cd7b4300824a7245765b9f3e'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0a71a60130194e99864af9e258fbd285'
                        key: {
                            sys_security_acl: 'c7af0caf673947c29c527f716a7895a4'
                            sys_user_role: {
                                id: 'd4aad05503bc4e1e99300780e7b7e086'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b1782d2d73049d99f169f650b54b773'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'related_to_it_project'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0eae66d17d9147268c44778e8f7f3244'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'related_to_it_project'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '13d457c4abc34347a4c8dab02af6a500'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '156cceaaa5f34e0588fe00cbbc63c979'
                        key: {
                            sys_security_acl: '4e2aaa9334a0440e9ef3c2c7553012c6'
                            sys_user_role: {
                                id: '1ea99b0b7f004822a93e54303c9a12ea'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ac4c1d571ba40d39e3d1441368fb019'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'arm_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d6aa045e7164d51a47187d83eb93521'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e87469439074765a94383029085b134'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f9342e2b41a429086dd58ea29b39288'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '234bcf89d64349379b8a980f14115d7d'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'use_case_data_sources'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2413e1cb82bc4b1c825532d897c96905'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'it_project'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26f4460534854f70aad9e5787d4bac78'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_category'
                            value: 'non_cashable'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ef84c2d592a43998a25a0f11df2116a'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'it_project'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3077b04e921346c794758ad60a28f998'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'related_to_it_project'
                            value: 'yes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a15f7891d5441ca90cd05070a0f3a76'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'use_case_data_sources'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a3b7ca165b94e4d8744af0a63ea2691'
                        key: {
                            sys_security_acl: 'fe9a47aecd9840ae92a2cb6fd3db73a7'
                            sys_user_role: {
                                id: 'e802c192fcf748769dc4380474d98c74'
                                key: {
                                    name: 'x_nesa_aid.change_agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '458d6b0d28484c3eb910cd8ff4b3854f'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '481a8e16eb034d9f9c51ec9171989040'
                        key: {
                            category: 'x_nesa_aid_ai_demand'
                            prefix: 'AID'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c93f5f3229f44769a9bcdd89d72de5f'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'related_to_it_project'
                            value: 'no'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '4ed3705de0464d1b88ddeb4199e4997d'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '504cd2942166422db4672067b834c926'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '515e92a638ac4013a94d912fe8edf690'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'annual_business_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '587657024700490fb06b88a9e213e744'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'arm_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ca3563f95ce4c618cb5090a421547f5'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'geographical_scope'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61861c3e35d5496c81781a82be30b9cc'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62e602a534974937a4fdbfab7f3766c5'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'geographical_scope'
                            value: 'regional'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '65b44af4a149402ea6a410c1814c52f9'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '675f339fa85d4913bce84f71930c2788'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d234e25a29941c5bce1c2ca18d4fe3f'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'discovery'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '84ab78f2da494024b99b312a46c470e4'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'geographical_scope'
                            value: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a9f0b73d14f4c1ca57da711664ccc86'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ebbd6242dc34dc692e05e30edacb1d3'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'geographical_scope'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '92a2353429854e819ae0d1c7da64fbbc'
                        key: {
                            name: 'x_nesa_aid.admin'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8e2dd4c59ad422caa8d39310535ceef'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'poc'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b24bc36d45f846db883c25df6d8ddfcb'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5ca1562756b4b38bfcb9ae81b1f3503'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'industrialize'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'bb4f215da39648c7bdcf8679c9a5a094'
                        key: {
                            table: 'x_nesa_aid_ai_demand'
                            short_description: 'Hide and clear annual business value when category is not cashable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2d593ea13ae46c391c60233493b15c1'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3ae2b40899443cb9411b819a4cbc96b'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'mvp'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd68d23e0c74f46d887ec241fd18dc57c'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'geographical_scope'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd70ddb209f2944c9be9fe4d38619b272'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'related_to_it_project'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7ad907c2e8144708ab67b968907d09f'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_category'
                            value: 'cashable'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd7b5cb74016b4a69a9eb2b37184fa3ce'
                        key: {
                            ui_policy: {
                                id: 'bb4f215da39648c7bdcf8679c9a5a094'
                                key: {
                                    table: 'x_nesa_aid_ai_demand'
                                    short_description: 'Hide and clear annual business value when category is not cashable'
                                }
                            }
                            field: 'annual_business_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dcfdf705548c40ffa419d2af8613b5da'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e37cc9cce01f46b1bdc565d5df841fa8'
                        key: {
                            name: 'x_nesa_aid.delivery_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4bc6ff8eca44c1cbacc8d77901b0b74'
                        deleted: true
                        key: {
                            name: 'x'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e601d0756a7d4d3b9ed66e5038d0c440'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e802c192fcf748769dc4380474d98c74'
                        key: {
                            name: 'x_nesa_aid.change_agent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8ece376ee7e4b6e98539d5b8f358b99'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'pilot'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e98d8cf61edb4f3e8ba9ad5a7987c111'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'business_value_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ec93327688744d559146e7eebecf8585'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'decommissioning'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f331320838144714b7a56e6c7add1697'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                            value: 'sustain'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7ae5ccda8914d0181c93e984e63cc7b'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'delivery_stage'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f8b583127b8849fcbf406d42d35dbf26'
                        key: {
                            sys_security_acl: '510170bd4c784767bf6f5b0f3c9ad380'
                            sys_user_role: {
                                id: '0209249ef91248fea03fdcb204321156'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
