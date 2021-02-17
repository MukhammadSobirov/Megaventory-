import {Link, useParams} from 'react-router-dom'
import data from "../data.json";
import './Main.css'

const Details = () => {
    const {id} = useParams()

    const dataToShow = +id === 1 ? data.mvPurchaseOrders[0]
        : +id === 2 ? data.mvPurchaseOrders[1]
            : data.mvPurchaseOrders[2]

    return (
        <div className={'box'}>
            <h1 className={'title-main'}>Purchase Details</h1>
            <ul>
                <li>{dataToShow.PurchaseOrderAddress}</li>
                <li>{dataToShow.PurchaseOrderContactPerson}</li>
                <li>{dataToShow.PurchaseOrderStatus}</li>
            </ul>
            <hr />
            <p>Purchase Order Details</p>
            <table>
                <tr>
                    <th>Product SKU</th>
                    <th>Quantity Ordered</th>
                    <th>Unit Price</th>
                    <th>Total Amount</th>
                </tr>
                {dataToShow.PurchaseOrderDetails.map(el => (
                    <tr>
                        <td>{el.PurchaseOrderRowProductSKU}</td>
                        <td>{el.PurchaseOrderRowQuantity}</td>
                        <td>{el.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                        <td>{el.PurchaseOrderRowTotalAmount}</td>
                    </tr>
                ))}
            </table>
            <div className={'back-btn'}>
                <Link to={'/'} >Back</Link>
            </div>
        </div>
    )
};

export default Details;
