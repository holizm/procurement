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
        quotationDate
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
        required
        supplierQuotationStatus
    />
    <Numeric
        required
        total
    />
</>

export default <DialogForm inputs={inputs} />
