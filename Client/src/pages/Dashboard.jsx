import React from 'react'
import Title from '../componet/Title/Title'
import Order from '../componet/Order/Order'
import Graph from '../componet/Graph/Graph'
import OrderTable from '../componet/Product/OrderTable'
import Footer from '../componet/Footer/Footer'

const Dashboard = () => {
    return (
        <>
            <div className="bg-[#DCE9F2] font-Rubik">
                <Title />
                <Order />
                <Graph />
                <OrderTable />
                <Footer />
            </div>
        </>
    )
}

export default Dashboard