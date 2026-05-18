import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    ai_demand_menu: {
                        table: 'sys_app_application'
                        id: '8cd0c5376f8541698084c2155584359d'
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
                        table: 'sys_ui_section'
                        id: '033c62da51a24a28b7151a746350c39e'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'AI Demand'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '045f8a3cba464f43a7169cd0ec2b5885'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: '1a5b69dd325a47bd8ad862c7be55449c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'it_project'
                            position: '4'
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
                        table: 'sys_ui_form_section'
                        id: '1c12393cb0424e448a5c3a43dcb71980'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_form_section'
                        id: '1ff19976d3994a65b25b569908f53400'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f9fe409a62d343f6b2c453994b8c6846'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '2b16a2e654c643a384273bd426e8c11f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ee7ff47f87648c3a8ccdc3da3a5d390'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_value_description'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: '36447cb9e86f44f4806ba29f2e6b60c8'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '81d945364fd24af795d8cde9a2018ed3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: '3e7b724f245e495a8303c8fcaf48fb38'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f2abe73e2714bc0aec062c048e23353'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'arm_url'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: '45a3b3b97c47493184de2156385d3b7c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4802e71268f743f199b930d6345e213a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
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
                        table: 'sys_ui_section'
                        id: '585fe40b419b48eda9134d41dc3c5ee7'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'Business Value'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '5924598fc6554ddfa56fdcd91ad5505b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '10'
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
                        table: 'sys_ui_form_section'
                        id: '6169926eb8c7454d95933ea9d87f54f7'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
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
                        table: 'sys_ui_element'
                        id: '630982d0848e4d66ab22d8b93f94d738'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'annual_business_value'
                            position: '4'
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
                        table: 'sys_ui_section'
                        id: '6886ea5796ad459882eab7f8209ce2ea'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'IT Context'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71a07f35ec034af086749172f603004e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'geographical_scope'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7820c85cc1314f64a64596e6aaafeb97'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '7ea40e6822854c2cb75a2897a127cb8e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '81d945364fd24af795d8cde9a2018ed3'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '8ec94cd8a6c44eb29d23cd9c0fb08073'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8feee0e6922f4addae033226bef709c9'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_value_category'
                            position: '2'
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
                        table: 'sys_ui_form_section'
                        id: '93aed8d4a8544edea139928e5e92b9ed'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '81d945364fd24af795d8cde9a2018ed3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94d7b01cee1546fab7233f6b527f6896'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a078ca775fea4e8bb29d6d86d3e7174c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'opened_at'
                            position: '5'
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
                        table: 'sys_ui_element'
                        id: 'aa36aacf1c58485594759472ae3ade6d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab2dfa0514d74bdda8c276abf802d09e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'adacfbf194034b62aac7a8d8492f97db'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'afa4c8efe85043d1ae548cea35dc39c7'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b1e271ed3b18463185a767240e6e3c31'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'use_case_data_sources'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'b5c29b7ab24e4c95b73efc0313650222'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_section'
                        id: 'c1645017cb8d44b0b6df9880b26b76b3'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'Assignment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c1ea24e2f33446eda9e3530d95796476'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_ui_element'
                        id: 'c6f397562dc244d59e51bbf2cafc745e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cec9c9aed48b470ea406a6be00272014'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f9fe409a62d343f6b2c453994b8c6846'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd0e46311bc0d4ebda8d1716db098d6c1'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'related_to_it_project'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd102420297fb4333802e6f4f16e3e43c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
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
                        table: 'sys_ui_form_section'
                        id: 'dc82444e724a4058a1b52f2a5507d934'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '585fe40b419b48eda9134d41dc3c5ee7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Business Value'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: 'dd8d8eea03ef4d71bd2a9aa2d186df31'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'business_application'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: 'e41118f798d748ffb146ab746d1b6922'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: 'ea620667bd1349388db987e8a85a2a73'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: 'f2f7dcb165c64cf48f89c69172b21ec2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'delivery_stage'
                            position: '12'
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
                        table: 'sys_ui_element'
                        id: 'f47619af05e94ea983ab61b10b02dd81'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'c1645017cb8d44b0b6df9880b26b76b3'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
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
                        table: 'sys_ui_section'
                        id: 'f9fe409a62d343f6b2c453994b8c6846'
                        deleted: true
                        key: {
                            name: 'x_nesa_aid_ai_demand'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'faeb9c516e364a798699d46a20697f6f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'fd307e1a0b644cdc9f7dfa6e0114cc51'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'afa4c8efe85043d1ae548cea35dc39c7'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6886ea5796ad459882eab7f8209ce2ea'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'IT Context'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd3281205c3243d1af6bc884a9ce6851'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '033c62da51a24a28b7151a746350c39e'
                                key: {
                                    name: 'x_nesa_aid_ai_demand'
                                    caption: 'AI Demand'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'opened_by'
                            position: '2'
                        }
                    },
                ]
            }
        }
    }
}
