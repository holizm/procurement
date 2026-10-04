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
        placeholder='quotationDate'
        property='quotationDate'
        required
    />
    <Select
        options={[
            'received',
            'accepted',
            'rejected',
            'expired',
        ]}
        placeholder='state'
        property='supplierQuotationStatus'
        required
    />
    <Numeric
        placeholder='total'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
