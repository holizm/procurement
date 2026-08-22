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
        placeholder='procurementQuotationDate'
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
        placeholder='procurementStatus'
        property='supplierQuotationStatus'
        required
    />
    <Numeric
        placeholder='procurementTotal'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
