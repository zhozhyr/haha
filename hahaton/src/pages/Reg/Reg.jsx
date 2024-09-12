import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from "react";

import UserForm from '../../components/Forms/RegUser';
import OrganizationForm from '../../components/Forms/RegOrganization';

import './Reg.css'
import bg from '../../assets/bg_reg.png'

function Registration() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return ( 
        <>
            <h1 className="header-title">BNTPNHA API</h1>
            <img src={bg} alt='bg'className='bg'/> 
            <div className='registration'>
                <h2 className="registration-title">РЕГИСТРАЦИЯ</h2>
                <TabGroup >
                    <TabList className="tab_list">
                        <Tab as='div' className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Пользователь</Tab>
                        <Tab as='div' className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Организация</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><UserForm/></TabPanel>
                        <TabPanel><OrganizationForm/></TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
            

        </>
    );
}

export default Registration;