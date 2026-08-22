import {
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>procurementNumber</th>
    <th>procurementSupplier</th>
    <th>procurementTotal</th>
    <th>procurementStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.supplier?.title}</td>
    <td>{item.total}</td>
    <td>{item.supplierQuotationStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
