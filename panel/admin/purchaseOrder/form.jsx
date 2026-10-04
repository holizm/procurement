import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        required
        supplier
    />
    <DateTime
        orderDate
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
        purchaseOrderStatus
        required
    />
    <Numeric
        required
        total
    />
</>

export default <DialogForm inputs={inputs} />
