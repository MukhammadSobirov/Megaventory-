import * as React from "react";
import data from "../data.json";
import {Link} from 'react-router-dom'
import './Main.css'

const Home = () => {
    const purchaseOrders = data.mvPurchaseOrders;
    return (
        <div className={'box'}>
            <div className={'title-box'}>
                <h1 className={'title-main'}>Hey there!</h1>
                <p className={'title-secondary'}>Here's my solution.</p>
                <p className={'name'}>by Mukhammad Sobirov</p>
            </div>
            <hr />
            <ul>
                <h2>Purchases :</h2>
                {purchaseOrders.map((entry) =>
                    <li key={entry.PurchaseOrderId}><Link
                        to={entry.PurchaseOrderNo}>{entry.PurchaseOrderTypeAbbreviation} - {entry.PurchaseOrderNo}</Link>
                    </li>)}
            </ul>
        </div>
    )
};

export default Home;
