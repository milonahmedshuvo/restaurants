import Cover from "../../pages/Menu/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../Sheared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Order = () => {
    const categorys = ["salad","pizza","soup","dessert",'drinks']
    const {category} = useParams()
    const initialsIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialsIndex);


    const [menu] = useMenu()
    const dessert = menu.filter((item) => item.category === "dessert")
    const pizza = menu.filter((item) => item.category ==="pizza")
    const salad = menu.filter((item) => item.category === "salad")
    const soup = menu.filter((item) => item.category === 'soup')
    const drinks = menu.filter((item)=> item.category === "drinks")


    


  return (
    <div>
        <Helmet>
            <title> Bistro boss | our order </title>
        </Helmet>

        
      <Cover img={orderCoverImg} title="Our Food" />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
        
      </TabList>
      <TabPanel>
        <OrderTab items={salad} ></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={dessert}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
