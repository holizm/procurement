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
        placeholder='number'
        property='number'
        required
    />
    <DateTime
        placeholder='requestedDate'
        property='requestedDate'
        required
    />
    <DateTime
        placeholder='neededDate'
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
        placeholder='state'
        property='purchaseRequestStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
