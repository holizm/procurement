import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='supplier'
        property='supplier'
        required
    />
    <DateTime
        placeholder='orderDate'
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
        placeholder='state'
        property='purchaseOrderStatus'
        required
    />
    <Numeric
        placeholder='total'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
