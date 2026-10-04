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
        number
        required
    />
    <DateTime
        requestedDate
        required
    />
    <DateTime neededDate />
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
        purchaseRequestStatus
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
