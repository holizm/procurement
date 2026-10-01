import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <DateTime value={item.requestedDate} />
    <td>{item.purchaseRequestStatus}</td>
</>
