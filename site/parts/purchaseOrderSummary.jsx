export default ({ purchaseOrder }) => <dl class='purchaseOrderSummary'>
    <dt class='number'>{purchaseOrder.number}</dt>
    <dd class='status'>{purchaseOrder.purchaseOrderStatus}</dd>
    <dd class='total'>{purchaseOrder.total}</dd>
</dl>
