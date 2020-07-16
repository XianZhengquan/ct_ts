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
