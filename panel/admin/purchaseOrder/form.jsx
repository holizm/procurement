import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='procurementNumber'
        property='number'
        required
    />
    <Text
        placeholder='procurementSupplier'
        property='supplier'
        required
    />
    <DateTime
        placeholder='procurementOrderDate'
        property='orderDate'
        required
    />
    <Select
        options={[
            'draft',
            'issued',
            'partiallyReceived',
            'received',
            'cancelled',
        ]}
        placeholder='procurementStatus'
        property='purchaseOrderStatus'
        required
    />
    <Numeric
        placeholder='procurementTotal'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
