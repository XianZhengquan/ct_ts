/**
 * 路由配置文件
 * @author XianZhengquan
 * @create 2020/4/15
 */

export interface IRouteConfParams {
    path: string; // 路径
    redirect?: string; // 指向最末级的第一个path
    title?: string; // 名称
    component?: string; // 组件地址
    icon?: string; // 图标 二级菜单有
    symbol: string; // 固定的唯一标识
    level: number; // 路由层级
    show: boolean; // 是否在页面显示路由
    children?: IRouteConfParams[]; // 子集
    [propsName: string]: any;
}

const routerConf: IRouteConfParams[] = [
    // 资产管理菜单
    {
        title: '项目楼宇',
        path: '/assets',
        redirect: '/assets/index',
        symbol: 'ASSETS',
        level: 1,
        icon: 'assetsIcon',
        show: true,
        children: [
            {
                title: '主页',
                path: '/assets/index',
                component: '/assets/management',
                symbol: 'ASSETS_MANAGEMENT_INDEX',
                level: 2,
                show: false
            },
            {
                title: '项目详情（楼宇列表）',
                path: '/assets/project/:projectId',
                component: '/assets/management/components/Project/detail',
                symbol: 'ASSETS_MANAGEMENT_PROJECT',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(项目进入)',
                path: '/assets/building/:projectId/:buildingId',
                component: '/assets/management/components/Building/detail',
                symbol: 'ASSETS_MANAGEMENT_BUILDING_FROM_PRO',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(楼宇主页直接进入)',
                path: '/assets/building/:buildingId',
                component: '/assets/management/components/Building/detail',
                symbol: 'ASSETS_MANAGEMENT_BUILDING_FROM_BUI',
                level: 2,
                show: false
            },
            {
                title: '下账列表',
                path: '/assets/debit',
                redirect: '/assets/debit',
                component: '/assets/debit',
                symbol: 'ASSETS_MANAGEMENT_DEBIT',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '资产管理',
        path: '/assetsManagement',
        redirect: '/assetsManagement',
        symbol: 'ASSETS_MANAGEMENT',
        level: 1,
        icon: 'assetsManagementIcon',
        show: true
    },
    {
        title: '委托合同',
        path: '/commissionContract',
        redirect: '/commissionContract',
        component: '/commissionContract',
        symbol: 'COMMISSION_CONTRACT',
        level: 1,
        icon: 'commissionContractIcon',
        show: true
    },
    {
        title: '用户管理',
        path: '/userManagement',
        redirect: '/userManagement',
        component: '/userManagement',
        symbol: 'USER_MANAGEMENT',
        level: 1,
        icon: 'userManagementIcon',
        show: true
    },
    {
        title: '配套设施',
        path: '/supportingFacilities',
        redirect: '/supportingFacilities/building',
        symbol: 'SUPPORTING_FACILITIES',
        level: 1,
        icon: 'supportingFacilitiesIcon',
        show: true,
        children: [
            {
                title: '楼宇设施',
                path: '/supportingFacilities/building',
                redirect: '/supportingFacilities/building',
                component: '/supportingFacilities/building',
                symbol: 'SUPPORTING_FACILITIES_BUILDING',
                level: 2,
                show: true
            },
            {
                title: '房源配套',
                path: '/supportingFacilities/house',
                redirect: '/supportingFacilities/house',
                component: '/supportingFacilities/house',
                symbol: 'SUPPORTING_FACILITIES_HOUSE',
                level: 2,
                show: true
            },
            {
                title: '水电气表',
                path: '/supportingFacilities/energy',
                redirect: '/supportingFacilities/energy',
                component: '/supportingFacilities/energy',
                symbol: 'SUPPORTING_FACILITIES_ENERGY',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '权证管理',
        path: '/warrantManagement',
        redirect: '/warrantManagement',
        component: '/warrantManagement',
        symbol: 'WARRANT_MANAGEMENT',
        level: 1,
        icon: 'warrantManagementIcon',
        show: true
    },
    {
        title: '资产评估',
        path: '/assetValuation',
        redirect: '/assetValuation',
        component: '/assetValuation',
        symbol: 'ASSET_VALUATION',
        level: 1,
        icon: 'assetValuationIcon',
        show: true
    },
    {
        title: '消息中心',
        path: '/messageCenter',
        component: '/messageCenter',
        symbol: 'MESSAGE_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false
    },
    {
        title: '帮助中心',
        path: '/helpCenter',
        component: '/helpCenter',
        symbol: 'HELP_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false,
        children: [
            {
                title: '问题分类',
                path: '/helpCenter/category',
                component: '/helpCenter/category',
                symbol: 'HELP_CENTER_CATEGORY',
                level: 2,
                show: false
            },
            {
                title: '问题详情',
                path: '/helpCenter/detail',
                component: '/helpCenter/detail',
                symbol: 'HELP_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '我要反馈',
        path: '/feedback',
        component: '/feedback',
        symbol: 'FEEDBACK',
        level: 1,
        icon: 'homeIcon',
        show: false
    },

    // 资产经营菜单
    {
        title: '项目楼宇',
        path: '/assets',
        redirect: '/assets/index',
        symbol: 'ASSETS',
        level: 1,
        icon: 'assetsIcon',
        show: true,
        children: [
            {
                title: '主页',
                path: '/assets/index',
                component: '/assets/operating',
                symbol: 'ASSETS_OPERATING_INDEX',
                level: 2,
                show: false
            },
            {
                title: '项目详情（楼宇列表）',
                path: '/assets/project/:projectId',
                component: '/assets/operating/components/Project/detail',
                symbol: 'ASSETS_OPERATING_PROJECT',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(项目进入)',
                path: '/assets/building/:projectId/:buildingId',
                component: '/assets/operating/components/Building/detail',
                symbol: 'ASSETS_OPERATING_BUILDING_FROM_PRO',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(楼宇主页直接进入)',
                path: '/assets/building/:buildingId',
                component: '/assets/operating/components/Building/detail',
                symbol: 'ASSETS_OPERATING_BUILDING_FROM_BUI',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '房源管理',
        path: '/propertyManagement',
        redirect: '/propertyManagement',
        component: '/propertyManagement',
        symbol: 'PROPERTY_MANAGEMENT',
        level: 1,
        icon: 'propertyManagementIcon',
        show: true
    },
    {
        title: '招商中心',
        path: '/merchantCenter',
        redirect: '/merchantCenter/index',
        symbol: 'MERCHANT_CENTER',
        level: 1,
        icon: 'investmentCenterIcon',
        show: true,
        children: [
            {
                title: '招商中心-主页',
                path: '/merchantCenter/index',
                redirect: '/merchantCenter/index',
                component: '/merchantCenter/init',
                symbol: 'MERCHANT_CENTER_INDEX',
                level: 2,
                show: false
            },
            {
                title: '招商中心-详情',
                path: '/merchantCenter/detail/:id',
                redirect: '/merchantCenter/detail/:id',
                component: '/merchantCenter/detail',
                symbol: 'MERCHANT_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '合同管理',
        path: '/contractManagement',
        redirect: '/contractManagement',
        component: '/contractManagement',
        symbol: 'CONTRACT_MANAGEMENT',
        level: 1,
        icon: 'contractManagementIcon',
        show: true
    },
    {
        title: '收支管理',
        path: '/incomeExpenditureManagement',
        redirect: '/incomeExpenditureManagement/bill/index',
        symbol: 'INCOME_EXPENDITURE_MANAGEMENT',
        level: 1,
        icon: 'incomeExpenditureManagementIcon',
        show: true,
        children: [
            {
                title: '账单',
                path: '/incomeExpenditureManagement/bill',
                redirect: '/incomeExpenditureManagement/bill/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL',
                level: 2,
                show: true,
                children: [
                    {
                        title: '账单-主页',
                        path: '/incomeExpenditureManagement/bill/index',
                        component: '/incomeExpenditureManagement/bill',
                        redirect: '/incomeExpenditureManagement/bill/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '账单-详情',
                        path: '/incomeExpenditureManagement/bill/detail/:billType/:id',
                        redirect: '/incomeExpenditureManagement/bill/detail/:billType/:id',
                        component: '/incomeExpenditureManagement/bill/detail',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '账单-已关闭的',
                        path: '/incomeExpenditureManagement/bill/closed',
                        redirect: '/incomeExpenditureManagement/bill/closed',
                        component: '/incomeExpenditureManagement/bill/closed',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_CLOSED',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '流水',
                path: '/incomeExpenditureManagement/turnover',
                redirect: '/incomeExpenditureManagement/turnover/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER',
                level: 2,
                show: true,
                children: [
                    {
                        title: '流水-主页',
                        path: '/incomeExpenditureManagement/turnover/index',
                        component: '/incomeExpenditureManagement/turnover',
                        redirect: '/incomeExpenditureManagement/turnover/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '流水-详情',
                        path: '/incomeExpenditureManagement/turnover/detail/:id',
                        component: '/incomeExpenditureManagement/turnover/detail',
                        redirect: '/incomeExpenditureManagement/turnover/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '作废流水回收站',
                        path: '/incomeExpenditureManagement/turnover/recycle',
                        component: '/incomeExpenditureManagement/turnover/recycle',
                        redirect: '/incomeExpenditureManagement/turnover/recycle',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_RECYCLE',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '保证金',
                path: '/incomeExpenditureManagement/margin',
                redirect: '/incomeExpenditureManagement/margin/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN',
                level: 2,
                show: true,
                children: [
                    {
                        title: '保证金-主页',
                        path: '/incomeExpenditureManagement/margin/index',
                        component: '/incomeExpenditureManagement/margin',
                        redirect: '/incomeExpenditureManagement/margin/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '保证金-详情',
                        path: '/incomeExpenditureManagement/margin/detail/:id',
                        component: '/incomeExpenditureManagement/margin/detail',
                        redirect: '/incomeExpenditureManagement/margin/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '发票',
                path: '/incomeExpenditureManagement/invoice',
                redirect: '/incomeExpenditureManagement/invoice/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE',
                level: 2,
                show: true,
                children: [
                    {
                        title: '发票-主页',
                        path: '/incomeExpenditureManagement/invoice/index',
                        component: '/incomeExpenditureManagement/invoice',
                        redirect: '/incomeExpenditureManagement/invoice/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '发票-详情',
                        path: '/incomeExpenditureManagement/invoice/detail/:id',
                        component: '/incomeExpenditureManagement/invoice/detail',
                        redirect: '/incomeExpenditureManagement/invoice/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '发票-新增',
                        path: '/incomeExpenditureManagement/invoice/create/:type/:id',
                        component: '/incomeExpenditureManagement/invoice/create',
                        redirect: '/incomeExpenditureManagement/invoice/create/:type/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_CREATE',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '收据',
                path: '/incomeExpenditureManagement/receipt',
                redirect: '/incomeExpenditureManagement/receipt/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT',
                level: 2,
                show: true,
                children: [
                    {
                        title: '收据-主页',
                        path: '/incomeExpenditureManagement/receipt/index',
                        component: '/incomeExpenditureManagement/receipt',
                        redirect: '/incomeExpenditureManagement/receipt/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '收据-详情',
                        path: '/incomeExpenditureManagement/receipt/detail/:id',
                        component: '/incomeExpenditureManagement/receipt/detail',
                        redirect: '/incomeExpenditureManagement/receipt/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            }
        ]
    },
    {
        title: '用户管理',
        path: '/userManagement',
        redirect: '/userManagement',
        component: '/userManagement',
        symbol: 'USER_MANAGEMENT',
        level: 1,
        icon: 'userManagementIcon',
        show: true
    },
    {
        title: '工单管理',
        path: '/workOrderManagement',
        redirect: '/workOrderManagement',
        component: '/workOrderManagement',
        symbol: 'WORK_ORDER_MANAGEMENT',
        level: 1,
        icon: 'workOrderManagementIcon',
        show: true
    },
    {
        title: '能源计划',
        path: '/energyPlan',
        redirect: '/energyPlan/businessWaterPlan/index',
        symbol: 'ENERGY_PLAN',
        level: 1,
        icon: 'energyPlanIcon',
        show: true,
        children: [
            {
                title: '商业用水计划',
                path: '/energyPlan/businessWaterPlan',
                redirect: '/energyPlan/businessWaterPlan/index',
                symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN',
                level: 2,
                show: true,
                children: [
                    {
                        title: '商业用水计划主页',
                        path: '/energyPlan/businessWaterPlan/index',
                        redirect: '/energyPlan/businessWaterPlan/index',
                        component: '/energyPlan/businessWaterPlan/index',
                        symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '商业用水计划详情',
                        path: '/energyPlan/businessWaterPlan/detail/:id',
                        redirect: '/energyPlan/businessWaterPlan/detail',
                        component: '/energyPlan/businessWaterPlan/detail',
                        symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '水电管理',
                path: '/energyPlan/energyManagement',
                redirect: '/energyPlan/energyManagement/index',
                symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT',
                level: 2,
                show: true,
                children: [
                    {
                        title: '水电管理主页',
                        path: '/energyPlan/energyManagement/index',
                        redirect: '/energyPlan/energyManagement/index',
                        component: '/energyPlan/energyManagement/index',
                        symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '水电管理详情',
                        path: '/energyPlan/energyManagement/detail/:id',
                        redirect: '/energyPlan/energyManagement/detail',
                        component: '/energyPlan/energyManagement/detail',
                        symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '他权物业水电',
                path: '/energyPlan/propertyEnergy',
                redirect: '/energyPlan/propertyEnergy',
                component: '/energyPlan/propertyEnergy',
                symbol: 'ENERGY_PLAN_PROPERTY_ENERGY',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '物业补贴',
        path: '/propertyFeeSubsidy',
        redirect: '/propertyFeeSubsidy/index',
        component: '/propertyFeeSubsidy',
        symbol: 'PROPERTY_FEE_SUBSIDY',
        level: 1,
        icon: 'propertyFeeSubsidyIcon',
        show: true,
        children: [
            {
                title: '列表',
                path: '/propertyFeeSubsidy/index',
                redirect: '/propertyFeeSubsidy/index',
                component: '/propertyFeeSubsidy',
                symbol: 'WARRANT_MANAGEMENT_INDEX',
                level: 2,
                show: false
            },
            {
                title: '详情',
                path: '/propertyFeeSubsidy/detail/:id',
                redirect: '/propertyFeeSubsidy/detail/:id',
                component: '/propertyFeeSubsidy/detail',
                symbol: 'WARRANT_MANAGEMENT_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '消息中心',
        path: '/messageCenter',
        component: '/messageCenter',
        symbol: 'MESSAGE_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false
    },
    {
        title: '帮助中心',
        path: '/helpCenter',
        component: '/helpCenter',
        symbol: 'HELP_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false,
        children: [
            {
                title: '问题分类',
                path: '/helpCenter/category',
                component: '/helpCenter/category',
                symbol: 'HELP_CENTER_CATEGORY',
                level: 2,
                show: false
            },
            {
                title: '问题详情',
                path: '/helpCenter/detail',
                component: '/helpCenter/detail',
                symbol: 'HELP_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '我要反馈',
        path: '/feedback',
        component: '/feedback',
        symbol: 'FEEDBACK',
        level: 1,
        icon: 'homeIcon',
        show: false
    },

    // 物业管理菜单
    {
        title: '项目楼宇',
        path: '/assets',
        redirect: '/assets/index',
        symbol: 'ASSETS',
        level: 1,
        icon: 'assetsIcon',
        show: true,
        children: [
            {
                title: '全部主页',
                path: '/assets/index',
                component: '/assets/property',
                symbol: 'ASSETS_PROPERTY_INDEX',
                level: 2,
                show: false
            },
            {
                title: '项目详情（楼宇列表）',
                path: '/assets/project/:projectId',
                component: '/assets/property/components/Project/detail',
                symbol: 'ASSETS_PROPERTY_PROJECT',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(项目进入)',
                path: '/assets/building/:projectId/:buildingId',
                component: '/assets/property/components/Building/detail',
                symbol: 'ASSETS_PROPERTY_BUILDING_FROM_PRO',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(楼宇主页直接进入)',
                path: '/assets/building/:buildingId',
                component: '/assets/property/components/Building/detail',
                symbol: 'ASSETS_PROPERTY_BUILDING_FROM_BUI',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '用户管理',
        path: '/userManagement',
        redirect: '/userManagement',
        component: '/userManagement',
        symbol: 'USER_MANAGEMENT',
        level: 1,
        icon: 'userManagementIcon',
        show: true
    },
    {
        title: '通行管理',
        path: '/passManagement',
        redirect: '/passManagement/visitorsLog',
        symbol: 'PASS_MANAGEMENT',
        level: 1,
        icon: 'passManagementIcon',
        show: true,
        children: [
            {
                title: '访客记录',
                path: '/passManagement/visitorsLog',
                redirect: '/passManagement/visitorsLog',
                symbol: 'PASS_MANAGEMENT_VISITORS_LOG',
                component: '/passManagement/visitorsLog',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '消息中心',
        path: '/messageCenter',
        component: '/messageCenter',
        symbol: 'MESSAGE_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false
    },
    {
        title: '帮助中心',
        path: '/helpCenter',
        component: '/helpCenter',
        symbol: 'HELP_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false,
        children: [
            {
                title: '问题分类',
                path: '/helpCenter/category',
                component: '/helpCenter/category',
                symbol: 'HELP_CENTER_CATEGORY',
                level: 2,
                show: false
            },
            {
                title: '问题详情',
                path: '/helpCenter/detail',
                component: '/helpCenter/detail',
                symbol: 'HELP_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '我要反馈',
        path: '/feedback',
        component: '/feedback',
        symbol: 'FEEDBACK',
        level: 1,
        icon: 'homeIcon',
        show: false
    },

    // 设置后台菜单
    {
        title: '统计报表',
        path: '/statisticalReport',
        redirect: '/statisticalReport/dataOverview',
        symbol: 'STATISTICAL_REPORT',
        level: 1,
        icon: 'statisticalReportIcon',
        show: true,
        children: [
            {
                title: '数据总览',
                path: '/statisticalReport/dataOverview',
                redirect: '/statisticalReport/dataOverview',
                component: '/statisticalReport/dataOverview',
                symbol: 'STATISTICAL_REPORT_DATA_OVERVIEW',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '数据管理',
        path: '/dataManagement',
        redirect: '/dataManagement',
        component: '/userManagement',
        symbol: 'DATA_MANAGEMENT',
        level: 1,
        icon: 'dataManagementIcon',
        show: true
    },
    {
        title: '企业信息',
        component: '/settingCenter/enterprise',
        icon: 'enterpriseIcon',
        level: 1,
        path: '/settingCenter/enterprise',
        redirect: '/settingCenter/enterprise',
        show: true,
        symbol: 'SETTING_CENTER_ENTER_PRISE'
    },
    {
        title: '员工管理',
        children: [
            {
                title: '人员管理',
                component: '/settingCenter/staffManagement/staff',
                level: 2,
                path: '/settingCenter/staffManagement/staff',
                redirect: '/settingCenter/staffManagement/staff',
                show: true,
                symbol: 'SETTING_CENTER_STAFF_MANAGEMENT_STAFF'
            },
            {
                title: '角色管理',
                component: '/settingCenter/staffManagement/role',
                level: 2,
                path: '/settingCenter/staffManagement/role',
                redirect: '/settingCenter/staffManagement/role',
                show: true,
                symbol: 'SETTING_CENTER_STAFF_MANAGEMENT_ROLE'
            },
            {
                title: '部门管理',
                component: '/settingCenter/staffManagement/department',
                level: 2,
                path: '/settingCenter/staffManagement/department',
                redirect: '/settingCenter/staffManagement/department',
                show: true,
                symbol: 'SETTING_CENTER_STAFF_MANAGEMENT_DEPARTMENT'
            },
            {
                title: '职位管理',
                component: '/settingCenter/staffManagement/position',
                level: 2,
                path: '/settingCenter/staffManagement/position',
                redirect: '/settingCenter/staffManagement/position',
                show: true,
                symbol: 'SETTING_CENTER_STAFF_MANAGEMENT_POSITION'
            }
        ],
        icon: 'staffManagementIcon',
        level: 1,
        path: '/settingCenter/staffManagement',
        redirect: '/settingCenter/staffManagement/staff',
        show: true,
        symbol: 'SETTING_CENTER_STAFF_MANAGEMENT'
    },
    {
        title: '基础设置',
        children: [
            {
                title: '资产标签',
                component: '/settingCenter/basic/assetTag',
                level: 2,
                path: '/settingCenter/basic/assetTag',
                redirect: '/settingCenter/basic/assetTag',
                show: true,
                symbol: 'SETTING_CENTER_BASIC_ASSET_TAG'
            },
            {
                title: '配套类型',
                component: '/settingCenter/basic/supportingType',
                level: 2,
                path: '/settingCenter/basic/supportingType',
                redirect: '/settingCenter/basic/supportingType',
                show: true,
                symbol: 'SETTING_CENTER_BASIC_SUPPORTING_TYPE'
            },
            {
                title: '房间类型',
                component: '/settingCenter/basic/roomType',
                level: 2,
                path: '/settingCenter/basic/roomType',
                redirect: '/settingCenter/basic/roomType',
                show: true,
                symbol: 'SETTING_CENTER_BASIC_ROOM_TYPE'
            },
            {
                title: '信用分规则',
                component: '/settingCenter/basic/creditScore',
                level: 2,
                path: '/settingCenter/basic/creditScore',
                redirect: '/settingCenter/basic/creditScore',
                show: true,
                symbol: 'SETTING_CENTER_BASIC_CREDIT_SCORE'
            },
            {
                title: '等级规则',
                component: '/settingCenter/basic/levelRules',
                level: 2,
                path: '/settingCenter/basic/levelRules',
                redirect: '/settingCenter/basic/levelRules',
                show: true,
                symbol: 'SETTING_CENTER_BASIC_LEVEL_RULES'
            }
        ],
        icon: 'basicIcon',
        level: 1,
        path: '/settingCenter/basic',
        redirect: '/settingCenter/basic/assetTag',
        show: true,
        symbol: 'SETTING_CENTER_BASIC'
    },
    {
        title: '合同设置',
        children: [
            {
                title: '业务经营方',
                component: '/settingCenter/contractSetting/entrustedPart',
                level: 2,
                path: '/settingCenter/contractSetting/entrustedPart',
                redirect: '/settingCenter/contractSetting/entrustedPart',
                show: true,
                symbol: 'SETTING_CENTER_CONTRACT_SETTING_ENTRUSTED_PART'
            },
            {
                title: '合同参数',
                component: '/settingCenter/contractSetting/contractParams',
                level: 2,
                path: '/settingCenter/contractSetting/contractParams',
                redirect: '/settingCenter/contractSetting/contractParams',
                show: true,
                symbol: 'SETTING_CENTER_CONTRACT_SETTING_CONTRACT_PARAMS'
            },
            {
                title: '电子合同签章',
                children: [
                    {
                        component: '/settingCenter/contractSetting/eleContractSigned',
                        level: 3,
                        path: '/settingCenter/contractSetting/eleContractSigned/index',
                        redirect: '/settingCenter/contractSetting/eleContractSigned/index',
                        show: false,
                        symbol: 'SETTING_CENTER_CONTRACT_SETTING_ELE_CONTRACT_SIGNED_INDEX',
                        title: '电子合同签章主页'
                    },
                    {
                        component: '/settingCenter/contractSetting/eleContractSigned/detail',
                        level: 3,
                        path: '/settingCenter/contractSetting/eleContractSigned/detail/:id',
                        redirect: '/settingCenter/contractSetting/eleContractSigned/detail/:id',
                        show: false,
                        symbol: 'SETTING_CENTER_CONTRACT_SETTING_ELE_CONTRACT_SIGNED_DETAIL',
                        title: '电子合同签章详情'
                    }
                ],
                level: 2,
                path: '/settingCenter/contractSetting/eleContractSigned',
                redirect: '/settingCenter/contractSetting/eleContractSigned/index',
                show: true,
                symbol: 'SETTING_CENTER_CONTRACT_SETTING_ELE_CONTRACT_SIGNED'
            },
            {
                title: '打印模板',
                component: '/settingCenter/contractSetting/contractPrintTemplate',
                level: 2,
                path: '/settingCenter/contractSetting/contractPrintTemplate',
                redirect: '/settingCenter/contractSetting/contractPrintTemplate',
                show: true,
                symbol: 'SETTING_CENTER_CONTRACT_SETTING_CONTRACT_PRINT_TEMPLATE'
            }
        ],
        icon: 'contractSettingIcon',
        level: 1,
        path: '/settingCenter/contractSetting',
        redirect: '/settingCenter/contractSetting/entrustedPart',
        show: true,
        symbol: 'SETTING_CENTER_CONTRACT_SETTING'
    },
    {
        title: '招商设置',
        children: [
            {
                title: '阶段及成交机率设置',
                component: '/settingCenter/merchantSetting/chance',
                level: 2,
                path: '/settingCenter/merchantSetting/chance',
                redirect: '/settingCenter/merchantSetting/chance',
                show: true,
                symbol: 'SETTING_CENTER_MERCHANT_CHANCE'
            },
            {
                title: '客户意向设置',
                component: '/settingCenter/merchantSetting/intent',
                level: 2,
                path: '/settingCenter/merchantSetting/intent',
                redirect: '/settingCenter/merchantSetting/intent',
                show: true,
                symbol: 'SETTING_CENTER_MERCHANT_INTENT'
            },
            {
                title: '跟进类型设置',
                component: '/settingCenter/merchantSetting/intent',
                level: 2,
                path: '/settingCenter/merchantSetting/follow',
                redirect: '/settingCenter/merchantSetting/follow',
                show: true,
                symbol: 'SETTING_CENTER_MERCHANT_FOLLOW'
            },
            {
                title: '来源渠道设置',
                component: '/settingCenter/merchantSetting/intent',
                level: 2,
                path: '/settingCenter/merchantSetting/source',
                redirect: '/settingCenter/merchantSetting/source',
                show: true,
                symbol: 'SETTING_CENTER_MERCHANT_SOURCE'
            },
            {
                title: '客户标签设置',
                component: '/settingCenter/merchantSetting/intent',
                level: 2,
                path: '/settingCenter/merchantSetting/tag',
                redirect: '/settingCenter/merchantSetting/tag',
                show: true,
                symbol: 'SETTING_CENTER_MERCHANT_TAG'
            }
        ],
        icon: 'merchantSettingIcon',
        level: 1,
        path: '/settingCenter/merchantSetting',
        redirect: '/settingCenter/merchantSetting/chance',
        show: true,
        symbol: 'SETTING_CENTER_MERCHANT'
    },
    {
        title: '财务设置',
        children: [
            {
                title: '付款周期设置',
                component: '/settingCenter/financialSetting/paymentCycle',
                level: 2,
                path: '/settingCenter/financialSetting/paymentCycle',
                redirect: '/settingCenter/financialSetting/paymentCycle',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_PAYMENT_CYCLE'
            },
            {
                title: '税费类型管理',
                component: '/settingCenter/financialSetting/chargeType',
                level: 2,
                path: '/settingCenter/financialSetting/chargeType',
                redirect: '/settingCenter/financialSetting/chargeType',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_CHARGE_TYPE'
            },
            {
                title: '违约金规则',
                component: '/settingCenter/financialSetting/latePayment',
                level: 2,
                path: '/settingCenter/financialSetting/latePayment',
                redirect: '/settingCenter/financialSetting/latePayment',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_LATE_PAYMENT'
            },
            {
                title: '收款账号',
                children: [
                    {
                        title: '收款账号主页',
                        component: '/settingCenter/financialSetting/collectionAccountOld',
                        level: 3,
                        path: '/settingCenter/financialSetting/collectionAccountOld/index',
                        redirect: '/settingCenter/financialSetting/collectionAccountOld/index',
                        show: false,
                        symbol: 'SETTING_CENTER_FINANCIAL_SETTING_COLLECTION_ACCOUNT_OLD_INDEX'
                    },
                    {
                        title: '收款账号详情',
                        component: '/settingCenter/financialSetting/collectionAccountOld/detail',
                        level: 3,
                        path: '/settingCenter/financialSetting/collectionAccountOld/detail/:id',
                        redirect: '/settingCenter/financialSetting/collectionAccountOld/detail/:id',
                        show: false,
                        symbol: 'SETTING_CENTER_FINANCIAL_SETTING_COLLECTION_ACCOUNT_OLD_DETAIL'
                    }
                ],
                level: 2,
                path: '/settingCenter/financialSetting/collectionAccountOld',
                redirect: '/settingCenter/financialSetting/collectionAccountOld/index',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_COLLECTION_ACCOUNT_OLD'
            },
            {
                title: '账单设置',
                component: '/settingCenter/financialSetting/bill',
                level: 2,
                path: '/settingCenter/financialSetting/bill',
                redirect: '/settingCenter/financialSetting/bill',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_BILL'
            },
            {
                title: '凭证设置',
                children: [
                    {
                        title: '凭证设置主页',
                        component: '/settingCenter/financialSetting/credentSet',
                        level: 3,
                        path: '/settingCenter/financialSetting/credentSet/index',
                        redirect: '/settingCenter/financialSetting/credentSet/index',
                        show: false,
                        symbol: 'SETTING_CENTER_FINANCIAL_SETTING_CREDENTSET_INDEX'
                    },
                    {
                        title: '用友NC凭证接口管理',
                        component: '/settingCenter/financialSetting/credentSet/yongyou/detail',
                        level: 3,
                        path: '/settingCenter/financialSetting/credentSet/yongyou/detail',
                        redirect: '/settingCenter/financialSetting/credentSet/yongyou/detail',
                        show: false,
                        symbol: 'SETTING_CENTER_FINANCIAL_SETTING_CREDENTSET_YONGYOU_DETAIL'
                    }
                ],
                level: 2,
                path: '/settingCenter/financialSetting/credentSet',
                redirect: '/settingCenter/financialSetting/credentSet/index',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_CREDENTSET'
            },
            {
                title: '收入归属方管理',
                component: '/settingCenter/financialSetting/incomeBelongManage',
                level: 2,
                path: '/settingCenter/financialSetting/incomeBelongManage',
                redirect: '/settingCenter/financialSetting/incomeBelongManage',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_INCOMEBELONGMANGE'
            },
            {
                title: '发票收据设置',
                component: '/settingCenter/financialSetting/invoiceSet',
                level: 2,
                path: '/settingCenter/financialSetting/invoiceSet',
                redirect: '/settingCenter/financialSetting/invoiceSet',
                show: true,
                symbol: 'SETTING_CENTER_FINANCIAL_SETTING_INVOICESET'
            }
        ],
        icon: 'financialSettingIcon',
        level: 1,
        path: '/settingCenter/financialSetting',
        redirect: '/settingCenter/financialSetting/paymentCycle',
        show: true,
        symbol: 'SETTING_CENTER_FINANCIAL_SETTING'
    },
    {
        title: '房源设置',
        children: [
            {
                title: '关联资产',
                component: '/settingCenter/houseManagement/assets',
                level: 2,
                path: '/settingCenter/houseManagement/assets',
                redirect: '/settingCenter/houseManagement/assets',
                show: true,
                symbol: 'SETTING_CENTER_HOUSE_MANAGEMENT_ASSETS'
            },
            {
                title: '房源分类',
                component: '/settingCenter/houseManagement/subUse',
                level: 2,
                path: '/settingCenter/houseManagement/subUse',
                redirect: '/settingCenter/houseManagement/subUse',
                show: true,
                symbol: 'SETTING_CENTER_HOUSE_MANAGEMENT_SUB_USE'
            }
        ],
        icon: 'houseManagementIcon',
        level: 1,
        path: '/settingCenter/houseManagement',
        redirect: '/settingCenter/houseManagement/assets',
        show: true,
        symbol: 'SETTING_CENTER_HOUSE_MANAGEMENT'
    },
    {
        title: '工单设置',
        children: [
            {
                title: '标准工单',
                component: '/settingCenter/workOrder/stander',
                level: 2,
                path: '/settingCenter/workOrder/stander',
                redirect: '/settingCenter/workOrder/stander',
                show: true,
                symbol: 'SETTING_CENTER_WORK_ORDER_STANDER'
            },
            {
                title: '自定义工单',
                component: '/settingCenter/workOrder/custom',
                level: 2,
                path: '/settingCenter/workOrder/custom',
                redirect: '/settingCenter/workOrder/custom',
                show: true,
                symbol: 'SETTING_CENTER_WORK_ORDER_CUSTOM'
            }
        ],
        icon: 'workOrderIcon',
        level: 1,
        path: '/settingCenter/workOrder',
        redirect: '/settingCenter/workOrder/stander',
        show: true,
        symbol: 'SETTING_CENTER_WORK_ORDER'
    },
    {
        title: '审批流程',
        children: [
            {
                title: '住房租赁合同签约',
                component: '/settingCenter/approvalProcess/housingLeaseSign',
                level: 2,
                path: '/settingCenter/approvalProcess/housingLeaseSign',
                redirect: '/settingCenter/approvalProcess/housingLeaseSign',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_HOUSING_LEASE_SIGN'
            },
            {
                title: '商办租赁合同签约',
                component: '/settingCenter/approvalProcess/businessLeaseSign',
                level: 2,
                path: '/settingCenter/approvalProcess/businessLeaseSign',
                redirect: '/settingCenter/approvalProcess/businessLeaseSign',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_BUSINESS_LEASE_SIGN'
            },
            {
                title: '住房租赁合同退租',
                component: '/settingCenter/approvalProcess/housingLeaseWithdrawal',
                level: 2,
                path: '/settingCenter/approvalProcess/housingLeaseWithdrawal',
                redirect: '/settingCenter/approvalProcess/housingLeaseWithdrawal',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_HOUSING_LEASE_WITHDRAWAL'
            },
            {
                title: '商办租赁合同退租',
                component: '/settingCenter/approvalProcess/businessLeaseWithdrawal',
                level: 2,
                path: '/settingCenter/approvalProcess/businessLeaseWithdrawal',
                redirect: '/settingCenter/approvalProcess/businessLeaseWithdrawal',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_BUSINESS_LEASE_WITHDRAWAL'
            },
            {
                title: '添加商办房源',
                component: '/settingCenter/approvalProcess/businessLeaseWithAdd',
                level: 2,
                path: '/settingCenter/approvalProcess/businessLeaseWithAdd',
                redirect: '/settingCenter/approvalProcess/businessLeaseWithAdd',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_BUSINESS_LEASE_WITHADD'
            },
            {
                title: '添加租赁房源',
                component: '/settingCenter/approvalProcess/rentHouseWithAdd',
                level: 2,
                path: '/settingCenter/approvalProcess/rentHouseWithAdd',
                redirect: '/settingCenter/approvalProcess/rentHouseWithAdd',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_RENT_HOUSE_WITHADD'
            },
            {
                title: '添加公房',
                component: '/settingCenter/approvalProcess/publicHouseWithAdd',
                level: 2,
                path: '/settingCenter/approvalProcess/publicHouseWithAdd',
                redirect: '/settingCenter/approvalProcess/publicHouseWithAdd',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_PUBLIC_HOUSE_WITHADD'
            },
            {
                title: '添加安置房',
                component: '/settingCenter/approvalProcess/placemenHouseWithAdd',
                level: 2,
                path: '/settingCenter/approvalProcess/placemenHouseWithAdd',
                redirect: '/settingCenter/approvalProcess/placemenHouseWithAdd',
                show: true,
                symbol: 'SETTING_CENTER_APPROVAL_PROCESS_PLACEMENT_HOUSE_WITHADD'
            }
        ],
        icon: 'approvalProcessIcon',
        level: 1,
        path: '/settingCenter/approvalProcess',
        redirect: '/settingCenter/approvalProcess/housingLeaseSign',
        show: true,
        symbol: 'SETTING_CENTER_APPROVAL_PROCESS'
    },
    {
        title: '通行设置',
        path: '/settingCenter/pass',
        redirect: '/settingCenter/pass/doorPost',
        symbol: 'SETTING_CENTER_PASS',
        icon: 'passManagementIcon',
        level: 1,
        show: true,
        children: [
            {
                title: '门岗管理',
                path: '/settingCenter/pass/doorPost',
                redirect: '/settingCenter/pass/doorPost',
                component: '/settingCenter/pass/doorPost',
                symbol: 'SETTING_CENTER_DOOR_POST',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '其他设置',
        children: [
            {
                title: '其他参数',
                component: '/settingCenter/otherSetting/otherParams',
                level: 2,
                path: '/settingCenter/otherSetting/otherParams',
                redirect: '/settingCenter/otherSetting/otherParams',
                show: true,
                symbol: 'SETTING_CENTER_OTHER_SETTING_OTHER_PARAMS'
            },
            {
                title: '物业公司',
                component: '/settingCenter/otherSetting/propertyCompany',
                level: 2,
                path: '/settingCenter/otherSetting/propertyCompany',
                redirect: '/settingCenter/otherSetting/propertyCompany',
                show: true,
                symbol: 'SETTING_CENTER_OTHER_SETTING_PROPERTY_COMPANY'
            }
        ],
        icon: 'otherSettingIcon',
        level: 1,
        path: '/settingCenter/otherSetting',
        redirect: '/settingCenter/otherSetting/otherParams',
        show: true,
        symbol: 'SETTING_CENTER_OTHER_SETTING'
    },
    {
        title: '操作日志',
        component: '/settingCenter/operationLog',
        icon: 'operationLogIcon',
        level: 1,
        path: '/settingCenter/operationLog',
        redirect: '/settingCenter/operationLog',
        show: true,
        symbol: 'SETTING_CENTER_OPERATION_LOG'
    },
    {
        title: '微信商户设置',
        children: [
            {
                title: '微信支付账户管理',
                component: '/settingCenter/wechatBusiness/wechatPayAccount',
                level: 2,
                path: '/settingCenter/wechatBusiness/wechatPayAccount',
                redirect: '/settingCenter/wechatBusiness/wechatPayAccount',
                show: true,
                symbol: 'SETTING_CENTER_WECHAT_PAY_ACCOUNT'
            }
        ],
        icon: 'wechatBusinessIcon',
        level: 1,
        path: '/settingCenter/wechatBusiness',
        redirect: '/settingCenter/wechatBusiness/wechatPayAccount',
        show: true,
        symbol: 'SETTING_CENTER_WECHAT'
    },


    // 之前的备份
    {
        title: '项目楼宇',
        path: '/assets',
        redirect: '/assets/index',
        symbol: 'ASSETS',
        level: 1,
        icon: 'assetsManagementIcon',
        show: true,
        children: [
            {
                title: '全部主页',
                path: '/assets/index',
                component: '/assets',
                symbol: 'ASSETS_INDEX',
                level: 2,
                show: false
            },
            {
                title: '项目详情（楼宇列表）',
                path: '/assets/project/:projectId',
                component: '/assets/components/Project/detail',
                symbol: 'ASSETS_PROJECT',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(项目进入)',
                path: '/assets/building/:projectId/:buildingId',
                component: '/assets/components/Building/detail',
                symbol: 'ASSETS_BUILDING_FROM_PRO',
                level: 2,
                show: false
            },
            {
                title: '楼宇详情(楼宇主页直接进入)',
                path: '/assets/building/:buildingId',
                component: '/assets/components/Building/detail',
                symbol: 'ASSETS_BUILDING_FROM_BUI',
                level: 2,
                show: false
            },
            {
                title: '下账列表',
                path: '/assets/debit',
                redirect: '/assets/debit',
                component: '/assets/debit',
                symbol: 'ASSETS_DEBIT',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '房源管理',
        path: '/propertyManagement',
        redirect: '/propertyManagement',
        component: '/propertyManagement',
        symbol: 'PROPERTY_MANAGEMENT',
        level: 1,
        icon: 'propertyManagementIcon',
        show: true
    },
    {
        title: '招商中心',
        path: '/merchantCenter',
        redirect: '/merchantCenter/index',
        symbol: 'MERCHANT_CENTER',
        level: 1,
        icon: 'investmentCenterIcon',
        show: true,
        children: [
            {
                title: '招商中心-主页',
                path: '/merchantCenter/index',
                redirect: '/merchantCenter/index',
                component: '/merchantCenter/init',
                symbol: 'MERCHANT_CENTER_INDEX',
                level: 2,
                show: false
            },
            {
                title: '招商中心-详情',
                path: '/merchantCenter/detail/:id',
                redirect: '/merchantCenter/detail/:id',
                component: '/merchantCenter/detail',
                symbol: 'MERCHANT_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '合同管理',
        path: '/contractManagement',
        redirect: '/contractManagement',
        component: '/contractManagement',
        symbol: 'CONTRACT_MANAGEMENT',
        level: 1,
        icon: 'contractManagementIcon',
        show: true
    },
    {
        title: '收支管理',
        path: '/incomeExpenditureManagement',
        redirect: '/incomeExpenditureManagement/bill/index',
        symbol: 'INCOME_EXPENDITURE_MANAGEMENT',
        level: 1,
        icon: 'incomeExpenditureManagementIcon',
        show: true,
        children: [
            {
                title: '账单',
                path: '/incomeExpenditureManagement/bill',
                redirect: '/incomeExpenditureManagement/bill/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL',
                level: 2,
                show: true,
                children: [
                    {
                        title: '账单-主页',
                        path: '/incomeExpenditureManagement/bill/index',
                        component: '/incomeExpenditureManagement/bill',
                        redirect: '/incomeExpenditureManagement/bill/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '账单-详情',
                        path: '/incomeExpenditureManagement/bill/detail/:billType/:id',
                        redirect: '/incomeExpenditureManagement/bill/detail/:billType/:id',
                        component: '/incomeExpenditureManagement/bill/detail',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '账单-已关闭的',
                        path: '/incomeExpenditureManagement/bill/closed',
                        redirect: '/incomeExpenditureManagement/bill/closed',
                        component: '/incomeExpenditureManagement/bill/closed',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_BILL_CLOSED',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '流水',
                path: '/incomeExpenditureManagement/turnover',
                redirect: '/incomeExpenditureManagement/turnover/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER',
                level: 2,
                show: true,
                children: [
                    {
                        title: '流水-主页',
                        path: '/incomeExpenditureManagement/turnover/index',
                        component: '/incomeExpenditureManagement/turnover',
                        redirect: '/incomeExpenditureManagement/turnover/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '流水-详情',
                        path: '/incomeExpenditureManagement/turnover/detail/:id',
                        component: '/incomeExpenditureManagement/turnover/detail',
                        redirect: '/incomeExpenditureManagement/turnover/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '作废流水回收站',
                        path: '/incomeExpenditureManagement/turnover/recycle',
                        component: '/incomeExpenditureManagement/turnover/recycle',
                        redirect: '/incomeExpenditureManagement/turnover/recycle',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_TURNOVER_RECYCLE',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '保证金',
                path: '/incomeExpenditureManagement/margin',
                redirect: '/incomeExpenditureManagement/margin/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN',
                level: 2,
                show: true,
                children: [
                    {
                        title: '保证金-主页',
                        path: '/incomeExpenditureManagement/margin/index',
                        component: '/incomeExpenditureManagement/margin',
                        redirect: '/incomeExpenditureManagement/margin/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '保证金-详情',
                        path: '/incomeExpenditureManagement/margin/detail/:id',
                        component: '/incomeExpenditureManagement/margin/detail',
                        redirect: '/incomeExpenditureManagement/margin/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_MARGIN_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '发票',
                path: '/incomeExpenditureManagement/invoice',
                redirect: '/incomeExpenditureManagement/invoice/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE',
                level: 2,
                show: true,
                children: [
                    {
                        title: '发票-主页',
                        path: '/incomeExpenditureManagement/invoice/index',
                        component: '/incomeExpenditureManagement/invoice',
                        redirect: '/incomeExpenditureManagement/invoice/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '发票-详情',
                        path: '/incomeExpenditureManagement/invoice/detail/:id',
                        component: '/incomeExpenditureManagement/invoice/detail',
                        redirect: '/incomeExpenditureManagement/invoice/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_DETAIL',
                        level: 3,
                        show: false
                    },
                    {
                        title: '发票-新增',
                        path: '/incomeExpenditureManagement/invoice/create/:type/:id',
                        component: '/incomeExpenditureManagement/invoice/create',
                        redirect: '/incomeExpenditureManagement/invoice/create/:type/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_INVOICE_CREATE',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '收据',
                path: '/incomeExpenditureManagement/receipt',
                redirect: '/incomeExpenditureManagement/receipt/index',
                symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT',
                level: 2,
                show: true,
                children: [
                    {
                        title: '收据-主页',
                        path: '/incomeExpenditureManagement/receipt/index',
                        component: '/incomeExpenditureManagement/receipt',
                        redirect: '/incomeExpenditureManagement/receipt/index',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '收据-详情',
                        path: '/incomeExpenditureManagement/receipt/detail/:id',
                        component: '/incomeExpenditureManagement/receipt/detail',
                        redirect: '/incomeExpenditureManagement/receipt/detail/:id',
                        symbol: 'INCOME_EXPENDITURE_MANAGEMENT_RECEIPT_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            }
        ]
    },
    {
        title: '工单管理',
        path: '/workOrderManagement',
        redirect: '/workOrderManagement',
        component: '/workOrderManagement',
        symbol: 'WORK_ORDER_MANAGEMENT',
        level: 1,
        icon: 'workOrderManagementIcon',
        show: true
    },
    {
        title: '用户管理',
        path: '/userManagement',
        redirect: '/userManagement',
        component: '/userManagement',
        symbol: 'USER_MANAGEMENT',
        level: 1,
        icon: 'userManagementIcon',
        show: true
    },
    {
        title: '配套设施',
        path: '/supportingFacilities',
        redirect: '/supportingFacilities/building',
        symbol: 'SUPPORTING_FACILITIES',
        level: 1,
        icon: 'supportingFacilitiesIcon',
        show: true,
        children: [
            {
                title: '楼宇设施',
                path: '/supportingFacilities/building',
                redirect: '/supportingFacilities/building',
                component: '/supportingFacilities/building',
                symbol: 'SUPPORTING_FACILITIES_BUILDING',
                level: 2,
                show: true
            },
            {
                title: '房源配套',
                path: '/supportingFacilities/house',
                redirect: '/supportingFacilities/house',
                component: '/supportingFacilities/house',
                symbol: 'SUPPORTING_FACILITIES_HOUSE',
                level: 2,
                show: true
            },
            {
                title: '水电气表',
                path: '/supportingFacilities/energy',
                redirect: '/supportingFacilities/energy',
                component: '/supportingFacilities/energy',
                symbol: 'SUPPORTING_FACILITIES_ENERGY',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '能源计划',
        path: '/energyPlan',
        redirect: '/energyPlan/businessWaterPlan/index',
        symbol: 'ENERGY_PLAN',
        level: 1,
        icon: 'energyPlanIcon',
        show: true,
        children: [
            {
                title: '商业用水计划',
                path: '/energyPlan/businessWaterPlan',
                redirect: '/energyPlan/businessWaterPlan/index',
                symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN',
                level: 2,
                show: true,
                children: [
                    {
                        title: '商业用水计划主页',
                        path: '/energyPlan/businessWaterPlan/index',
                        redirect: '/energyPlan/businessWaterPlan/index',
                        component: '/energyPlan/businessWaterPlan/index',
                        symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '商业用水计划详情',
                        path: '/energyPlan/businessWaterPlan/detail/:id',
                        redirect: '/energyPlan/businessWaterPlan/detail',
                        component: '/energyPlan/businessWaterPlan/detail',
                        symbol: 'ENERGY_PLAN_BUSINESS_WATER_PLAN_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '水电管理',
                path: '/energyPlan/energyManagement',
                redirect: '/energyPlan/energyManagement/index',
                symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT',
                level: 2,
                show: true,
                children: [
                    {
                        title: '水电管理主页',
                        path: '/energyPlan/energyManagement/index',
                        redirect: '/energyPlan/energyManagement/index',
                        component: '/energyPlan/energyManagement/index',
                        symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT_INDEX',
                        level: 3,
                        show: false
                    },
                    {
                        title: '水电管理详情',
                        path: '/energyPlan/energyManagement/detail/:id',
                        redirect: '/energyPlan/energyManagement/detail',
                        component: '/energyPlan/energyManagement/detail',
                        symbol: 'ENERGY_PLAN_ENERGY_MANAGEMENT_DETAIL',
                        level: 3,
                        show: false
                    }
                ]
            },
            {
                title: '他权物业水电',
                path: '/energyPlan/propertyEnergy',
                redirect: '/energyPlan/propertyEnergy',
                component: '/energyPlan/propertyEnergy',
                symbol: 'ENERGY_PLAN_PROPERTY_ENERGY',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '资产评估',
        path: '/assetValuation',
        redirect: '/assetValuation',
        component: '/assetValuation',
        symbol: 'ASSET_VALUATION',
        level: 1,
        icon: 'assetValuationIcon',
        show: true
    },
    {
        title: '统计报表',
        path: '/statisticalReport',
        redirect: '/statisticalReport/dataOverview',
        symbol: 'STATISTICAL_REPORT',
        level: 1,
        icon: 'statisticalReportIcon',
        show: true,
        children: [
            {
                title: '数据总览',
                path: '/statisticalReport/dataOverview',
                redirect: '/statisticalReport/dataOverview',
                component: '/statisticalReport/dataOverview',
                symbol: 'STATISTICAL_REPORT_DATA_OVERVIEW',
                level: 2,
                show: true
            },
            {
                title: '运营报表',
                path: '/statisticalReport/operatingReport',
                redirect: '/statisticalReport/operatingReport',
                component: '/statisticalReport/operatingReport',
                symbol: 'STATISTICAL_REPORT_OPERATING_REPORT',
                level: 2,
                show: true
            },
            {
                title: '收支报表',
                path: '/statisticalReport/paymentsReport',
                redirect: '/statisticalReport/paymentsReport',
                component: '/statisticalReport/paymentsReport',
                symbol: 'STATISTICAL_REPORT_PAYMENTS_REPORT',
                level: 2,
                show: true
            },
            {
                title: '用户报表',
                path: '/statisticalReport/userReport',
                redirect: '/statisticalReport/userReport',
                component: '/statisticalReport/userReport',
                symbol: 'STATISTICAL_REPORT_TENANT_REPORT',
                level: 2,
                show: true
            }
        ]
    },
    {
        title: '委托合同',
        path: '/commissionContract',
        redirect: '/commissionContract',
        component: '/commissionContract',
        symbol: 'COMMISSION_CONTRACT',
        level: 1,
        icon: 'commissionContractIcon',
        show: true
    },
    {
        title: '权证管理',
        path: '/warrantManagement',
        redirect: '/warrantManagement',
        component: '/warrantManagement',
        symbol: 'WARRANT_MANAGEMENT',
        level: 1,
        icon: 'warrantManagementIcon',
        show: true
    },
    {
        title: '物业补贴',
        path: '/propertyFeeSubsidy',
        redirect: '/propertyFeeSubsidy/index',
        component: '/propertyFeeSubsidy',
        symbol: 'PROPERTY_FEE_SUBSIDY',
        level: 1,
        icon: 'propertyFeeSubsidyIcon',
        show: true,
        children: [
            {
                title: '列表',
                path: '/propertyFeeSubsidy/index',
                redirect: '/propertyFeeSubsidy/index',
                component: '/propertyFeeSubsidy',
                symbol: 'WARRANT_MANAGEMENT_INDEX',
                level: 2,
                show: false
            },
            {
                title: '详情',
                path: '/propertyFeeSubsidy/detail/:id',
                redirect: '/propertyFeeSubsidy/detail/:id',
                component: '/propertyFeeSubsidy/detail',
                symbol: 'WARRANT_MANAGEMENT_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '消息中心',
        path: '/messageCenter',
        component: '/messageCenter',
        symbol: 'MESSAGE_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false
    },
    {
        title: '帮助中心',
        path: '/helpCenter',
        component: '/helpCenter',
        symbol: 'HELP_CENTER',
        level: 1,
        icon: 'homeIcon',
        show: false,
        children: [
            {
                title: '问题分类',
                path: '/helpCenter/category',
                component: '/helpCenter/category',
                symbol: 'HELP_CENTER_CATEGORY',
                level: 2,
                show: false
            },
            {
                title: '问题详情',
                path: '/helpCenter/detail',
                component: '/helpCenter/detail',
                symbol: 'HELP_CENTER_DETAIL',
                level: 2,
                show: false
            }
        ]
    },
    {
        title: '我要反馈',
        path: '/feedback',
        component: '/feedback',
        symbol: 'FEEDBACK',
        level: 1,
        icon: 'homeIcon',
        show: false
    }
];

export default routerConf;
