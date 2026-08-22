import {
    DateTime,
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>procurementPurchaseRequest</th>
    <th>procurementNumber</th>
    <th>procurementRequestedDate</th>
    <th>procurementStatus</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <DateTime value={item.requestedDate} />
    <td>{item.purchaseRequestStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
