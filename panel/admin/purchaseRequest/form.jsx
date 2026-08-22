import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='procurementNumber'
        property='number'
        required
    />
    <DateTime
        placeholder='procurementRequestedDate'
        property='requestedDate'
        required
    />
    <DateTime
        placeholder='procurementNeededDate'
        property='neededDate'
    />
    <Select
        options={[
            'draft',
            'submitted',
            'approved',
            'rejected',
            'ordered',
            'cancelled',
        ]}
        placeholder='procurementStatus'
        property='purchaseRequestStatus'
        required
    />
    <LongText
        placeholder='procurementDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
