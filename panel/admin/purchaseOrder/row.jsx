export default item => <>
    <td>{item.number}</td>
    <td>{item.supplier?.title}</td>
    <td>{item.total}</td>
    <td>{item.purchaseOrderStatus}</td>
</>
