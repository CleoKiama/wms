// TreasurerLayout.jsx
import React from 'react';
import {
    AccountBookOutlined,
    AreaChartOutlined,
    FileTextOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/kabu-logo-Beveled-shadow.png';

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const TreasurerLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const location = useLocation();

    const items = [
        getItem(<Link to="/treasurer/report">Transaction Report</Link>, '/treasurer/report', <FileTextOutlined />),
        getItem(<Link to="/treasurer/financialReport">Financial Report</Link>, '/treasurer/financialReport', <AccountBookOutlined />),
        getItem(<Link to="/treasurer/disbursement-management">Disbursement Management</Link>, '/treasurer/disbursement-management', <AreaChartOutlined />),
        getItem(<Link to="/treasurer/disbursement-details">Disbursement Details</Link>, '/treasurer/disbursement-details', <AreaChartOutlined />),
    ];

    const getSelectedKeys = () => {
        const path = location.pathname;
        return [path];
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #F8E8EC 70%, #d9f7be)',
            }}
        >
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'maroon',
                }}
            >
                <img
                    src={logo}
                    alt="Kabarak University Logo"
                    style={{
                    height: '60px',  // Adjust the height as needed
                    marginRight: '0 auto', // Add some spacing to the right of the logo
                    }}
                 />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={getSelectedKeys()}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        background: 'maroon',
                    }}
                />
            </Header>
            <Layout>
                <Content
                    style={{
                        padding: '0 20px',
                        minHeight: '100vh',
                        background: 'linear-gradient(to bottom, #F8E8EC 70%, #d9f7be)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{
                        color: 'maroon',
                        padding: '10px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                        marginBottom: '10px',
                        marginLeft: '24px'
                    }}>
                        Kabarak Student Welfare Treasurer Portal.
                    </div>
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Treasurer</Breadcrumb.Item>
                        <Breadcrumb.Item>Content</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        fontSize: '1.3em',
                        backgroundColor: '#92c282',
                    }}
                >
                    KABU Student Welfare Management System ©2025 Team Project.
                </Footer>
            </Layout>
        </Layout>
    );
};

export default TreasurerLayout;