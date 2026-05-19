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
                    ai_demand_master_data_separator: {
                        table: 'sys_app_module'
                        id: 'fb33ef302a294b3e99248041b84ddfa8'
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
                    ai_service_create_acl: {
                        table: 'sys_security_acl'
                        id: 'fd04ffb1bba540e8ba58027df1eededa'
                    }
                    ai_service_delete_acl: {
                        table: 'sys_security_acl'
                        id: '788ebd8703bf470f80bde3eb74820129'
                    }
                    ai_service_read_acl: {
                        table: 'sys_security_acl'
                        id: '3f8ecf5e4dc44649a3899648a651c0f2'
                    }
                    ai_service_write_acl: {
                        table: 'sys_security_acl'
                        id: 'd38b31d757504feebf74d9d2ed7c790a'
                    }
                    ai_services_module: {
                        table: 'sys_app_module'
                        id: '5d4d4ffbcc4f448699d0f9a3c20bf1ea'
                    }
                    ai_technologies_module: {
                        table: 'sys_app_module'
                        id: '29897999e0124b5696a439509144b285'
                    }
                    ai_technology_create_acl: {
                        table: 'sys_security_acl'
                        id: '93f9ceb7be364270965844bd778b3b6c'
                    }
                    ai_technology_delete_acl: {
                        table: 'sys_security_acl'
                        id: '33f28371ae2c46ae829ff7cddc480cc3'
                    }
                    ai_technology_read_acl: {
                        table: 'sys_security_acl'
                        id: 'd5a2170f68f144ddbc0101253991f733'
                    }
                    ai_technology_write_acl: {
                        table: 'sys_security_acl'
                        id: 'bc6fecad032c457898dac9b927b88f34'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'e937f4154126499d8b01d03b6c29e921'
                    }
                    end_to_end_process_create_acl: {
                        table: 'sys_security_acl'
                        id: '95b5522902b2437ca85f30d604d77439'
                    }
                    end_to_end_process_delete_acl: {
                        table: 'sys_security_acl'
                        id: '4de7f7f2e84444c7a3c819f8d62e38ed'
                    }
                    end_to_end_process_read_acl: {
                        table: 'sys_security_acl'
                        id: 'a6f6b2f1d1c24b4d97aa088978ca8a15'
                    }
                    end_to_end_process_write_acl: {
                        table: 'sys_security_acl'
                        id: 'b594ab9b14c940b7b6a1dc98998a797a'
                    }
                    end_to_end_processes_module: {
                        table: 'sys_app_module'
                        id: '472b617f036f42e5b2e6da46363d8a7f'
                    }
                    md_ai_service_ai_ml: {
                        table: 'x_nesa_aid_ai_service'
                        id: 'ed6a5f17444f42268453b86e749c98e3'
                    }
                    md_ai_service_genai: {
                        table: 'x_nesa_aid_ai_service'
                        id: '0d03a13365ef4e1c98a357637b305f78'
                    }
                    md_ai_service_personal_productivity_ai: {
                        table: 'x_nesa_aid_ai_service'
                        id: '4b21e7de315149179760f6c983bdf452'
                    }
                    md_ai_service_powerapps: {
                        table: 'x_nesa_aid_ai_service'
                        id: 'ec934d1b169542fe8efbdc60e1ec1068'
                    }
                    md_ai_service_rpa: {
                        table: 'x_nesa_aid_ai_service'
                        id: 'aa7588e733f94127b4dc827baa055257'
                    }
                    md_ai_technology_automationanywhere: {
                        table: 'x_nesa_aid_ai_technology'
                        id: 'aab0904587a241d286485b9624efcd18'
                    }
                    md_ai_technology_blueprism: {
                        table: 'x_nesa_aid_ai_technology'
                        id: 'cc3ef781421c47b9b3e54faf41361354'
                    }
                    md_ai_technology_m365_copilot: {
                        table: 'x_nesa_aid_ai_technology'
                        id: '29839f06e4014f3d8861296f7e67ce6a'
                    }
                    md_ai_technology_microsoft_copilot_studio: {
                        table: 'x_nesa_aid_ai_technology'
                        id: '5b8eab4c47be43289107eed7637d6870'
                    }
                    md_ai_technology_snow_workflow_engine: {
                        table: 'x_nesa_aid_ai_technology'
                        id: '106f86432d7f4963ba44c621b3bb119f'
                    }
                    md_end_to_end_forecast_to_stock: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '684ca7508c9b426dbfbd3583e6f764cd'
                    }
                    md_end_to_end_hire_to_retire: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: 'ce46afb47e724c199ee5e98dcaf375fd'
                    }
                    md_end_to_end_idea_to_scale: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '3d6d28a6d6664a50970faf7b298df752'
                    }
                    md_end_to_end_insights_to_execution: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: 'dd2ff90075b949c79f6640ce8bf26eb0'
                    }
                    md_end_to_end_it_for_it: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '8618523864784f129cd0b29f832682bd'
                    }
                    md_end_to_end_order_to_cash: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '772a48d89fba437d91132314ddb9a12e'
                    }
                    md_end_to_end_partner_to_sell: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: 'dd8347c660a94867aa976d94019262b5'
                    }
                    md_end_to_end_plan_to_perform: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '25cc400ba0454e77ad63d5848f334b2c'
                    }
                    md_end_to_end_record_to_report: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '20411c3e487d44d7beab946067dd8bca'
                    }
                    md_end_to_end_source_to_pay: {
                        table: 'x_nesa_aid_end_to_end_process'
                        id: '47e0da706a6d48a89a8c9df4c9d354b2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e1ec3b3ecd414f4fad62edd2a7f82833'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01429f3e68764dea997bd2616923c481'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0292fa939f8d4b8f9554d2b51e3b11c4'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'annual_business_value'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '05fa0852255644d6954cbe2d7ff8fda9'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
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
                        table: 'sys_choice'
                        id: '093ed83a4a6041d69e0bdcb0bf9b255a'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'other'
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
                        id: '0c5ce722fd63428e87f4fcca8a735fc5'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '179f9f26b94c4729a7ff8502e31fcebc'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'ai_technology'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '187131de72be4ec4945f26b6d444e440'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'active'
                            language: 'en'
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
                        id: '1d793a1a02c848088efe7e4e5ab10133'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                            element: 'NULL'
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
                        table: 'sys_dictionary'
                        id: '27f2230ea5144b0995ba3ea461733059'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ab0c90965614bb395535f1859632ad4'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'robotics_process_automation'
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
                        table: 'sys_security_acl_role'
                        id: '3b92f6ac34bc4327a2d9c2602833b94d'
                        key: {
                            sys_security_acl: 'd38b31d757504feebf74d9d2ed7c790a'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3c7924bf1f4d4d2cb15bebcf0fc72460'
                        key: {
                            sys_security_acl: '93f9ceb7be364270965844bd778b3b6c'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d1f6e499a5140ceb192b7b52205cd31'
                        key: {
                            sys_security_acl: 'bc6fecad032c457898dac9b927b88f34'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '427863b929284c7d8aaf1117f329294e'
                        key: {
                            sys_security_acl: '4de7f7f2e84444c7a3c819f8d62e38ed'
                            sys_user_role: {
                                id: 'c9444f4714b046a88f43da989105ae73'
                                key: {
                                    name: 'admin'
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
                        table: 'sys_security_acl_role'
                        id: '4e60f3b1cda14e07ab3cfb2899514e4b'
                        key: {
                            sys_security_acl: 'a6f6b2f1d1c24b4d97aa088978ca8a15'
                            sys_user_role: {
                                id: '5cc5af9c98b846cd92ab0da579abf141'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
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
                        table: 'sys_choice'
                        id: '4ffbbf5ebb444c9c96eee1dee7642d69'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'deep_learning'
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
                        table: 'sys_choice_set'
                        id: '5d0ca476f425478c96db9aa3ac0b5447'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '616c7e09176744cabfcccd9fadfa3548'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'NULL'
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
                        id: '61d0daad57344d8486008731466f7de0'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'ui_for_ai'
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
                        table: 'sys_documentation'
                        id: '693e8af26b914ada9ee15a4dcc15dac0'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a94fe9815d04ca598c2fe5cc3b40123'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'automations'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fe7c46b7be34f6ead4b0934ccec3b92'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'end_to_end_process'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72fcb2f1aa844ce5bb402f0ce787b5ed'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '748679eb50e0443290ca870294e47f14'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7750f391414147fe808c116a3dbd7de7'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '788b487279aa45b89aca890e1c89b41d'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'end_to_end_process'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '860f027f1888436f9b12762a3ac40af4'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86b337c4703b4c798573da57fed482f0'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'ai_service'
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
                        table: 'sys_security_acl_role'
                        id: '953fc7a2ac76453fbfa16a20c23bdedd'
                        key: {
                            sys_security_acl: 'fd04ffb1bba540e8ba58027df1eededa'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ad4e840734341f69e6cbb394e3a86ec'
                        key: {
                            sys_security_acl: 'd5a2170f68f144ddbc0101253991f733'
                            sys_user_role: {
                                id: '413cee49ad4c4f5185c663272e389f42'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a655616663b742cb81b434ee910e2e6d'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'computer_vision'
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
                        id: 'ac2545bc5c63452087771d8ad0fbd3cc'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aca36d442bc941a58c2e04d9aae41920'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aec9d0aef59a4bbdb9b37734732e92de'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b22f097d77064f079e40b4b78aac1d8c'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
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
                        table: 'sys_documentation'
                        id: 'b479908a14db4a85ac5fb63d898ef08c'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b59262391b504d98b81b1de721a60a05'
                        key: {
                            sys_security_acl: '788ebd8703bf470f80bde3eb74820129'
                            sys_user_role: {
                                id: '527fccadc9a24eb0995c5ffec5d1640e'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'c378019c9a7a44f3b621e15ca059b3f1'
                        key: {
                            sys_security_acl: '3f8ecf5e4dc44649a3899648a651c0f2'
                            sys_user_role: {
                                id: 'd57ba5ca38f14bd49cfc98eb3d4ec92f'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
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
                        table: 'sys_choice'
                        id: 'c984475605f34fc7b9d3dca31981121e'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'machine_learning'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca3f720fe3724dcba6895d59d3ccfb96'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd15b2c3c5bd9405695032f23b5a54ec9'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd17b43d7540b4b69aefb96a89524a0a8'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                            element: 'active'
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
                        table: 'sys_documentation'
                        id: 'd87f8432c36743f792e0089c37c0c378'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'ai_service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd950081a40be4b98969b895ac6ad1731'
                        key: {
                            sys_security_acl: '95b5522902b2437ca85f30d604d77439'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: 'e04e54332c9f436e8cc80c7f94c03749'
                        key: {
                            name: 'x_nesa_aid_ai_service'
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
                        table: 'sys_dictionary'
                        id: 'e4b0277ce6404b5eb169977a6634b268'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                            element: 'name'
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
                        table: 'sys_documentation'
                        id: 'e62130b3c2144420b9e56cefa5925510'
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e65241e7dac14f1da1dd769d33c04569'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_technology'
                            element: 'category'
                            value: 'nlp'
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
                        table: 'sys_documentation'
                        id: 'ee995e6d11f64f73bb513bb33b945d07'
                        key: {
                            name: 'x_nesa_aid_end_to_end_process'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef09309028d94da0a1707ee303a9ddcb'
                        key: {
                            sys_security_acl: 'b594ab9b14c940b7b6a1dc98998a797a'
                            sys_user_role: {
                                id: '92a2353429854e819ae0d1c7da64fbbc'
                                key: {
                                    name: 'x_nesa_aid.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef0fd963b5144c44b6be782b328bf25f'
                        key: {
                            sys_security_acl: '33f28371ae2c46ae829ff7cddc480cc3'
                            sys_user_role: {
                                id: 'bcfb9998d6544e849ab9510587329953'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f04485d17ab943f8a7b95457b6f08097'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                            element: 'active'
                            language: 'en'
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
                    {
                        table: 'sys_documentation'
                        id: 'f8be8b012b6a45c3a679b9b32955378e'
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            element: 'ai_technology'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f9980308b514443bb09ab90369d76c7f'
                        key: {
                            name: 'x_nesa_aid_ai_service'
                        }
                    },
                ]
            }
        }
    }
}
